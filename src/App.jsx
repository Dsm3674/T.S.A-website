import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import TimelinePage from "./pages/TimelinePage";
import MapPage from "./pages/MapPage";
import ArchivePage from "./pages/ArchivePage";
import ReferencePage from "./pages/ReferencePage"; // ← NEW
import "./styles/brutalist.css";



export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

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
      case "reference":                      // ← NEW PAGE
        return <ReferencePage />;
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

