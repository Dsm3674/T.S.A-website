import React, { useState, useEffect } from "react";

// Import your actual images
import earlyImg from "../assets/Document.jpg";
import era1950 from "../assets/image.png";
import era1990 from "../assets/2010.png";
import era2025 from "../assets/Document (1).jpeg";

import "../styles/brutalist.css";

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

      {/* TIMELINE GRID */}
      <div className="timeline-grid reveal fade-in-up" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1000px',
        margin: '0 auto 3rem'
      }}>
        {eras.map((era) => (
          <div
            key={era.id}
            className="timeline-card slab"
            onClick={() => setSelectedEra(era)}
            style={{
              padding: '1.25rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{era.era}</h3>
            <p className="years" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>{era.years}</p>
            <p className="short" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{era.shortDesc}</p>
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

      {/* EXPANDED MODAL */}
      {selectedEra && (
        <div className="timeline-modal" onClick={() => setSelectedEra(null)}>
          <div 
            className="modal-content slab" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="close-overlay" 
              onClick={() => setSelectedEra(null)}
            >
              ✕
            </button>

            {/* Modal Header */}
            <h3>{selectedEra.era}</h3>
            <p className="years">{selectedEra.years}</p>

            {/* Modal Image */}
            <img
              src={selectedEra.img}
              alt={selectedEra.era}
              className="modal-img"
            />

            {/* Modal Body */}
            <div className="modal-body">
              <p className="lead">{selectedEra.fullDetails}</p>

              {/* Historical Context Section */}
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(255, 42, 109, 0.05)',
                border: '2px dashed var(--ink-dim)'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                  color: '#ff2a6d'
                }}>
                  Historical Context
                </h4>
                <p style={{ 
                  fontSize: '0.95rem', 
                  lineHeight: '1.6',
                  color: 'var(--ink)'
                }}>
                  {selectedEra.id === 1 && "This era laid the foundation for Coppell's agricultural heritage and community spirit that continues today."}
                  {selectedEra.id === 2 && "The transformation from rural to suburban brought new opportunities and challenges, shaping modern Coppell."}
                  {selectedEra.id === 3 && "Community institutions emerged as pillars of support, creating lasting bonds between residents."}
                  {selectedEra.id === 4 && "Today's Coppell reflects decades of growth while maintaining its commitment to community connection."}
                </p>
              </div>

              {/* Key Events Section */}
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  marginBottom: '1rem'
                }}>
                  Key Developments
                </h4>
                <ul style={{
                  paddingLeft: '1.5rem',
                  lineHeight: '1.8'
                }}>
                  {selectedEra.id === 1 && (
                    <>
                      <li>Establishment of Gibbs Station trading post</li>
                      <li>Formation of first community churches</li>
                      <li>Development of agricultural infrastructure</li>
                    </>
                  )}
                  {selectedEra.id === 2 && (
                    <>
                      <li>Opening of DFW International Airport (1974)</li>
                      <li>Rapid suburban development and population growth</li>
                      <li>Establishment of school music programs</li>
                    </>
                  )}
                  {selectedEra.id === 3 && (
                    <>
                      <li>Launch of Coppell Farmers Market</li>
                      <li>Growth of youth arts and sports programs</li>
                      <li>Strengthening of community traditions</li>
                    </>
                  )}
                  {selectedEra.id === 4 && (
                    <>
                      <li>Expansion of NoteLove music education</li>
                      <li>Growth of Metrocrest Services support network</li>
                      <li>Rise of grassroots mutual aid initiatives</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Citation */}
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
    </div>
  );
}
