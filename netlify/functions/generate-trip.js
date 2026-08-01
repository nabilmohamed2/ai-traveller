import { agent } from "../agent.js";

export async function handler(event, context) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "OK" }),
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { destination, noOfDays, noOfPeople, budget } = JSON.parse(event.body);

    if (!destination || !noOfDays || !noOfPeople || !budget) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields: destination, noOfDays, noOfPeople, budget" }),
      };
    }

    // Run LangGraph Agent
    const result = await agent.invoke({
      destination,
      noOfDays: Number(noOfDays),
      noOfPeople,
      budget,
      logs: [],
    });

    console.log("Agent invoke result state:", JSON.stringify(result));

    if (result.error) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: result.error, logs: result.logs }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        tripData: {
          hotels: result.hotels,
          itinerary: result.itinerary,
        },
        logs: result.logs,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
