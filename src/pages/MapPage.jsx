import React from "react";
import Footer from "../components/Footer";

export default function MapPage() {
  return (
    <div className="page map">
      <header className="page-head fade-in">
        <h2 className="xxl skew">COMMUNITY GRAPH</h2>
        <p className="kicker">how coppell organizations interconnect</p>
      </header>

      {/* Graph container using SAME animations as map */}
      <div className="map-spin-frame fade-in-up reveal" style={{ maxWidth: "650px", margin: "0 auto" }}>
        
        {/* Label on top-left */}
        <span className="map-label">Coppell Community Network Graph</span>

        {/* Small SVG Graph (replaces the map) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          className="svg-map"        /* this gives spin + float automatically */
          style={{ padding: "20px" }}
        >
          {/* Background grid still works */}
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="#555" strokeWidth="1" opacity="0.12" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="var(--panel)" />
          <rect width="100%" height="100%" fill="url(#gridPattern)" />

          {/* Connections */}
          <line x1="400" y1="100" x2="200" y2="300" stroke="var(--ink)" strokeWidth="8" />
          <line x1="400" y1="100" x2="600" y2="300" stroke="var(--ink)" strokeWidth="8" />
          <line x1="400" y1="100" x2="400" y2="450" stroke="var(--ink)" strokeWidth="8" />
          <line x1="200" y1="300" x2="400" y2="450" stroke="var(--ink)" strokeWidth="8" />
          <line x1="600" y1="300" x2="400" y2="450" stroke="var(--ink)" strokeWidth="8" />

          {/* Nodes */}
          <circle cx="400" cy="100" r="35" fill="var(--mag)" stroke="var(--ink)" strokeWidth="6" />
          <circle cx="200" cy="300" r="30" fill="var(--cyan)" stroke="var(--ink)" strokeWidth="6" />
          <circle cx="600" cy="300" r="30" fill="var(--cyan)" stroke="var(--ink)" strokeWidth="6" />
          <circle cx="400" cy="450" r="32" fill="var(--lime)" stroke="var(--ink)" strokeWidth="6" />

          {/* Labels */}
          <text x="400" y="95" textAnchor="middle" fontFamily="Courier New" fontSize="18" fill="var(--ink)">
            Farmers Market
          </text>

          <text x="200" y="295" textAnchor="middle" fontFamily="Courier New" fontSize="18" fill="var(--ink)">
            NoteLove
          </text>

          <text x="600" y="295" textAnchor="middle" fontFamily="Courier New" fontSize="18" fill="var(--ink)">
            Metrocrest
          </text>

          <text x="400" y="445" textAnchor="middle" fontFamily="Courier New" fontSize="20" fill="var(--ink)">
            Neighbors In Need
          </text>
        </svg>
      </div>

      {/* Sidebar explanation */}
      <section className="slab block-pop fade-in-up delay-1">
        <div className="eyebrow">HOW TO READ THIS GRAPH</div>
        <h3 className="display">Community Systems Work Together</h3>
        <p className="lead">
          Coppell’s support ecosystem is interconnected. This graph visualizes how
          food access, arts programs, housing assistance, and mutual aid groups reinforce
          each other to support families across the city.
        </p>
        <ul>
          <li><strong>Farmers Market</strong> provides local food and volunteers.</li>
          <li><strong>NoteLove</strong> enriches culture and community bonding.</li>
          <li><strong>Metrocrest</strong> anchors social services and emergency aid.</li>
          <li><strong>Neighbors In Need</strong> fills critical gaps through mutual aid.</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}


