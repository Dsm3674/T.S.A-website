import React, { useState } from "react";
import { Menu, X, LogOut, Sun, Moon } from "lucide-react";

export default function Navigation({
  currentPage,
  setCurrentPage,
  isLoggedIn,
  setIsLoggedIn,
  theme,
  setTheme,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: "HOME", page: "home" },
    { label: "STORIES", page: "stories" },
    { label: "TIMELINE", page: "timeline" },
    { label: "MAP", page: "map" },
    { label: "ARCHIVE", page: "archive" },
  ];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button
          onClick={() => setCurrentPage("home")}
          className="brand bleeding-ink"
        >
          COPPELL<br />ARCHIVE
        </button>

        <div className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                setCurrentPage(item.page);
                setMobileOpen(false);
              }}
              className={`nav-link ${
                currentPage === item.page ? "is-active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-cta">
          <button
            className="toggle-theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {isLoggedIn && (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="btn jagged"
              title="Logout"
            >
              <LogOut size={14} className="mr-1" />
              LOGOUT
            </button>
          )}

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="hamburger"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="nav-mobile">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                setCurrentPage(item.page);
                setMobileOpen(false);
              }}
              className="nav-mobile-link"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
