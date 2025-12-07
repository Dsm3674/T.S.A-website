import React, { useState } from "react";
import Footer from "../components/Footer";

const LOCATIONS = [
  {
    id: "metrocrest",
    name: "Metrocrest Services",
    desc: "A regional hub for food security, housing support, and emergency aid.",
    top: "70%",
    left: "35%",
    link: "https://metrocrestservices.org/"
  },
  {
    id: "notelove",
    name: "NoteLove",
    desc: "Youth-led nonprofit offering free music lessons to students.",
    top: "45%",
    left: "25%",
    link: "https://notelove.org/"
  },
  {
    id: "farmers",
    name: "Farmers Market",
    desc: "Weekly gathering for local food, artisans, and community connection.",
    top: "35%",
    left: "50%",
    link: "https://coppellfarmersmarket.org/"
  },
  {
    id: "temple",
    name: "Sri Temple",
    desc: "Cultural center and place of worship serving the region.",
    top: "55%",
    left: "75%",
    link: "https://www.srigttemple.org/"
  }
];

export default function MapPage() {
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0]);

  return (
    <div className="page map-page">
      <header className="page-head fade-in">
        <h2 className="xxl skew">COMMUNITY MAP</h2>
        <p className="kicker">Interactive Geography</p>
      </header>

      <div className="map-grid fade-in-up">
        {/* MAP CONTAINER */}
        <div className="map-pane">
          {/* Subtle Grid Background */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

          {/* Pins */}
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              className={`map-pin ${activeLoc.id === loc.id ? "active" : ""}`}
              style={{ top: loc.top, left: loc.left }}
              onClick={() => setActiveLoc(loc)}
              aria-label={`Select ${loc.name}`}
            >
              <div className="pin-dot" />
              {/* Only show label on active pin to reduce clutter on mobile */}
              {activeLoc.id === loc.id && (
                <span style={{
                  marginTop: '8px',
                  background: 'var(--bg)',
                  padding: '4px 8px',
                  border: '1px solid var(--cyan)',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  color: 'var(--cyan)'
                }}>
                  {loc.name}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* INFO SIDEBAR */}
        <aside className="map-side">
          <div className="slab" style={{ height: '100%', marginBottom: 0 }}>
            <div className="eyebrow">SELECTED LOCATION</div>
            <h3 className="display" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              {activeLoc.name}
            </h3>
            <p className="lead" style={{ fontSize: '1rem', marginBottom: '2rem' }}>
              {activeLoc.desc}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={activeLoc.link} 
                target="_blank" 
                rel="noreferrer" 
                className="btn wire"
              >
                Visit Website
              </a>
            </div>
            
            <hr style={{ margin: '2rem 0', borderColor: 'var(--ink-dim)', opacity: 0.3 }} />
            
            <p style={{ fontSize: '0.8rem', color: 'var(--ink-dim)' }}>
              Click the pins on the map to view different organizations. 
              On mobile, the map shows relative locations.
            </p>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
