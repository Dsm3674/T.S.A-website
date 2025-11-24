// server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const BASE_API_URL = "https://generativelanguage.googleapis.com";
const API_VERSION = "v1beta";
// You can also use "gemini-flash-latest" if you prefer.
const MODEL_NAME = "gemini-1.5-flash";

const GEMINI_URL = `${BASE_API_URL}/${API_VERSION}/models/${MODEL_NAME}:generateContent`;
const API_KEY = process.env.GEMINI_API_KEY;

// Simple sanity log
if (!API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing in your .env file.");
} else {
  console.log("✅ GEMINI_API_KEY detected. Chatbot ready to use.");
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Gemini backend is running fine 🚀",
  });
});

// Main chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { userPrompt } = req.body;

    if (!userPrompt || typeof userPrompt !== "string") {
      return res.status(400).json({ error: "userPrompt is required" });
    }

    if (!API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY not configured on server",
      });
    }

    const systemPrompt =
      "You are an informative and friendly chatbot focused on Coppell, Texas " +
      "and the Brutalist Community Archive TSA 2025 project. " +
      "Keep answers concise, specific, and grounded in the idea of a community archive.";

    console.log("📩 Incoming prompt:", userPrompt);

    const response = await fetch(`${GEMINI_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `${systemPrompt}\n\nUser: ${userPrompt}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512,
          topP: 0.95,
          topK: 40,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Gemini API error:", data);
      return res.status(response.status).json({
        error: data.error || "Gemini API Error",
        details: data,
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map((p) => p.text)
        .join(" ")
        .trim() ||
      data?.promptFeedback?.blockReason ||
      "⚠️ Gemini returned an empty response.";

    console.log("📤 Reply to client:", reply.slice(0, 200), "...");

    res.json({ reply });
  } catch (err) {
    console.error("❌ /api/chat server error:", err);
    res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Gemini backend running on http://localhost:${PORT}`);
});
