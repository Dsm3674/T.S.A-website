import React, { useState } from "react";

// UPDATED IMAGES — using your actual assets folder names
const earlyImg = "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400";
const era1950 = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400";
const era1990 = "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400";
const era2025 = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400";

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState(null);

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
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--ink)',
      padding: '2rem 1.5rem 8rem',
      maxWidth: '1600px',
      margin: '0 auto'
    }}>
      
      <header style={{
        marginBottom: '4rem',
        borderBottom: '3px solid var(--ink)',
        paddingBottom: '1.5rem'
      }}>
        <h2 style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          lineHeight: '0.85',
          textTransform: 'uppercase',
          fontWeight: '800',
          transform: 'skewX(-6deg)',
          marginBottom: '1rem'
        }}>
          TIMELINE
        </h2>
        <p style={{
          fontFamily: '"Courier New", monospace',
          color: '#ff2a6d',
          fontSize: '0.875rem',
          letterSpacing: '0.1em',
          fontWeight: '700'
        }}>
          Explore Coppell's cultural eras
        </p>
      </header>

      {/* HORIZONTAL TIMELINE */}
      <div style={{
        position: 'relative',
        padding: '4rem 0',
        overflow: 'visible'
      }}>
        {/* Timeline Line */}
        <div style={{
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
          onClick={() => setSelectedEra(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backdropFilter: 'blur(8px)',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--panel)',
              border: '3px solid var(--ink)',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '3rem',
              position: 'relative',
              boxShadow: '16px 16px 0 rgba(255, 255, 255, 0.2)',
              animation: 'slideUp 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEra(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'var(--ink)',
                color: 'var(--bg)',
                border: 'none',
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff2a6d';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--ink)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              ✕
            </button>

            {/* Content */}
            <h3 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              lineHeight: '0.95'
            }}>
              {selectedEra.era}
            </h3>
            
            <p style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '1rem',
              color: 'var(--ink-dim)',
              marginBottom: '2rem',
              letterSpacing: '0.08em'
            }}>
              {selectedEra.years}
            </p>

            <img
              src={selectedEra.img}
              alt={selectedEra.era}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '400px',
                objectFit: 'cover',
                border: '3px solid var(--ink)',
                marginBottom: '2rem'
              }}
            />

            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              {selectedEra.fullDetails}
            </p>

            {selectedEra.citation && (
              <p style={{
                fontSize: '0.85rem',
                fontStyle: 'italic',
                color: 'var(--ink-dim)',
                borderTop: '2px dashed var(--ink-dim)',
                paddingTop: '1rem'
              }}>
                Photo Source:{" "}
                <a
                  href={selectedEra.citation}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#ff2a6d',
                    textDecoration: 'underline'
                  }}
                >
                  {selectedEra.citation}
                </a>
              </p>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
