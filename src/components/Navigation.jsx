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

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when mobile menu is open
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
    <>
      <nav className="nav" style={{
        animation: 'slideDown 0.5s ease'
      }}>
        <div className="nav-inner" style={isMobile ? {
          padding: '0.75rem 1rem'
        } : {}}>
          <button
            onClick={() => handleNavClick("home")}
            className="brand bleeding-ink"
            style={{
              transition: 'transform 0.3s ease',
              fontSize: isMobile ? '0.95rem' : undefined,
              lineHeight: isMobile ? '1.2' : undefined
            }}
          >
            COPPELL
            <br />
            ARCHIVE
          </button>
          
          <div className="nav-menu">
            {navItems.map((item, index) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`nav-link ${
                  currentPage === item.page ? "is-active" : ""
                }`}
                style={{
                  animation: `fadeInDown 0.5s ease ${index * 0.05}s both`,
                  transition: 'all 0.2s ease'
                }}
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
              style={{
                transition: 'transform 0.3s ease',
                animation: 'fadeIn 0.6s ease',
                width: isMobile ? '40px' : undefined,
                height: isMobile ? '40px' : undefined,
                minWidth: isMobile ? '40px' : undefined,
                padding: isMobile ? '0' : undefined
              }}
            >
              {theme === "dark" ? <Sun size={isMobile ? 16 : 18} /> : <Moon size={isMobile ? 16 : 18} />}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="hamburger"
              aria-label="Menu"
              style={{
                transition: 'all 0.3s ease',
                animation: 'fadeIn 0.6s ease',
                transform: mobileOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                width: isMobile ? '40px' : undefined,
                height: isMobile ? '40px' : undefined,
                minWidth: isMobile ? '40px' : undefined,
                padding: isMobile ? '0' : undefined
              }}
            >
              {mobileOpen ? <X size={isMobile ? 18 : 20} /> : <Menu size={isMobile ? 18 : 20} />}
            </button>
          </div>
        </div>
        
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.6)',
                zIndex: 98,
                animation: 'fadeIn 0.3s ease'
              }}
              onClick={() => setMobileOpen(false)}
            />
            
            {/* Mobile menu */}
            <div className="nav-mobile" style={{
              animation: 'slideDown 0.3s ease',
              position: 'relative',
              zIndex: 99,
              padding: isMobile ? '1rem' : undefined,
              gap: isMobile ? '0.5rem' : undefined
            }}>
              {navItems.map((item, index) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`nav-mobile-link ${
                    currentPage === item.page ? "is-active" : ""
                  }`}
                  style={{
                    animation: `slideInRight 0.3s ease ${index * 0.05}s both`,
                    transition: 'all 0.2s ease',
                    padding: isMobile ? '0.875rem 1.25rem' : undefined,
                    fontSize: isMobile ? '0.9rem' : undefined,
                    minHeight: isMobile ? '48px' : undefined
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </>
        )}
      </nav>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Smooth hover effects */
        .brand:hover {
          transform: scale(1.05) !important;
        }
        
        .nav-link:hover {
          transform: translateY(-2px);
          box-shadow: 4px 4px 0 var(--mag);
        }
        
        .toggle-theme:hover {
          transform: rotate(180deg) scale(1.1) !important;
        }
        
        .hamburger:hover {
          transform: scale(1.1);
        }
        
        .nav-mobile-link:active {
          transform: translateX(5px);
        }

        /* Mobile-specific improvements */
        @media (max-width: 767px) {
          .nav {
            border-bottom-width: 2px;
          }

          .nav-inner {
            gap: 0.5rem;
          }

          .brand {
            font-size: 0.95rem !important;
          }

          .toggle-theme,
          .hamburger {
            width: 40px;
            height: 40px;
            min-width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nav-mobile {
            max-height: calc(100vh - 80px);
            overflow-y: auto;
          }

          .nav-mobile-link {
            font-size: 0.9rem;
            padding: 0.875rem 1.25rem;
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
