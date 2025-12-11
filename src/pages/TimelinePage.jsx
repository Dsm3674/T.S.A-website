import React, { useState, useEffect } from "react";

// Import your actual images
import earlyImg from "../assets/Document.jpg";
import era1950 from "../assets/image.png";
import era1990 from "../assets/2010.png";
import era2025 from "../assets/Document (1).jpeg";

import "../styles/brutalist.css";

const timelineStyles = `
  /* Header polish */
  .page-head {
    margin-bottom: 2.2rem;
    text-align: center;
  }

  .page-head .lead {
    max-width: 620px;
    margin: 0.8rem auto 0;
    line-height: 1.55;
  }

  /* Grid improvements */
  .timeline-grid {
    padding-top: 1rem;
    width: 100%;
  }

  .timeline-card {
    border: 3px solid var(--ink);
    background: var(--panel);
    box-shadow: 8px 8px 0 var(--shadow);
    border-radius: 2px;
  }

  .timeline-card:hover h3 {
    color: #ff2a6d;
  }

  /* Timeline Flow header polish */
  .slab h3.display {
    text-align: center;
    border-bottom: 3px solid var(--ink);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }

  /* Improve timeline flow dots */
  .timeline-dot,
  .timeline-flow-dot {
    width: 24px;
    height: 24px;
    background: #ff2a6d;
    border: 4px solid var(--ink);
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: 0 0 0 8px var(--bg);
  }

  /* Modal readability boosts */
  .modal-body {
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .modal-content h3 {
    margin-top: 0.25rem;
  }

  /* Slight image refinement */
  .timeline-card img,
  .modal-img {
    border-radius: 0;
  }
`;

