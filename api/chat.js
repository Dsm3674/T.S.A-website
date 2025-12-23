
export default async function handler(req, res) {

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userPrompt } = req.body;

    if (!userPrompt) {
      return res.status(400).json({ error: 'userPrompt is required' });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    
    if (!GEMINI_API_KEY) {
      console.error('❌ GEMINI_API_KEY not found in environment');
      return res.status(500).json({ 
        error: 'API key not configured',
        hint: 'Add GEMINI_API_KEY in Vercel dashboard'
      });
    }

    const systemPrompt =
      "You are an informative and friendly chatbot focused on Coppell, Texas " +
      "and the Brutalist Community Archive TSA 2025 project. " +
      "Keep answers concise, specific, and grounded in the idea of a community archive.";

    console.log('📩 Calling Gemini API...');

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [{
              text: `${systemPrompt}\n\nUser: ${userPrompt}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
            topP: 0.95,
            topK: 40
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Gemini API error:', data);
      return res.status(response.status).json({
        error: data.error?.message || 'Gemini API Error',
        details: data
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map(p => p.text)
        .join(' ')
        .trim() || 'No response received';

    console.log('✅ Reply sent');

    res.status(200).json({ reply });

  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}




{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "github": {
    "silent": true
  }
}


// ========================================
// FILE 3: Update /src/App.jsx (CHATBOT SECTION ONLY)
// ========================================

// Replace the send function in your Chatbot component:

const send = async () => {
  const trimmed = userInput.trim();
  if (!trimmed || loading) return;

  setMessages(prev => [...prev, { role: "user", content: trimmed }]);
  setUserInput("");
  setLoading(true);

  try {
    // This automatically works on Vercel AND localhost
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userPrompt: trimmed })
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${res.status}`);
    }
    
    const data = await res.json();
    setMessages(prev => [...prev, { 
      role: "assistant", 
      content: data.reply || "No response received"
    }]);
  } catch (err) {
    console.error("Chat error:", err);
    setMessages(prev => [...prev, {
      role: "assistant",
      content: `⚠️ Connection error: ${err.message}. The chatbot backend may be offline.`
    }]);
  }
  setLoading(false);
};




import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],

    base: command === "serve" ? "/" : "/",  // Changed for Vercel

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'motion': ['framer-motion']
          }
        }
      }
    },

    server: {
      port: 5173,
      // Proxy for local development
      proxy: {
        "/api": {
          target: "http://localhost:3000",  // Vercel dev runs on 3000
          changeOrigin: true,
          secure: false
        },
      },
    },
  };
});
