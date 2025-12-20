import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
import Footer from "../components/Footer";

import earlyImg from "../assets/Document.jpg";
import era1950 from "../assets/image.png";
import era1990 from "../assets/2010.png";
import era2025 from "../assets/Document (1).jpeg";

export default function TimelinePage() {
  useReveal();
  const [selectedEra, setSelectedEra] = useState(null);

  const eras = [
    {
      id: 1,
      era: "Early Roots",
      years: "1840–1950",
      img: earlyImg,
      desc: "Agricultural beginnings and early settlement."
    },
    {
      id: 2,
      era: "Growth",
      years: "1950–1990",
      img: era1950,
      desc: "Suburban expansion and school culture."
    },
    {
      id: 3,
      era: "Community",
      years: "1990–2010",
      img: era1990,
      desc: "Markets, youth programs, civic identity."
    },
    {
      id: 4,
      era: "Modern Coppell",
      years: "2010–2025",
      img: era2025,
      desc: "Arts, mutual aid, student leadership."
    }
  ];

  return (
    <div className="page">
      <header className="page-head reveal">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="kicker">Tap an era to explore</p>
      </header>

      {/* MOBILE-FRIENDLY HORIZONTAL SCROLL */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          paddingBottom: "1rem"
        }}
      >
        {eras.map(e => (
          <button
            key={e.id}
            onClick={() => setSelectedEra(e)}
            className="timeline-card-h reveal fade-in-up"
            style={{ minWidth: "260px", textAlign: "left" }}
          >
            <div className="t-img-box">
              <img src={e.img} alt={e.era} loading="lazy" />
            </div>
            <strong>{e.era}</strong>
            <p className="years">{e.years}</p>
            <p>{e.desc}</p>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {selectedEra && (
        <div
          className="timeline-modal"
          onClick={() => setSelectedEra(null)}
        >
          <div
            className="slab"
            style={{ maxWidth: "90vw" }}
            onClick={e => e.stopPropagation()}
          >
            <h3>{selectedEra.era}</h3>
            <p className="lead">{selectedEra.desc}</p>
            <button
              className="btn slab"
              onClick={() => setSelectedEra(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
