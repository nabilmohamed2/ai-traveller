import { StateGraph, Annotation, START, END } from "@langchain/langgraph";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

// Define state annotation
const TripState = Annotation.Root({
  destination: Annotation(),
  noOfDays: Annotation(),
  noOfPeople: Annotation(),
  budget: Annotation(),
  hotels: Annotation(),
  itinerary: Annotation(),
  logs: Annotation(),
  error: Annotation(),
});

// Pydantic-like validation schema using Zod
const travelPlanSchema = z.object({
  hotels: z.array(z.object({
    HotelName: z.string().describe("The name of the hotel"),
    HotelAddress: z.string().describe("Concise hotel address (3-4 words)"),
    Price: z.string().describe("Price description, e.g. $100 per night"),
    hotelImageUrl: z.string().describe("A descriptive image URL from Unsplash or empty string"),
    GeoCoordinates: z.string().describe("Latitude, Longitude of the hotel"),
    Rating: z.string().describe("Rating, e.g. 4.5 stars"),
    Description: z.string().describe("Brief description of the hotel")
  })).describe("List of recommended hotels"),
  itinerary: z.array(z.object({
    day: z.number().describe("Day number"),
    bestTime: z.string().describe("Best time of the day to visit, e.g. Morning"),
    plan: z.array(z.object({
      placeName: z.string().describe("Name of the tourist spot/attraction"),
      PlaceDetails: z.string().describe("Details about the spot"),
      PlaceImageUrl: z.string().describe("Image URL for the spot"),
      GeoCoordinates: z.string().describe("Latitude, Longitude of the spot"),
      ticketPricing: z.string().describe("Ticket pricing description"),
      Time: z.string().describe("Time needed to visit the spot")
    })).describe("Plan/activities for the day")
  })).describe("Daily travel itinerary plan")
});

const GROQ_MODEL_FALLBACKS = [
  "openai/gpt-oss-120b",
  "qwen/qwen3.8-27b",
  "openai/gpt-oss-20b",
];

const MODEL_FALLBACKS = [
  "gemini-flash-latest",
  "gemini-3.8-flash",
  "gemini-2.5-flash",
];

const TOTAL_BUDGET_MS = 22000;
const PER_CALL_TIMEOUT_MS = 10000;

function isTransientCapacityError(err) {
  const msg = String(err?.message || err || "");
  const status = err?.status || err?.code;
  return (
    status === 503 ||
    status === 429 ||
    /\b(503|429|UNAVAILABLE|RESOURCE_EXHAUSTED)\b/i.test(msg) ||
    /high demand|overloaded|try again later/i.test(msg)
  );
}

function toText(val, fallback = "") {
  if (val === null || val === undefined) return fallback;
  return String(val);
}

function normalizeGeoCoordinates(val) {
  if (Array.isArray(val) && val.length >= 2) {
    return `${val[0]}, ${val[1]}`;
  }
  if (val && typeof val === "object") {
    const lat = val.lat ?? val.latitude;
    const lng = val.lng ?? val.lon ?? val.longitude;
    if (lat !== undefined && lng !== undefined) {
      return `${lat}, ${lng}`;
    }
  }
  return toText(val);
}

function normalizeGroqPayload(raw) {
  const hotels = Array.isArray(raw?.hotels)
    ? raw.hotels.map((h) => ({
        HotelName: toText(h?.HotelName ?? h?.hotelName),
        HotelAddress: toText(h?.HotelAddress ?? h?.hotelAddress),
        Price:
          typeof h?.Price === "number"
            ? `$${h.Price} per night`
            : toText(h?.Price ?? h?.price),
        hotelImageUrl: toText(h?.hotelImageUrl ?? h?.HotelImageUrl),
        GeoCoordinates: normalizeGeoCoordinates(h?.GeoCoordinates ?? h?.geoCoordinates),
        Rating:
          typeof h?.Rating === "number"
            ? `${h.Rating} stars`
            : toText(h?.Rating ?? h?.rating),
        Description: toText(h?.Description ?? h?.description),
      }))
    : [];

  const itinerary = Array.isArray(raw?.itinerary)
    ? raw.itinerary.map((d, idx) => ({
        day: Number(d?.day) || idx + 1,
        bestTime: toText(d?.bestTime, "Morning"),
        plan: Array.isArray(d?.plan)
          ? d.plan.map((p) => ({
              placeName: toText(p?.placeName),
              PlaceDetails: toText(p?.PlaceDetails ?? p?.placeDetails),
              PlaceImageUrl: toText(p?.PlaceImageUrl ?? p?.placeImageUrl),
              GeoCoordinates: normalizeGeoCoordinates(p?.GeoCoordinates ?? p?.geoCoordinates),
              ticketPricing:
                typeof p?.ticketPricing === "number"
                  ? p.ticketPricing === 0
                    ? "Free"
                    : `$${p.ticketPricing}`
                  : toText(p?.ticketPricing),
              Time: toText(p?.Time ?? p?.time),
            }))
          : [],
      }))
    : [];

  return { hotels, itinerary };
}

