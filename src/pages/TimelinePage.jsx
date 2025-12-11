import React, { useState, useEffect } from "react";

// UPDATED IMAGES — using your actual assets folder names
import earlyImg from "../assets/Document.jpg";
import era1950 from "../assets/image.png";
import era1990 from "../assets/2010.png";
import era2025 from "../assets/Document (1).jpeg";

import "../styles/brutalist.css";

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState(null);

  // ✅ REVEAL EFFECT ON SCROLL
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .fade-in-up');
    
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const eras = [
    {
      id: 1,
      era: "Early Roots",
      years: "1840–1950",
      shortDesc: "Small farming settlement.",
      fullDetails:
        "Coppell began in 1840 as a farming settlement originally called Gibbs Station. Life centered around agriculture, small churches, and one-room schoolhouses.",
      img: earlyImg,
      citation: "https://www.coppelltx.gov/610/History-of-Coppell"
    },
    {
      id: 2,
      era: "Growth & Identity",
      years: "1950–1990",
      shortDesc: "Schools, music, and rapid expansion.",
      fullDetails:
        "After the opening of DFW Airport, Coppell shifted from rural farmland to a growing suburb. Music, marching band culture, and youth arts shaped the city's identity.",
      img: era1950,
      citation:
        "https://coppellstudentmedia.com/121647/entertainment/rock-musics-evolution-its-influence-on-the-world-and-coppell/"
    },
    {
      id: 3,
      era: "Community Era",
      years: "1990–2010",
      shortDesc: "Farmers markets, youth programs, and culture.",
      fullDetails:
        "Community institutions began defining Coppell's character. The Farmers Market, youth programs, and school traditions strengthened community ties.",
      img: era1990,
      citation:
        "https://coppellstudentmedia.com/20840/entertainment/the-end-of-the-harry-potter-era/"
    },
    {
      id: 4,
      era: "Present Day",
      years: "2010–2025",
      shortDesc: "Modern arts and mutual aid.",
      fullDetails:
        "Coppell now embraces a diverse civic culture shaped by arts programs, mutual aid organizations, and young community-driven initiatives.",
      img: era2025,
      citation:
        "https://www.coppelltx.gov/1225/2025-Yard-of-the-Month-Winners"
    }
  ];

  return (
    <div className="page-container">

      <header className="page-head reveal fade-in">
        <h2 className="xxl skew reveal">TIMELINE</h2>
        <p className="lead reveal">Explore Coppell's cultural eras.</p>
      </header>

      {/* HORIZONTAL TIMELINE */}
      <div style={{
        position: 'relative',
        padding: '4rem 0',
        overflow: 'visible'
      }}>
        {/* Timeline Line */}
        <div className="reveal fade-in" style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          right: '5%',
          height: '4px',
          background: 'var(--ink)',
          transform: 'translateY(-50%)',
          zIndex: 1
        }} />

        {/* Timeline Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          position: 'relative',
          zIndex: 2
        }}>
          {eras.map((era, index) => (
            <div
              key={era.id}
              className={`reveal fade-in-up delay-${index + 1}`}
              onClick={() => setSelectedEra(era)}
              style={{
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-20px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                width: '24px',
                height: '24px',
                background: '#ff2a6d',
                border: '4px solid var(--ink)',
                borderRadius: '50%',
                margin: '0 auto 2rem',
                position: 'relative',
                zIndex: 3,
                boxShadow: '0 0 0 8px var(--bg)'
              }} />

              {/* Card */}
              <div style={{
                background: 'var(--panel)',
                border: '3px solid var(--ink)',
                padding: '1.5rem',
                boxShadow: '8px 8px 0 rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                {/* Image */}
                <div style={{
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                  border: '2px solid var(--ink-dim)',
                  background: 'var(--bg)'
                }}>
                  <img 
                    src={era.img} 
                    alt={era.era}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                {/* Content */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em'
                }}>
                  {era.era}
                </h3>
                
                <p style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: '0.8rem',
                  color: 'var(--ink-dim)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.05em'
                }}>
                  {era.years}
                </p>
                
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.4',
                  opacity: 0.85
                }}>
                  {era.shortDesc}
                </p>

                {/* Click indicator */}
                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.75rem',
                  color: '#ff2a6d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: '700'
                }}>
                  Click to expand →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedEra && (
        <div 
          className="timeline-modal"
          onClick={() => setSelectedEra(null)}
        >
          <div 
            className="modal-content slab"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-overlay" 
              onClick={() => setSelectedEra(null)}
            >
              ✕
            </button>

            <h3>{selectedEra.era}</h3>
            <p className="years">{selectedEra.years}</p>

            <img
              src={selectedEra.img}
              alt={selectedEra.era}
              className="modal-img"
            />

            <div className="modal-body">
              <p className="lead">{selectedEra.fullDetails}</p>

              {selectedEra.citation && (
                <p className="citation">
                  <em>
                    Photo Source:{" "}
                    <a
                      href={selectedEra.citation}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedEra.citation}
                    </a>
                  </em>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          div[style*="gridTemplateColumns: repeat(4, 1fr)"],
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
