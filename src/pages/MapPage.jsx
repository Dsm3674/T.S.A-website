import React, { useState } from "react";

export default function MapPage() {
  const [sel, setSel] = useState(null);

  const pts = [
    {
      id: 1,
      name: "OLD TOWN",
      x: 22,
      y: 38,
      story: "Historic core: first storefronts, first murals.",
    },
    {
      id: 2,
      name: "COMMUNITY CENTER",
      x: 56,
      y: 26,
      story: "Nonprofit hub: 100+ activations yearly.",
    },
    {
      id: 3,
      name: "BUSINESS DIST.",
      x: 71,
      y: 51,
      story: "20+ businesses, 430+ jobs, night economy.",
    },
    {
      id: 4,
      name: "GREEN SPACES",
      x: 41,
      y: 72,
      story: "Parks serving 15K+ annually, story walks.",
    },
    {
      id: 5,
      name: "CULTURAL QUARTER",
      x: 65,
      y: 77,
      story: "Murals, galleries, rotating exhibits.",
    },
  ];

  return (
    <div className="page map">
      <header className="page-head">
        <h2 className="xxl skew">COMMUNITY MAP</h2>
        <p className="kicker">Click pins — glowing noir grid</p>
      </header>

      <div className="map-grid">
        <div className="map-pane">
          <svg className="noir-map" viewBox="0 0 100 100">
            {/* Theme-aware noir grid */}
            <defs>
              <pattern
                id="grid10"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                {/* Background tile picks up CSS variable */}
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

            {/* Use pattern for full map area */}
            <rect width="100" height="100" fill="url(#grid10)" />

            {/* Pins */}
            {pts.map((p) => (
              <g
                key={p.id}
                className="pin-group"
                onClick={() => setSel(p)}
              >
                {/* OUTER RING */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={sel?.id === p.id ? 5 : 4.5}
                  className="pin-ring"
                />

                {/* INNER CIRCLE */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={sel?.id === p.id ? 3.2 : 2.8}
                  className={`pin-core ${
                    sel?.id === p.id ? "pin-active" : ""
                  }`}
                />

                {/* LABEL */}
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

        <aside className="map-side">
          {sel ? (
            <div className="map-card slab">
              <div className="eyebrow">LOCATION</div>
              <h3 className="display">{sel.name}</h3>
              <p className="lead">{sel.story}</p>
              <button className="btn wire">READ MORE →</button>
            </div>
          ) : (
            <div className="map-card ghost">
              <p className="ghost-hint">Click a pin to unlock its story</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

