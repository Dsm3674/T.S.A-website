import React, { useState } from "react";

export default function MapPage() {
  const [sel, setSel] = useState(null);

  const pts = [
    {
      id: 1,
      name: "COPPELL FARMERS MARKET",
      x: 22,
      y: 38,
      story:
        "Saturday mornings: local growers, food trucks, and neighbors meeting over fresh produce.",
      link: "https://coppellfarmersmarket.org/",
    },
    {
      id: 2,
      name: "NOTELOVE SESSIONS",
      x: 56,
      y: 26,
      story:
        "Student musicians gather after school for free lessons and practice, run by youth volunteers.",
      link: "https://www.notelove.org/",
    },
    {
      id: 3,
      name: "METROCREST SERVICES HUB",
      x: 71,
      y: 51,
      story:
        "A regional hub for food security, emergency aid, and senior programs serving Coppell residents.",
      link: "https://metrocrestservices.org/",
    },
    {
      id: 6,
      name: "NEIGHBORS IN NEED",
      x: 34,
      y: 55,
      story:
        "Neighbors organize meal trains, rides, and essentials so families have support during hard weeks.",
      link: "https://www.instagram.com/neighbors_in_need_/",
    },
  ];

  return (
    <div className="page map">

      {/* Header stays animated */}
      <header className="page-head fade-in">
        <h2 className="xxl skew">COMMUNITY MAP</h2>
        <p className="kicker">
          Click pins — glowing noir grid of Coppell, from markets to mutual aid
        </p>
      </header>

      <div className="map-grid">

        {/* 🟢 FULLY STABLE MAP (NO ANIMATION ON DOTS) */}
        <div className="map-pane grid-overlay">
          <svg className="noir-map" viewBox="0 0 100 100">
            <defs>
              <pattern
                id="grid10"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <rect width="10" height="10" fill="var(--bg)" />
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="var(--ink-dim)"
                  strokeWidth="0.4"
                  strokeLinecap="square"
                />
              </pattern>
            </defs>

            <rect width="100" height="100" fill="url(#grid10)" />

            {pts.map((p) => (
              <g
                key={p.id}
                className="pin-group"
                onClick={() => setSel(p)}
                style={{ cursor: "pointer" }}
              >
                {/* Outer ring — FIXED size */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={5}
                  className={`pin-ring ${sel?.id === p.id ? "pin-ring-active" : ""}`}
                />

                {/* Inner dot — FIXED size */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={3}
                  className={`pin-core ${sel?.id === p.id ? "pin-active" : ""}`}
                />

                <text
                  x={p.x}
                  y={p.y - 7}
                  className="pin-label"
                  textAnchor="middle"
                >
                  {p.name}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Sidebar card animation stays */}
        <aside className="map-side">
          {sel ? (
            <div className="map-card slab map-card-active fade-in-up">
              <div className="eyebrow">LOCATION</div>
              <h3 className="display">{sel.name}</h3>
              <p className="lead">{sel.story}</p>

              {sel.link ? (
                <a
                  className="btn wire"
                  href={sel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VISIT SITE →
                </a>
              ) : (
                <button className="btn wire">READ MORE →</button>
              )}
            </div>
          ) : (
            <div className="map-card ghost fade-in-up">
              <p className="ghost-hint">
                Click a pin to unlock its story — including neighbors-helping-neighbors.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}


