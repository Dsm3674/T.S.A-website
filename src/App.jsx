import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


const { GoogleGenerativeAI } = await import(
  "https://esm.run/@google/generative-ai"
);

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import TimelinePage from "./pages/TimelinePage";
import MapPage from "./pages/MapPage";
import ArchivePage from "./pages/ArchivePage";
import ReferencePage from "./pages/ReferencePage";
import MissionPage from "./pages/MissionPage";

import "./styles/brutalist.css";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // ✅ USE CDN GEMINI CLIENT
  const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hey, I'm Archive Bot. Ask me about Coppell or the community archive!"
      }
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  const send = async () => {
    const text = userInput.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setUserInput("");
    setLoading(true);

    try {
      const result = await model.generateContent(text);
      const reply = result.response.text();

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ Gemini couldn't respond. Check your API key restrictions."
        }
      ]);
    }

    setLoading(false);
  };

  const enterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen((o) => !o)}>
        💬
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="chatbot-header">
              <span>Archive Bot</span>
              <button className="close-btn" onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((m, i) => (
                <div key={i} className={`message ${m.role}`}>
                  {m.content}
                </div>
              ))}

              {loading && (
                <div className="loading">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            <div className="chatbot-input">
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={enterKey}
                placeholder="Ask about Coppell..."
              />
              <button onClick={send} disabled={loading}>
                {loading ? "..." : "Send"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const reveals = document.querySelectorAll(
      ".reveal, .fade-in, .fade-in-up"
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "stories":
        return <StoriesPage />;
      case "timeline":
        return <TimelinePage />;
      case "map":
        return <MapPage />;
      case "archive":
        return <ArchivePage />;
      case "reference":
        return <ReferencePage />;
      case "mission":
        return <MissionPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="page-content">{renderPage()}</main>
      <Chatbot />
    </div>
  );
}


