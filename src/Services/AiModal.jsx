import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

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

const SYSTEM_INSTRUCTION =
  'Return ONLY valid JSON with two top-level keys: "hotels" (array of {HotelName, HotelAddress, Price, HotelImageUrl, GeoCoordinates, Rating, Description}) and "itinerary" (array of {day, bestTime, plan: [{placeName, PlaceDetails, PlaceImageUrl, GeoCoordinates, ticketPricing, Time}]}).';

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

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

async function sendWithGroq(prompt, modelName) {
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
        { role: "system", content: SYSTEM_INSTRUCTION },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Groq ${res.status}: ${errText}`);
  }

  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error("Empty response from Groq");
  }
  return { response: { text: () => text } };
}

export const chatSession = {
  async sendMessage(prompt) {
    let lastErr;

    if (groqApiKey) {
      for (const groqModel of GROQ_MODEL_FALLBACKS) {
        try {
          return await sendWithGroq(prompt, groqModel);
        } catch (err) {
          lastErr = err;
        }
      }
    }

    for (const modelName of MODEL_FALLBACKS) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: SYSTEM_INSTRUCTION,
        });
        const session = model.startChat({ generationConfig, history: [] });
        return await session.sendMessage(prompt);
      } catch (err) {
        lastErr = err;
        if (isTransientCapacityError(err)) {
          continue;
        }
        throw err;
      }
    }
    throw lastErr;
  },
};
  
  

