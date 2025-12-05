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
      id: 4,
      name: "GREEN SPACES",
      x: 41,
      y: 72,
      story:
        "Parks serving families year-round, with story walks, outdoor concerts, and community runs.",
    },
    {
      id: 5,
      name: "CULTURAL QUARTER",
      x: 65,
      y: 77,
      story:
        "Murals, galleries, rotating exhibits, and pop-up arts nights stitching together local creativity.",
    },
  ];

  return (
    <div className="page map">
      <header className="page-head">
        <h2 className="xxl skew">COMMUNITY MAP</h2>
        <p className="kicker">Click pins — glowing noir grid of Coppell</p>
      </header>

      <div className="map-grid">
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
              >
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={sel?.id === p.id ? 5 : 4.5}
                  className={`pin-ring ${sel?.id === p.id ? "pin-ring-active" : ""}`}
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={sel?.id === p.id ? 3.2 : 2.8}
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

        <aside className="map-side">
          {sel ? (
            <div className="map-card slab map-card-active">
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
            <div className="map-card ghost">
              <p className="ghost-hint">Click a pin to unlock its story</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}


