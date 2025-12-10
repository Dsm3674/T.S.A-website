import React from "react";
import Footer from "../components/Footer";

export default function GraphPage() {
  return (
    <div className="page map-page">
      <header className="page-head slice-reveal">
        <h2 className="xxl skew">COMMUNITY GRAPH</h2>
        <p className="kicker">connections — support — structure</p>
      </header>

      <section className="map-layout">
        
        {/* LEFT: GRAPH */}
        <div className="map-spin-frame" style={{ padding: "2rem" }}>
          <div className="map-label">Coppell Community Network</div>

          {/* SVG GRAPH */}
          <svg 
            viewBox="0 0 1200 1100"
            style={{
              width: "100%",
              display: "block",
              filter: "drop-shadow(6px 6px 0 var(--shadow))"
            }}
          >
            {/* GRID BG */}
            <rect width="100%" height="100%" fill="var(--panel)" />
            <rect width="100%" height="100%" 
              fill="url(#bgGrid)" opacity="0.15"
            />

            <defs>
              <pattern id="bgGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" 
                      stroke="var(--ink-dim)" strokeWidth="2" />
              </pattern>
            </defs>

            {/* CONNECTION LINES (thick brutalist) */}
            <line x1="600" y1="200" x2="300" y2="450"
              stroke="var(--ink)" strokeWidth="18" />
            <line x1="600" y1="200" x2="900" y2="450"
              stroke="var(--ink)" strokeWidth="18" />
            <line x1="300" y1="450" x2="600" y2="700"
              stroke="var(--ink)" strokeWidth="18" />
            <line x1="900" y1="450" x2="600" y2="700"
              stroke="var(--ink)" strokeWidth="18" />

            {/* NEW: METROCREST → NEIGHBORS LINE */}
            <line x1="600" y1="700" x2="600" y2="950"
              stroke="var(--ink)" strokeWidth="18" />

            {/* CENTRAL NODE — COPPELL */}
            <g>
              <circle cx="600" cy="200" r="70"
                fill="var(--mag)"
                stroke="var(--ink)"
                strokeWidth="14"
              />
              <text x="600" y="215" textAnchor="middle"
                fontFamily="Courier New"
                fontSize="26"
                fill="var(--bg)"
                fontWeight="bold">
                COPPELL
              </text>
            </g>

            {/* FARMERS MARKET */}
            <g>
              <circle cx="300" cy="450" r="60"
                fill="var(--cyan)"
                stroke="var(--ink)" strokeWidth="14" />
              <text x="300" y="455" textAnchor="middle"
                fontFamily="Courier New" fontSize="20"
                fill="var(--bg)" fontWeight="bold">
                Farmers
              </text>
              <text x="300" y="482" textAnchor="middle"
                fontFamily="Courier New" fontSize="20"
                fill="var(--bg)" fontWeight="bold">
                Market
              </text>
            </g>

            {/* NOTELOVE */}
            <g>
              <circle cx="900" cy="450" r="60"
                fill="var(--lime)"
                stroke="var(--ink)" strokeWidth="14" />
              <text x="900" y="455" textAnchor="middle"
                fontFamily="Courier New" fontSize="20"
                fill="var(--bg)" fontWeight="bold">
                NoteLove
              </text>
            </g>

            {/* METROCREST */}
            <g>
              <circle cx="600" cy="700" r="65"
                fill="var(--ink)"
                stroke="var(--mag)" strokeWidth="14" />
              <text x="600" y="710" textAnchor="middle"
                fontFamily="Courier New"
                fontSize="22"
                fill="var(--panel)"
                fontWeight="bold">
                Metrocrest
              </text>
            </g>

            {/* ⭐ NEW NODE — NEIGHBORS IN NEED */}
            <g>
              <circle cx="600" cy="950" r="65"
                fill="var(--cyan)"
                stroke="var(--ink)"
                strokeWidth="14"
              />
              <text x="600" y="955" textAnchor="middle"
                fontFamily="Courier New"
                fontSize="22"
                fill="var(--bg)"
                fontWeight="bold">
                Neighbors
              </text>
              <text x="600" y="982" textAnchor="middle"
                fontFamily="Courier New"
                fontSize="22"
                fill="var(--bg)"
                fontWeight="bold">
                In Need
              </text>
            </g>

          </svg>
        </div>

        {/* RIGHT SIDE TEXT */}
        <aside className="slab fade-in-up">
          <h3 className="display" style={{ marginBottom: "1rem" }}>
            Why a Network?
          </h3>

          <p className="lead">
            This graph shows how Coppell’s support systems interconnect.
            Instead of focusing on geography, it highlights how community groups
            share volunteers, food access, cultural enrichment, and direct aid.
          </p>

          <ul className="map-side-copy">
            <li><strong>Farmers Market</strong> connects families to local growers.</li>
            <li><strong>NoteLove</strong> expands arts education for youth.</li>
            <li><strong>Metrocrest</strong> anchors housing, food, and senior support.</li>
            <li><strong>Neighbors In Need</strong> strengthens mutual aid and emergency help.</li>
          </ul>

          <p className="lead" style={{ marginTop: "1.5rem" }}>
            Together, these organizations form the backbone of real community resilience.
          </p>
        </aside>

      </section>

      <Footer />
    </div>
  );
}


