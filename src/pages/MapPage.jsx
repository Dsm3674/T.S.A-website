import React from "react";
import Footer from "../components/Footer";

export default function MapPage() {
  const pins = [
    { x: 540, y: 580, title: "Coppell Farmers Market" },
    { x: 620, y: 270, title: "Metrocrest Services" },
    { x: 460, y: 330, title: "NoteLove" },
    { x: 700, y: 520, title: "Neighbors In Need" },
  ];

  return (
    <div className="page map">
      <header className="page-head fade-in">
        <h2 className="xxl skew">MAP</h2>
        <p className="kicker">SECTION OF COPPELL</p>
      </header>

      {/* Use same floating + tilt animation block */}
      <div className="map-spin-frame fade-in-up reveal">
        <span className="map-label">Section of Coppell — SVG Reference</span>

        {/* SVG Map (brutalist) */}
        <div className="svg-map-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 900"
            className="svg-map" // this already spins in your CSS
          >
            <defs>
              <pattern
                id="brutalGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#555"
                  strokeWidth="1"
                  opacity="0.15"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="var(--panel)" />
            <rect width="100%" height="100%" fill="url(#brutalGrid)" />

            <path
              d="M180 160 L1020 200 L1130 380
                 L1020 560 L780 740 L420 760 L200 540 Z"
              fill="#e6dfc7"
              stroke="var(--ink)"
              strokeWidth="14"
            />

            {/* lake = blue */}
            <ellipse
              cx="600"
              cy="380"
              rx="120"
              ry="75"
              fill="#1b4fff"
              stroke="var(--ink)"
              strokeWidth="10"
            />

            <path d="M160 480 L1090 500" stroke="var(--ink)" strokeWidth="14" />
            <path d="M350 120 L390 780" stroke="var(--ink)" strokeWidth="14" />

            <text
              x="600"
              y="470"
              fontFamily="Courier New, monospace"
              fontSize="64"
              fill="var(--ink)"
              textAnchor="middle"
              fontWeight="700"
            >
              COPPELL
            </text>

            <text
              x="600"
              y="320"
              fontFamily="Courier New, monospace"
              fontSize="26"
              fill="var(--ink)"
              textAnchor="middle"
            >
              Duck Pond Park
            </text>
          </svg>

          {/* Pins use same classes as before */}
          {pins.map((p, i) => (
            <button
              key={i}
              className="map-pin" // already styled
              style={{ left: p.x, top: p.y }}
            >
              <span className="pin-dot"></span>
              <span className="pin-tooltip">{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

