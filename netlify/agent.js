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

// Generation node: Calls model with structured output mapping to zod schema
async function generatePlanNode(state) {
  const { destination, noOfDays, noOfPeople, budget, logs = [] } = state;
  const newLogs = [...logs, { step: "drafting", message: `Generating travel plan for ${destination} (${noOfDays} days, ${noOfPeople}, ${budget} budget)...` }];

  try {
    const model = new ChatGoogleGenerativeAI({
      model: "gemini-3.5-flash",
      apiKey: process.env.VITE_GOOGLE_GEMINI_AI_API_KEY || process.env.GOOGLE_API_KEY,
      temperature: 0.7,
    });

    // Enforce Zod structured output (Pydantic-like validation)
    const structuredModel = model.withStructuredOutput(travelPlanSchema);

    const prompt = `Generate a detailed Travel Plan for Location: ${destination}, for ${noOfDays} days for ${noOfPeople} with a ${budget} budget.
Ensure the output matches the required structured schema with recommended hotels and a day-by-day plan.`;

    newLogs.push({ step: "validating", message: "Sending prompt to Gemini with Zod schema constraints..." });
    const response = await structuredModel.invoke(prompt);

    newLogs.push({ step: "done", message: "Response received and validated successfully against Zod schema." });

    return {
      hotels: response.hotels || [],
      itinerary: response.itinerary || [],
      logs: newLogs,
    };
  } catch (err) {
    console.error("Generation error:", err);
    return {
      error: err.message,
      logs: [...newLogs, { step: "error", message: `Failed schema validation or generation: ${err.message}` }],
    };
  }
}

// Build LangGraph workflow with a single generation & validation node
const workflow = new StateGraph(TripState)
  .addNode("generatePlan", generatePlanNode)
  .addEdge(START, "generatePlan")
  .addEdge("generatePlan", END);

export const agent = workflow.compile();
