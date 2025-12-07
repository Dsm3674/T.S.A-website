import React, { useState } from "react";
import Footer from "../components/Footer";
import coppellMap from "../assets/coppell-map.png"; // <-- YOUR MAP IMAGE

export default function MapPage() {
  const [sel, setSel] = useState(null);

  const pts = [
    {
      id: 1,
      name: "COPPELL FARMERS MARKET",
      x: 28,
      y: 62,
      story:
        "Saturday mornings: local growers, food trucks, and neighbors meeting over fresh produce.",
      link: "https://coppellfarmersmarket.org/",
    },
    {
      id: 2,
      name: "NOTELOVE SESSIONS",
      x: 58,
      y: 32,
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
      name: "NEIGHBORS IN NEED",
      x: 38,
      y: 55,
      story:
        "Neighbors organize meal trains, rides, and essentials so families have support during difficult weeks.",
      link: "https://www.instagram.com/neighbors_in_need_/",
    },
  ];

  return (
    <div className="page map page-enter page-enter-active">
      <header className="page-head fade-in">
        <h2 className="xxl skew">COMMUNITY MAP</h2>
        <p className="kicker">Explore Coppell — landmarks, support hubs, and community anchors.</p>
      </header>

      <div className="map-grid">

        {/* LEFT MAP PANEL */}
        <div className="map-pane">
          <div className="map-bg">
            <img src={coppellMap} className="map-img" alt="Coppell map" />

            {/* Coppell outline */}
            <svg className="coppell-outline" viewBox="0 0 100 100">
              <path
                d="M14 12 L26 10 L35 18 L48 14 L62 20 L70 34 L82 40 L86 52 L80 64 L68 74 L54 82 L40 78 L28 70 L18 58 L12 44 Z"
                fill="none"
                stroke="var(--cyan)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>

            {/* Pins */}
            <svg className="map-pins" viewBox="0 0 100 100">
              {pts.map((p) => (
                <g
                  key={p.id}
                  className="pin-group"
                  onClick={() => setSel(p)}
                >
                  <circle cx={p.x} cy={p.y} r="4.8" className="pin-ring" />
                  <circle cx={p.x} cy={p.y} r="2.9" className="pin-core" />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="map-side">
          {sel ? (
            <div className="map-card slab fade-in-up">
              <div className="eyebrow">LOCATION</div>
              <h3 className="display">{sel.name}</h3>
              <p className="lead">{sel.story}</p>
              <a className="btn wire" href={sel.link} target="_blank">
                VISIT SITE →
              </a>
            </div>
          ) : (
            <div className="map-card ghost fade-in-up">
              <p className="ghost-hint">
                Select a pin on the map to learn about Coppell’s community anchors.
              </p>
            </div>
          )}
        </aside>
      </div>

      <Footer />
    </div>
  );
}