async function generateWithGroq(prompt, groqApiKey, modelName, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${groqApiKey}`,
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: modelName,
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              'Return ONLY valid JSON with two top-level keys: "hotels" (array of {HotelName, HotelAddress, Price, hotelImageUrl, GeoCoordinates, Rating, Description}) and "itinerary" (array of {day: number, bestTime: string, plan: [{placeName, PlaceDetails, PlaceImageUrl, GeoCoordinates, ticketPricing, Time}]}). All fields except "day" MUST be strings (e.g. Price: "$120 per night", Rating: "4.5 stars", GeoCoordinates: "48.8566, 2.3522", ticketPricing: "$15" or "Free").',
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Groq ${res.status}: ${errText}`);
    }

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("Empty response from Groq");
    }
    const normalized = normalizeGroqPayload(JSON.parse(content));
    return travelPlanSchema.parse(normalized);
  } finally {
    clearTimeout(timer);
  }
}

// Generation node: Calls Groq primary (if configured), falling back to Gemini models
async function generatePlanNode(state) {
  const { destination, noOfDays, noOfPeople, budget, logs = [] } = state;
  const newLogs = [...logs, { step: "drafting", message: `Generating travel plan for ${destination} (${noOfDays} days, ${noOfPeople}, ${budget} budget)...` }];

  const groqApiKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
  const apiKey = process.env.VITE_GOOGLE_GEMINI_AI_API_KEY || process.env.GOOGLE_API_KEY;
  const prompt = `Generate a detailed Travel Plan for Location: ${destination}, for ${noOfDays} days for ${noOfPeople} with a ${budget} budget.
Ensure the output matches the required structured schema with recommended hotels and a day-by-day plan.`;

  const deadline = Date.now() + TOTAL_BUDGET_MS;
  let lastErr;

  if (groqApiKey) {
    for (const groqModel of GROQ_MODEL_FALLBACKS) {
      const remaining = deadline - Date.now();
      if (remaining < 1500) {
        lastErr = lastErr || new Error("Generation time budget exceeded");
        break;
      }
      try {
        newLogs.push({ step: "validating", message: `Sending prompt to Groq (${groqModel}) with Zod schema validation...` });
        const response = await generateWithGroq(
          prompt,
          groqApiKey,
          groqModel,
          Math.min(PER_CALL_TIMEOUT_MS, remaining)
        );
        newLogs.push({ step: "done", message: `Response received from Groq (${groqModel}) and validated successfully.` });
        return {
          hotels: response.hotels || [],
          itinerary: response.itinerary || [],
          logs: newLogs,
        };
      } catch (err) {
        lastErr = err.name === "AbortError" ? new Error(`Groq (${groqModel}) timed out`) : err;
        newLogs.push({ step: "retrying", message: `Groq (${groqModel}) failed (${lastErr.message}); trying next model...` });
      }
    }
  }

  for (const modelName of MODEL_FALLBACKS) {
    const remaining = deadline - Date.now();
    if (remaining < 1500) {
      lastErr = lastErr || new Error("Generation time budget exceeded");
      break;
    }
    try {
      const model = new ChatGoogleGenerativeAI({
        model: modelName,
        apiKey,
        temperature: 0.7,
        maxRetries: 0,
      });

      // Enforce Zod structured output (Pydantic-like validation)
      const structuredModel = model.withStructuredOutput(travelPlanSchema);

      newLogs.push({ step: "validating", message: `Sending prompt to ${modelName} with Zod schema constraints...` });
      const response = await structuredModel.invoke(prompt);

      newLogs.push({ step: "done", message: `Response received from ${modelName} and validated successfully against Zod schema.` });

      return {
        hotels: response.hotels || [],
        itinerary: response.itinerary || [],
        logs: newLogs,
      };
    } catch (err) {
      lastErr = err;
      if (isTransientCapacityError(err)) {
        newLogs.push({ step: "retrying", message: `${modelName} unavailable (${err.message}); trying fallback model...` });
        continue;
      }
      break;
    }
  }

  console.error("Generation error:", lastErr);
  return {
    error: lastErr?.message || "Failed to generate travel plan",
    logs: [...newLogs, { step: "error", message: `Failed schema validation or generation: ${lastErr?.message}` }],
  };
}

// Build LangGraph workflow with a single generation & validation node
const workflow = new StateGraph(TripState)
  .addNode("generatePlan", generatePlanNode)
  .addEdge(START, "generatePlan")
  .addEdge("generatePlan", END);

export const agent = workflow.compile();
