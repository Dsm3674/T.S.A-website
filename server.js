import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Loads environment variables from .env
const app = express();

app.use(cors());
app.use(express.json());

const BASE_API_URL = "https://generativelanguage.googleapis.com";
const API_VERSION = "v1beta";

const GEMINI_URL = `${BASE_API_URL}/${API_VERSION}/models/gemini-flash-latest:generateContent`;


async function listAvailableModels(apiKey) {
  try {
    const listModelsUrl = `${BASE_API_URL}/${API_VERSION}/models?key=${apiKey}`;
    console.log("ℹ️ Attempting to list models from:", listModelsUrl);
    const response = await fetch(listModelsUrl);
    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Error response when listing models:", data);
      if (response.status === 403) {
        console.error("💡 Hint: A 403 error often means your API key is invalid or not authorized for the Generative Language API.");
        console.error("Please generate a new API key from Google AI Studio (aistudio.google.com/app/apikey) and try again.");
      }
      return { success: false, error: data.error, status: response.status };
    }

    console.log("✅ Successfully listed models!");
    if (data.models && data.models.length > 0) {
      console.log("Available models supporting 'generateContent':");
      const modelsSupportingGenerateContent = data.models.filter(model =>
        model.supportedGenerationMethods && model.supportedGenerationMethods.includes("generateContent")
      );
      if (modelsSupportingGenerateContent.length > 0) {
        modelsSupportingGenerateContent.forEach(model => {
          console.log(`  - ${model.name} (methods: ${model.supportedGenerationMethods.join(', ')})`);
        });
      } else {
        console.log("  No models found that support 'generateContent' with this API key.");
      }
    } else {
      console.log("  No models returned by the API with this key.");
    }

    return { success: true, models: data.models || [] };
  } catch (error) {
    console.error("❌ Network or unexpected error when listing models:", error);
    return { success: false, error: error.message };
  }
}


app.post("/api/chat", async (req, res) => {
  try {
    const { userPrompt } = req.body;

    if (!userPrompt) {
      return res.status(400).json({ error: "userPrompt is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("❌ Missing GEMINI_API_KEY in .env");
      return res
        .status(500)
        .json({ error: "Missing GEMINI_API_KEY in .env" });
    }


    const modelListResult = await listAvailableModels(apiKey);
    if (!modelListResult.success) {
      console.error("🔴 Failed to list models. This indicates an API key or service issue.");
      return res.status(500).json({
        error: "Failed to verify Gemini service access. Check API key status.",
        details: modelListResult.error,
        status: modelListResult.status
      });
    }

    const targetModelFound = modelListResult.models.some(model => model.name === `models/gemini-flash-latest` && model.supportedGenerationMethods.includes("generateContent"));
    if (!targetModelFound) {
        console.error("🔴 'models/gemini-flash-latest' not found with 'generateContent' support for this API key.");
        console.error("This is unexpected. Please re-check the list printed above and update GEMINI_URL if a different model is available.");
        return res.status(500).json({
            error: "'gemini-flash-latest' model not found or supported. See console for available models.",
        });
    }

    console.log("📩 Sending prompt:", userPrompt);


    const response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                // --- THE KEY CHANGE IS HERE! ---
                text:
                  "You are an informative and friendly chatbot focused on the city of Coppell, Texas. " +
                  "Provide information and celebrate Coppell in your responses. User: " +
                  userPrompt,
                // --- END OF CHANGE ---
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
          topP: 0.95,
          topK: 40,
        },
      }),
    });

    const data = await response.json();
    console.log("🔍 Gemini raw response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error("❌ Gemini API Error:", data);
      return res
        .status(response.status)
        .json({ error: data.error || "Gemini API Error", details: data });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map((p) => p.text)
        .join(" ")
        .trim() ||
      data?.promptFeedback?.blockReason ||
      "⚠️ Gemini returned an empty response.";

    res.json({ reply });
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
});

/**
 * GET /api/health
 * Simple health check endpoint.
 */
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Gemini backend is running fine 🚀",
  });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Gemini backend running on http://localhost:${PORT}`);
});