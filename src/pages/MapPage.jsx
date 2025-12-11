import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function MapPage() {
  
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

  return (
    <div className="page map-page">

      {/* HEADER */}
      <header className="page-head slice-reveal reveal fade-in">
        <h2 className="xxl skew">MAP</h2>
        <p className="kicker">brutalist — community — network</p>
      </header>

      <div className="map-layout">

        {/* LEFT SIDE — Brutalist SVG Network */}
        <div className="map-spin-frame reveal fade-in-up">

          {/* Top Label */}
          <div className="map-label">COPPELL COMMUNITY NETWORK</div>

          {/* === SVG START === */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 520"
            xmlns="http://www.w3.org/2000/svg"
            className="map-image"
          >

            {/* Background Grid */}
            <defs>
              <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
                <path d="M 22 0 L 0 0 0 22" stroke="#777" strokeWidth="0.4" />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.22" />

            {/* Connection Lines */}
            <line x1="300" y1="120" x2="150" y2="240" stroke="#050505" strokeWidth="6" />
            <line x1="300" y1="120" x2="450" y2="240" stroke="#050505" strokeWidth="6" />
            <line x1="150" y1="240" x2="300" y2="360" stroke="#050505" strokeWidth="6" />
            <line x1="450" y1="240" x2="300" y2="360" stroke="#050505" strokeWidth="6" />
            <line x1="300" y1="360" x2="300" y2="450" stroke="#050505" strokeWidth="6" />

            {/* COPPELL - accent node */}
            <circle cx="300" cy="120" r="42" fill="#ff2a6d" stroke="#050505" strokeWidth="6" />
            <text
              x="300"
              y="124"
              fontFamily="Courier New, monospace"
              fontSize="12"
              fill="#050505"
              textAnchor="middle"
            >
              COPPELL
            </text>

            {/* Farmers Market (Beige) */}
            <circle cx="150" cy="240" r="38" fill="#e6dcc5" stroke="#050505" strokeWidth="6" />
            <text
              x="150"
              y="238"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              Farmers
            </text>
            <text
              x="150"
              y="253"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              Market
            </text>

            {/* NoteLove */}
            <circle cx="450" cy="240" r="38" fill="#d2c7b2" stroke="#050505" strokeWidth="6" />
            <text
              x="450"
              y="245"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              NoteLove
            </text>

            {/* Metrocrest */}
            <circle cx="300" cy="360" r="42" fill="#e6dcc5" stroke="#050505" strokeWidth="6" />
            <text
              x="300"
              y="364"
              fontSize="12"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              Metrocrest
            </text>

            {/* Neighbors In Need */}
            <circle cx="300" cy="450" r="36" fill="#d2c7b2" stroke="#050505" strokeWidth="6" />
            <text
              x="300"
              y="447"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              Neighbors
            </text>
            <text
              x="300"
              y="462"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              In Need
            </text>

          </svg>
          {/* === SVG END === */}

        </div>

        {/* RIGHT SIDE — Meaning / Legend */}
        <div className="map-side slab fade-in-up delay-2 reveal">
          <h3 className="display">Why This Network Matters</h3>
          <p className="lead">
            Coppell's community isn't random — it's a connected ecosystem.
            Each node represents a real organization, and each line shows how
            food, arts, mutual aid, and city life overlap in meaningful ways.
          </p>

          <ul style={{ marginTop: "1rem", lineHeight: "1.7" }}>
            <li><strong>Coppell</strong> is the center — the shared city identity.</li>
            <li><strong>Farmers Market</strong> supports food access + small business.</li>
            <li><strong>Metrocrest</strong> provides essential social support.</li>
            <li><strong>NoteLove</strong> expands creative access for youth.</li>
            <li><strong>Neighbors In Need</strong> strengthens hyperlocal aid.</li>
          </ul>

          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Together, they form a **real network of care** that your archive
            documents and makes visible.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}



