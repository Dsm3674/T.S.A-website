import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import TimelinePage from "./pages/TimelinePage";
import MapPage from "./pages/MapPage";
import StoriesPage from "./pages/StoriesPage";
import ArchivePage from "./pages/ArchivePage";


function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m the Archive Bot. Ask me about the timeline, the map, or stories.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [...messages, userMsg],
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "(no reply)";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "⚠️ There was an error reaching ChatGPT. Try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="chat-launch"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Chat"
        title="Chat"
      >
        💬
      </button>

      {open && (
        <div className="chat-panel slab">
          <div className="chat-head">
            <strong>ARCHIVE BOT</strong>
            <button className="chat-close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>
                <div className="chat-bubble">{m.content}</div>
              </div>
            ))}
            {loading && (
              <div className="chat-msg assistant">
                <div className="chat-bubble">Thinking…</div>
              </div>
            )}
          </div>
          <div className="chat-input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about eras, locations, stories…"
            />
            <button className="btn slab" onClick={send} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}


function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "timeline":
        return <TimelinePage />;
      case "map":
        return <MapPage />;
      case "stories":
        return <StoriesPage />;
      case "archive":
        return <ArchivePage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-frame">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="page-wrap">{renderPage()}</main>
      <Chatbot />
    </div>
  );
}

export default App; 
