import React, { useState, useEffect, useRef } from "react";
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

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Send user prompt to Express backend → Gemini API
  const send = async () => {
    if (!userInput.trim()) return;

    const newMessage = { role: "user", content: userInput };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt: userInput }),
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
          "Sorry, I couldn’t generate a response from Gemini.",
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ There was a problem connecting to the Gemini server. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="chat-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Chatbot"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Archive Bot</h3>
            <button
              className="close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.role === "user" ? "user" : "bot"}`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="loading">Thinking…</div>}
            <div ref={chatEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              placeholder="Ask about the archive..."
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button onClick={send}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

// ✅ Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Persist theme between sessions
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Page switcher
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
        return <HomePage />;
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
      <Chatbot /> {/* ✅ Gemini Chatbot */}
    </div>
  );
}
