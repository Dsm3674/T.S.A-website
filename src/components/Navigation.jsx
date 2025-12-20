import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navigation({
  currentPage,
  setCurrentPage,
  theme,
  setTheme,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const navItems = [
    { label: "HOME", page: "home" },
    { label: "STORIES", page: "stories" },
    { label: "TIMELINE", page: "timeline" },
    { label: "MAP", page: "map" },
    { label: "ARCHIVE", page: "archive" },
    { label: "REFERENCE", page: "reference" },
    { label: "MISSION", page: "mission" },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileOpen(false);
  };

  return (
    <nav className="nav" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg)',
      borderBottom: isMobile ? '2px solid var(--ink)' : '3px solid var(--ink)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <div className="nav-inner" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0.75rem 1rem' : '1rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        gap: isMobile ? '0.5rem' : '1rem'
      }}>
        {/* Brand/Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="brand bleeding-ink"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '900',
            fontSize: isMobile ? '1rem' : '1.3rem',
            lineHeight: isMobile ? '1.2' : '1.3',
            letterSpacing: '-0.02em',
            textAlign: 'left',
            padding: 0,
            color: 'var(--ink)',
            textTransform: 'uppercase',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          COPPELL
          <br />
          ARCHIVE
        </button>

        {/* Desktop Navigation Menu */}
        {!isMobile && (
          <div className="nav-menu" style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center'
          }}>
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`nav-link ${
                  currentPage === item.page ? "is-active" : ""
                }`}
                style={{
                  background: currentPage === item.page ? 'var(--ink)' : 'transparent',
                  color: currentPage === item.page ? 'var(--bg)' : 'var(--ink)',
                  border: '2px solid var(--ink)',
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== item.page) {
                    e.currentTarget.style.background = 'var(--ink)';
                    e.currentTarget.style.color = 'var(--bg)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== item.page) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--ink)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Right side controls */}
        <div className="nav-cta" style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.5rem' : '0.75rem'
        }}>
          {/* Theme Toggle */}
          <button
            className="toggle-theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            style={{
              background: 'var(--ink)',
              color: 'var(--bg)',
              border: '2px solid var(--ink)',
              width: isMobile ? '40px' : '44px',
              height: isMobile ? '40px' : '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(180deg) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
            }}
          >
            {theme === "dark" ? <Sun size={isMobile ? 18 : 20} /> : <Moon size={isMobile ? 18 : 20} />}
          </button>

          {/* Mobile Hamburger Menu */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="hamburger"
              aria-label="Menu"
              style={{
                background: mobileOpen ? 'var(--mag)' : 'var(--ink)',
                color: 'var(--bg)',
                border: '2px solid var(--ink)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 101
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileOpen && (
        <>
          {/* Backdrop */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 98,
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={() => setMobileOpen(false)}
          />
          
          {/* Mobile Navigation */}
          <div className="nav-mobile" style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '75%',
            maxWidth: '300px',
            background: 'var(--bg)',
            borderLeft: '3px solid var(--ink)',
            zIndex: 99,
            padding: '5rem 1.5rem 2rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            animation: 'slideInRight 0.3s ease',
            boxShadow: '-4px 0 16px rgba(0,0,0,0.2)'
          }}>
            {/* Mobile Menu Items */}
            {navItems.map((item, index) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`nav-mobile-link ${
                  currentPage === item.page ? "is-active" : ""
                }`}
                style={{
                  background: currentPage === item.page ? 'var(--ink)' : 'transparent',
                  color: currentPage === item.page ? 'var(--bg)' : 'var(--ink)',
                  border: '2px solid var(--ink)',
                  padding: '1rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  width: '100%',
                  animation: `slideInRight 0.3s ease ${index * 0.05}s both`,
                  position: 'relative'
                }}
                onTouchStart={(e) => {
                  if (currentPage !== item.page) {
                    e.currentTarget.style.background = 'var(--ink)';
                    e.currentTarget.style.color = 'var(--bg)';
                  }
                }}
                onTouchEnd={(e) => {
                  if (currentPage !== item.page) {
                    setTimeout(() => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--ink)';
                    }, 150);
                  }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {item.label}
                  {currentPage === item.page && (
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: 'var(--bg)',
                      borderRadius: '50%'
                    }} />
                  )}
                </div>
              </button>
            ))}

            {/* Mobile Menu Footer */}
            <div style={{
              marginTop: 'auto',
              paddingTop: '2rem',
              borderTop: '2px dashed var(--ink)',
              opacity: 0.6,
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
              textAlign: 'center'
            }}>
              COPPELL ARCHIVE v1.0
            </div>
          </div>
        </>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
}