if (typeof document !== "undefined") {
  const styleInject = document.createElement("style");
  styleInject.textContent = timelineStyles;
  document.head.appendChild(styleInject);
}

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState(null);

  // Reveal effect on scroll
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .fade-in-up, .fade-in');
    
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

      {/* PAGE HEADER */}
      <header className="page-head fade-in reveal">
        <h2 className="xxl skew reveal">TIMELINE</h2>
        <p className="lead reveal">Explore Coppell's cultural eras.</p>
      </header>

      {/* TIMELINE GRID WITH ENHANCED ANIMATIONS */}
      <div className="timeline-grid reveal fade-in-up" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1.2rem',
        maxWidth: '900px',
        margin: '0 auto 3rem'
      }}>
        {eras.map((era, idx) => (
          <div
            key={era.id}
            className="timeline-card slab"
            onClick={() => setSelectedEra(era)}
            style={{
              padding: '1rem',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
              animation: `cardFloat ${5 + idx * 0.5}s ease-in-out infinite`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) rotate(2deg) scale(1.05)';
              e.currentTarget.style.boxShadow = '16px 16px 0 #ff2a6d';
              e.currentTarget.style.borderColor = '#ff2a6d';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) rotate(0deg) scale(1)';
              e.currentTarget.style.boxShadow = '8px 8px 0 var(--shadow)';
              e.currentTarget.style.borderColor = 'var(--ink)';
            }}
          >
            {/* Animated Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 42, 109, 0.03) 10px, rgba(255, 42, 109, 0.03) 20px)',
              opacity: 0,
              transition: 'opacity 0.4s ease',
              pointerEvents: 'none',
              zIndex: 1
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
            />

            {/* Mini Image Preview */}
            <div style={{
              width: '100%',
              height: '80px',
              overflow: 'hidden',
              marginBottom: '0.75rem',
              border: '2px solid var(--ink-dim)',
              position: 'relative',
              zIndex: 2
            }}>
              <img 
                src={era.img} 
                alt={era.era}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease, filter 0.4s ease',
                  filter: 'grayscale(0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.filter = 'grayscale(0)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'grayscale(0.3)';
                }}
              />
            </div>

            {/* Card Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ 
                fontSize: '1rem', 
                marginBottom: '0.4rem',
                transition: 'color 0.3s ease'
              }}>{era.era}</h3>
              <p className="years" style={{ 
                fontSize: '0.75rem', 
                marginBottom: '0.4rem',
                opacity: 0.8
              }}>{era.years}</p>
              <p className="short" style={{ 
                fontSize: '0.8rem', 
                lineHeight: '1.4',
                opacity: 0.9
              }}>{era.shortDesc}</p>
            </div>

            {/* Click Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '0.5rem',
              right: '0.5rem',
              fontSize: '0.7rem',
              color: '#ff2a6d',
              fontWeight: '700',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              zIndex: 3,
              pointerEvents: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
            >
              EXPLORE →
            </div>
          </div>
        ))}
      </div>

      {/* HORIZONTAL TIMELINE VISUALIZATION */}
      <div className="slab reveal fade-in-up" style={{ marginTop: '4rem', padding: '3rem' }}>
        <h3 className="display" style={{ marginBottom: '2rem' }}>
          Timeline Flow
        </h3>
        
        <div style={{ 
          position: 'relative', 
          padding: '3rem 0',
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

          {/* Timeline Points */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            position: 'relative',
            zIndex: 2
          }}>
            {eras.map((era, index) => (
              <div
                key={`timeline-point-${era.id}`}
                style={{
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedEra(era)}
              >
                {/* Dot */}
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: '#ff2a6d',
                  border: '4px solid var(--ink)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  position: 'relative',
                  boxShadow: '0 0 0 8px var(--bg)',
                  transition: 'all 0.3s ease'
                }} />

                {/* Year Label */}
                <div style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: '0.75rem',
                  color: 'var(--ink-dim)',
                  letterSpacing: '0.05em',
                  fontWeight: '700'
                }}>
                  {era.years}
                </div>

                {/* Era Name */}
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  marginTop: '0.5rem',
                  color: 'var(--ink)'
                }}>
                  {era.era}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="lead" style={{ marginTop: '2rem', textAlign: 'center' }}>
          Click any era above or in the grid to explore its full story.
        </p>
      </div>

      {/* EXPANDED MODAL WITH ENHANCED ANIMATIONS */}
      {selectedEra && (
        <div 
          className="timeline-modal" 
          onClick={() => setSelectedEra(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backdropFilter: 'blur(12px)',
            animation: 'modalFadeIn 0.4s ease'
          }}
        >
          <div 
            className="modal-content slab" 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '700px',
              maxHeight: '85vh',
              overflow: 'auto',
              position: 'relative',
              animation: 'modalSlideUp 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              boxShadow: '20px 20px 0 rgba(255, 42, 109, 0.3)'
            }}
          >
            {/* Close Button with Animation */}
            <button 
              className="close-overlay" 
              onClick={() => setSelectedEra(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '36px',
                height: '36px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                border: '2px solid var(--ink)',
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff2a6d';
                e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--ink)';
                e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
              }}
            >
              ✕
            </button>

            {/* Modal Header with Animation */}
            <div style={{
              animation: 'slideRight 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                marginBottom: '0.5rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                {selectedEra.era}
                <div style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: '#ff2a6d',
                  animation: 'expandWidth 0.8s ease'
                }} />
              </h3>
              <p className="years" style={{
                fontSize: '0.95rem',
                marginBottom: '1.5rem',
                animation: 'fadeInUp 0.7s ease'
              }}>{selectedEra.years}</p>
            </div>

            {/* Modal Image with Hover Effect */}
            <div style={{
              width: '100%',
              height: '280px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              border: '3px solid var(--ink)',
              position: 'relative',
              animation: 'zoomIn 0.8s ease'
            }}>
              <img
                src={selectedEra.img}
                alt={selectedEra.era}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                  filter: 'grayscale(0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.filter = 'grayscale(0)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'grayscale(0.2)';
                }}
              />
              
              {/* Image Overlay Effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.7))',
                pointerEvents: 'none'
              }} />
            </div>

            {/* Modal Body */}
            <div className="modal-body" style={{
              animation: 'fadeInUp 0.9s ease'
            }}>
              <p className="lead" style={{
                marginBottom: '1.5rem',
                lineHeight: '1.7'
              }}>{selectedEra.fullDetails}</p>

              {/* Historical Context Section with Animation */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                background: 'rgba(255, 42, 109, 0.05)',
                border: '2px dashed var(--ink-dim)',
                position: 'relative',
                overflow: 'hidden',
                animation: 'slideLeft 1s ease'
              }}>
                {/* Animated Corner Accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  background: '#ff2a6d',
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  opacity: 0.1,
                  animation: 'pulse 2s ease-in-out infinite'
                }} />

                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  marginBottom: '0.65rem',
                  color: '#ff2a6d',
                  position: 'relative',
                  zIndex: 2
                }}>
                  Historical Context
                </h4>
                <p style={{ 
                  fontSize: '0.9rem', 
                  lineHeight: '1.6',
                  color: 'var(--ink)',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {selectedEra.id === 1 && "This era laid the foundation for Coppell's agricultural heritage and community spirit that continues today."}
                  {selectedEra.id === 2 && "The transformation from rural to suburban brought new opportunities and challenges, shaping modern Coppell."}
                  {selectedEra.id === 3 && "Community institutions emerged as pillars of support, creating lasting bonds between residents."}
                  {selectedEra.id === 4 && "Today's Coppell reflects decades of growth while maintaining its commitment to community connection."}
                </p>
              </div>

              {/* Key Events Section with Staggered Animation */}
              <div style={{ 
                marginTop: '1.5rem',
                animation: 'fadeInUp 1.1s ease'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  marginBottom: '0.85rem',
                  position: 'relative',
                  paddingLeft: '1rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '100%',
                    background: '#ff2a6d',
                    animation: 'expandHeight 0.6s ease'
                  }} />
                  Key Developments
                </h4>
                <ul style={{
                  paddingLeft: '1.5rem',
                  lineHeight: '1.8'
                }}>
                  {selectedEra.id === 1 && (
                    <>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.1s both' }}>Establishment of Gibbs Station trading post</li>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.2s both' }}>Formation of first community churches</li>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.3s both' }}>Development of agricultural infrastructure</li>
                    </>
                  )}
                  {selectedEra.id === 2 && (
                    <>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.1s both' }}>Opening of DFW International Airport (1974)</li>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.2s both' }}>Rapid suburban development and population growth</li>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.3s both' }}>Establishment of school music programs</li>
                    </>
                  )}
                  {selectedEra.id === 3 && (
                    <>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.1s both' }}>Launch of Coppell Farmers Market</li>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.2s both' }}>Growth of youth arts and sports programs</li>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.3s both' }}>Strengthening of community traditions</li>
                    </>
                  )}
                  {selectedEra.id === 4 && (
                    <>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.1s both' }}>Expansion of NoteLove music education</li>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.2s both' }}>Growth of Metrocrest Services support network</li>
                      <li style={{ animation: 'fadeInLeft 0.5s ease 0.3s both' }}>Rise of grassroots mutual aid initiatives</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Citation with Animation */}
              {selectedEra.citation && (
                <p className="citation" style={{
                  marginTop: '1.5rem',
                  animation: 'fadeIn 1.3s ease'
                }}>
                  <em>
                    Photo Source:{" "}
                    <a
                      href={selectedEra.citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        transition: 'all 0.3s ease',
                        textDecoration: 'underline'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ff2a6d';
                        e.currentTarget.style.textShadow = '2px 2px 0 rgba(255, 42, 109, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '';
                        e.currentTarget.style.textShadow = 'none';
                      }}
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
    </div>
  );
}

/* ========================================
   ENHANCED CSS ANIMATIONS
   ======================================== */
const styles = `
  @keyframes cardFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }

  @keyframes modalFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes modalSlideUp {
    from { 
      opacity: 0;
      transform: translateY(40px) scale(0.95);
    }
    to { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes expandWidth {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes expandHeight {
    from { height: 0; }
    to { height: 100%; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.2; }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .timeline-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
      gap: 1rem !important;
    }
  }
`;

// Inject styles into document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
