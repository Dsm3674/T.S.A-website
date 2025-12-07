import React, { useState } from "react";
import Footer from "../components/Footer";

export default function MapPage() {
  const [sel, setSel] = useState(null);

  // Coordinates placed inside the Coppell silhouette
  const pts = [
    {
      id: 1,
      name: "COPPELL FARMERS MARKET",
      x: 45,
      y: 55,
      story:
        "Saturday mornings: local growers, food trucks, and neighbors meeting over fresh produce.",
      link: "https://coppellfarmersmarket.org/",
    },
    {
      id: 2,
      name: "NOTELOVE SESSIONS",
      x: 62,
      y: 35,
      story:
        "Student musicians gather after school for free lessons and practice, run by youth volunteers.",
      link: "https://www.notelove.org/",
    },
    {
      id: 3,
      name: "METROCREST SERVICES HUB",
      x: 70,
      y: 50,
      story:
        "A regional hub for food security, emergency aid, and senior programs serving Coppell residents.",
      link: "https://metrocrestservices.org/",
    },
    {
      id: 4,
      name: "NEIGHBORS IN NEED",
      x: 40,
      y: 70,
      story:
        "Neighbors organize meal trains, rides, and essentials so families have support during difficult weeks.",
      link: "https://www.instagram.com/neighbors_in_need_/",
    },
  ];

  return (
    <div className="page map">

      <header className="page-head fade-in">
        <h2 className="xxl skew">COMMUNITY MAP</h2>
        <p className="kicker">
          A stylized outline of Coppell featuring real community anchors.
        </p>
      </header>

      <div className="map-grid">

        {/* SVG COPPELL OUTLINE MAP */}
        <div className="map-pane">

          <svg viewBox="0 0 100 100" className="coppell-map">

            {/* Outer border */}
            <path
              d="
                M 10 20
                L 25 10
                L 45 12
                L 60 18
                L 72 25
                L 80 40
                L 78 55
                L 68 70
                L 52 82
                L 35 88
                L 20 80
                L 12 65
                Z
              "
              className="coppell-outline"
            />

            {/* Interior fill shading */}
            <path
              d="
                M 10 20
                L 25 10
                L 45 12
                L 60 18
                L 72 25
                L 80 40
                L 78 55
                L 68 70
                L 52 82
                L 35 88
                L 20 80
                L 12 65
                Z
              "
              className="coppell-fill"
            />

            {/* INTERACTIVE PINS */}
            {pts.map((p) => (
              <g key={p.id} onClick={() => setSel(p)}>

                <circle cx={p.x} cy={p.y} r="5" className="pin-ring-static" />
                <circle cx={p.x} cy={p.y} r="3" className="pin-core-static" />

                <text x={p.x} y={p.y - 6} className="pin-label">
                  {p.name}
                </text>

              </g>
            ))}

          </svg>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="map-side">
          {sel ? (
            <div className="map-card slab fade-in-up">
              <div className="eyebrow">LOCATION</div>
              <h3 className="display">{sel.name}</h3>
              <p className="lead">{sel.story}</p>

              {sel.link ? (
                <a className="btn wire" href={sel.link} target="_blank">
                  VISIT SITE →
                </a>
              ) : (
                <button className="btn wire">READ MORE →</button>
              )}
            </div>
          ) : (
            <div className="map-card ghost fade-in-up">
              <p className="ghost-hint">
                Select a location to view its role in Coppell.
              </p>
            </div>
          )}
        </aside>

      </div>

      <Footer />

    </div>
  );
}


