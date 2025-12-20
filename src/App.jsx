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
    setMessages([{
      role: "assistant",
      content: "Hey, I'm Archive Bot. Ask me about Coppell or how this archive works."
    }]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const trimmed = userInput.trim();
    if (!trimmed || loading) return;

    setMessages(prev => [...prev, { role: "user", content: trimmed }]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt: trimmed })
      });

      if (!res.ok) throw new Error("Offline");
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Note: The AI server is currently offline. In production, this would connect to the Gemini API via our node backend!"
      }]);
    }
    setLoading(false);
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(o => !o)}>💬</button>
      <AnimatePresence>
        {open && (
          <motion.div className="chatbot-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
            <div className="chatbot-header" style={{background:'var(--ink)', color:'var(--bg)', padding:'1rem', display:'flex', justifyContent:'space-between'}}>
              <span>Archive Bot</span>
              <button onClick={() => setOpen(false)} style={{background:'none', border:'none', cursor:'pointer'}}>✕</button>
            </div>
            <div className="chatbot-messages">
              {messages.map((m, i) => (
                <div key={i} className={`message ${m.role === "user" ? "user" : "bot"}`}>{m.content}</div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="chatbot-input" style={{display:'flex', borderTop:'3px solid var(--ink)'}}>
              <input value={userInput} onChange={e => setUserInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask me..." style={{flex:1, padding:'1rem', border:'none'}} />
              <button onClick={send} style={{padding:'0 1rem', background:'var(--ink)', color:'var(--bg)', border:'none'}}>Send</button>
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

  // ANIMATION REVEAL LOGIC
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

    const timeoutId = setTimeout(() => {
      document.querySelectorAll(".reveal, .fade-in, .fade-in-up").forEach(el => {
        observer.observe(el);
      });
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "stories": return <StoriesPage />;
      case "timeline": return <TimelinePage />;
      case "map": return <MapPage />;
      case "archive": return <ArchivePage />;
      case "reference": return <ReferencePage />;
      case "mission": return <MissionPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} theme={theme} setTheme={setTheme} />
      <main className="page-content">{renderPage()}</main>
      <Chatbot />
    </div>
  );
}
