import React, { useState } from "react";
import coppellMap from "../assets/coppell-map.png";

export default function MapPage() {
  const [active, setActive] = useState(null);

  const pins = [
    {
      id: 1,
      name: "Trader Joe's",
      x: "42%",
      y: "38%",
      desc: "Local grocery store and community hotspot."
    },
    {
      id: 2,
      name: "Patel Brothers",
      x: "52%",
      y: "72%",
      desc: "Popular South Asian grocery market."
    },
    {
      id: 3,
      name: "Sri Guruvayurappan Temple",
      x: "68%",
      y: "55%",
      desc: "Major community religious and cultural center."
    }
  ];

  return (
    <div className="page">
      <header className="page-head">
        <h2 className="xxl skew">COMMUNITY MAP</h2>
        <p className="kicker">interactive — locations — resources</p>
      </header>

      <div className="map-grid">
        {/* LEFT MAP PANEL */}
        <div className="map-pane">

          {/* Background Image */}
          <img src={coppellMap} alt="Coppell Map" className="map-img" />

          {/* Pins */}
          <div className="map-pins">
            {pins.map((p) => (
              <div
                key={p.id}
                className="pin"
                style={{ left: p.x, top: p.y }}
                onClick={() => setActive(p)}
              >
                <div className="pin-core"></div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="map-side">
          {active ? (
            <div className="map-card fade-in-up">
              <h3 className="display">{active.name}</h3>
              <p className="lead">{active.desc}</p>
            </div>
          ) : (
            <div className="map-card ghost">
              <p>Select any location pin on the map.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

