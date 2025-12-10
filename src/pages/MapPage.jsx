// src/pages/MapPage.jsx
import React from "react";
import Footer from "../components/Footer";
import coppellMapImg from "../assets/coppell-map.png";

const pins = [
  {
    title: "Coppell Farmers Market",
    subtitle: "Local growers, food, and weekly community gathering.",
    x: "36%", // adjust if needed
    y: "54%",
  },
  {
    title: "Metrocrest Services",
    subtitle: "Food security, housing, and wraparound support.",
    x: "63%",
    y: "68%",
  },
  {
    title: "NoteLove",
    subtitle: "Youth-led free music lessons across Coppell.",
    x: "28%",
    y: "40%",
  },
  {
    title: "Neighbors In Need",
    subtitle: "Mutual-aid network helping local families.",
    x: "49%",
    y: "46%",
  },
];

export default function MapPage() {
  return (
    <div className="page map">
      {/* HEADER */}
      <header className="page-head fade-in">
        <h2 className="xxl skew">MAP</h2>
        <p className="kicker">SECTION OF COPPELL — COMMUNITY NETWORK</p>
      </header>

      {/* MAP + COPY */}
      <section className="map-layout">
        {/* MAP CARD */}
        <div className="map-spin-frame fade-in-up">
          <span className="map-label">
            Section of Coppell — Geographic Reference
          </span>

          <img
            src={coppellMapImg}
            alt="Map of Coppell, Texas"
            className="map-image"
          />

          {/* PINS (now locked in place) */}
          {pins.map((p, i) => (
            <button
              key={i}
              type="button"
              className="map-pin"
              style={{ top: p.y, left: p.x }}
            >
              <span className="pin-dot" />
              <span className="pin-tooltip">
                <strong>{p.title}</strong>
                <br />
                <span>{p.subtitle}</span>
              </span>
            </button>
          ))}
        </div>

        {/* TEXT EXPLAINING THIS SECTION OF COPPELL */}
        <aside className="slab block-pop fade-in-up delay-1 map-side-copy">
          <div className="eyebrow">WHY THIS AREA MATTERS</div>
          <h3 className="display">Overlapping Support Systems</h3>
          <p className="lead">
            This section of Coppell captures where food security, mutual aid, and
            arts education intersect. The archive isn’t just a list of links—it
            is a map of how neighbors support each other in real life.
          </p>
          <ul>
            <li>
              <strong>Coppell Farmers Market</strong> anchors local food access
              and small businesses.
            </li>
            <li>
              <strong>Metrocrest Services</strong> provides safety nets for
              housing, food, and seniors.
            </li>
            <li>
              <strong>NoteLove</strong> fills cultural and creative gaps through
              free music lessons.
            </li>
            <li>
              <strong>Neighbors In Need</strong> shows how informal mutual-aid
              groups keep families afloat.
            </li>
          </ul>
          <p className="lead" style={{ marginTop: "0.75rem" }}>
            Together, these pins visualize the ecosystem that inspired the
            timeline, stories, and archive cards across the site.
          </p>
        </aside>
      </section>

      <Footer />
    </div>
  );
}
