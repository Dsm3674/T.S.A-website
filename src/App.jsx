import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hey, I'm Archive Bot. Ask me about Coppell, community history, or how this archive works."
      }
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  const send = async () => {
    const trimmed = userInput.trim();
    if (!trimmed || loading) return;

    setMessages(prev => [...prev, { role: "user", content: trimmed }]);
    setUserInput("");
    setLoading(true);

    try {
      // 🔥 SAFE — Calls your backend instead of exposing your API key
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt: trimmed })
      });

      const data = await res.json();

      const reply =
        data?.reply || "⚠️ Server returned no response.";

      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Server error. Check your backend connection."
        }
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(o => !o)}>
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
                <div
                  key={i}
                  className={`message ${m.role === "user" ? "user" : "bot"}`}
                >
                  {m.content}
                </div>
              ))}

              {loading && (
                <div className="loading">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            <div className="chatbot-input">
              <input
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Archive Bot…"
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
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const revealEls = document.querySelectorAll(
      ".reveal, .fade-in, .fade-in-up"
    );

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealEls.forEach(el => obs.observe(el));
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

