
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import TimelinePage from "./pages/TimelinePage";
import MapPage from "./pages/MapPage";
import ArchivePage from "./pages/ArchivePage";
import "./styles/brutalist.css";


function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Initial bot greeting
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hey, I’m Archive Bot. Ask me about Coppell, community history, or how this archive works.",
      },
    ]);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  const send = async () => {
    const trimmed = userInput.trim();
    if (!trimmed || loading) return;

    const newMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt: trimmed }),
      });

      if (!response.ok) {
        console.error("API Error:", response.status);
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const botReply = {
        role: "assistant",
        content:
          data.reply ||
          "Sorry, I couldn’t generate a response from Gemini right now.",
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ There was a problem connecting to the archive’s AI. Try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="chat-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle Chatbot"
      >
        💬
      </button>

      {/* Animated Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="chatbot-header">
              <span>Archive Bot</span>
              <button
                className="close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close Chat"
              >
                ✕
              </button>
            </div>

            <div className="chatbot-messages">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`message ${
                      msg.role === "user" ? "user" : "bot"
                    }`}
                    initial={{
                      opacity: 0,
                      y: msg.role === "user" ? 8 : 0,
                      x: msg.role === "user" ? 8 : -8,
                    }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                  >
                    {msg.content}
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading && (
                <div className="loading">
                  <span className="dot" />{" "}
                  <span className="dot" />{" "}
                  <span className="dot" />
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                value={userInput}
                placeholder="Ask about Coppell, stories, or the archive..."
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={send}
                disabled={loading || !userInput.trim()}
              >
                {loading ? "..." : "Send"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// =======================
// Main App Component
// =======================
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Persist theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

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

