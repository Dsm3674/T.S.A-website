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
          "Hey, I'm Archive Bot. Ask me about Coppell, community history, or how this archive works.",
      },
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  const send = async () => {
    const trimmed = userInput.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setUserInput("");
    setLoading(true);

    try {
      // Check if we're in development or production
      const isDevelopment = window.location.hostname === 'localhost' || 
                           window.location.hostname === '127.0.0.1';
      
      // Only try to use API if backend is running (development)
      if (isDevelopment) {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userPrompt: trimmed }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const botReply = {
          role: "assistant",
          content:
            data.reply || "⚠️ Gemini returned an empty response. Try again.",
        };

        setMessages((prev) => [...prev, botReply]);
      } else {
        // Fallback response for production (when backend isn't available)
        const fallbackResponse = {
          role: "assistant",
          content: getFallbackResponse(trimmed),
        };
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setMessages((prev) => [...prev, fallbackResponse]);
      }
    } catch (err) {
      console.error("Chat error:", err);
      
      // Better fallback with context-aware responses
      const fallbackResponse = {
        role: "assistant",
        content: getFallbackResponse(trimmed),
      };
      
      setMessages((prev) => [...prev, fallbackResponse]);
    } finally {
      setLoading(false);
    }
  };

  // Fallback responses for when API isn't available
  const getFallbackResponse = (prompt) => {
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('coppell') || lowerPrompt.includes('city')) {
      return "Coppell is a vibrant community in Texas known for its excellent schools, local farmers market, and strong community organizations like NoteLove and Metrocrest Services. Explore the different pages to learn more!";
    }
    
    if (lowerPrompt.includes('farmers') || lowerPrompt.includes('market')) {
      return "The Coppell Farmers Market is a weekly gathering where local growers and artisans connect with the community. Check out the Stories page to learn more about how it became a community hub!";
    }
    
    if (lowerPrompt.includes('notelove') || lowerPrompt.includes('music')) {
      return "NoteLove is a youth-led nonprofit offering free music lessons to local students. It's a great example of how young people in Coppell create opportunities for others. Visit the Archive page for more details!";
    }
    
    if (lowerPrompt.includes('metrocrest') || lowerPrompt.includes('services')) {
      return "Metrocrest Services provides food security, housing support, and emergency aid to Coppell-area families. They're a regional anchor for wraparound services. Learn more on the Map page!";
    }
    
    if (lowerPrompt.includes('timeline') || lowerPrompt.includes('history')) {
      return "Coppell's history spans from 1840 to today, evolving from a farming settlement to a modern, community-driven city. Check out the Timeline page to explore different eras!";
    }
    
    if (lowerPrompt.includes('map')) {
      return "The Map page shows the locations of key community organizations across Coppell. Click on different pins to learn about each organization's role in the community!";
    }
    
    // Default response
    return "I'm here to help you learn about Coppell's community, history, and local organizations. Try asking about the Farmers Market, NoteLove, Metrocrest Services, or explore the Timeline and Map pages!";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <button
        className="chat-toggle mx-chat-animated"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle chat"
      >
        💬
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chatbot-header">
              <span>Archive Bot</span>
              <button 
                className="close-btn" 
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((m, i) => (
                <div
                  key={`msg-${i}`}
                  className={`message ${
                    m.role === "user" ? "user" : "bot"
                  }`}
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
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Coppell or the archive..."
                aria-label="Chat input"
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
    const revealEls = document.querySelectorAll(".reveal, .fade-in, .fade-in-up");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealEls.forEach((el) => obs.observe(el));

    return () => {
      obs.disconnect();
    };
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
