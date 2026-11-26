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

async function generateWithGroq(prompt, groqApiKey, modelName) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${groqApiKey}`,
    },
    body: JSON.stringify({
      model: modelName,
      temperature: 0.7,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            'Return ONLY valid JSON with two top-level keys: "hotels" (array of {HotelName, HotelAddress, Price, hotelImageUrl, GeoCoordinates, Rating, Description}) and "itinerary" (array of {day: number, bestTime: string, plan: [{placeName, PlaceDetails, PlaceImageUrl, GeoCoordinates, ticketPricing, Time}]}).',
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
  return travelPlanSchema.parse(JSON.parse(content));
}

// Generation node: Calls Groq primary (if configured), falling back to Gemini models
async function generatePlanNode(state) {
  const { destination, noOfDays, noOfPeople, budget, logs = [] } = state;
  const newLogs = [...logs, { step: "drafting", message: `Generating travel plan for ${destination} (${noOfDays} days, ${noOfPeople}, ${budget} budget)...` }];

  const groqApiKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
  const apiKey = process.env.VITE_GOOGLE_GEMINI_AI_API_KEY || process.env.GOOGLE_API_KEY;
  const prompt = `Generate a detailed Travel Plan for Location: ${destination}, for ${noOfDays} days for ${noOfPeople} with a ${budget} budget.
Ensure the output matches the required structured schema with recommended hotels and a day-by-day plan.`;

  let lastErr;

  if (groqApiKey) {
    for (const groqModel of GROQ_MODEL_FALLBACKS) {
      try {
        newLogs.push({ step: "validating", message: `Sending prompt to Groq (${groqModel}) with Zod schema validation...` });
        const response = await generateWithGroq(prompt, groqApiKey, groqModel);
        newLogs.push({ step: "done", message: `Response received from Groq (${groqModel}) and validated successfully.` });
        return {
          hotels: response.hotels || [],
          itinerary: response.itinerary || [],
          logs: newLogs,
        };
      } catch (err) {
        lastErr = err;
        newLogs.push({ step: "retrying", message: `Groq (${groqModel}) failed (${err.message}); trying next model...` });
      }
    }
  }

  for (const modelName of MODEL_FALLBACKS) {
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
