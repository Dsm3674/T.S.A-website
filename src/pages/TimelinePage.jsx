import React, { useState } from "react";

// UPDATED IMAGES — using your actual assets folder names
import earlyImg from "../assets/Document.jpg";            // Era 1
import era1950 from "../assets/image.png";                // Era 2
import era1990 from "../assets/2010.png";                 // Era 3
import era2025 from "../assets/Document (1).jpeg";        // Era 4

import "../styles/brutalist.css";

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState(null);

  const eras = [
    {
      id: 1,
      era: "Early Roots",
      years: "1840–1950",
      shortDesc: "Small farming settlement.",
      fullDetails:
        "Coppell began in 1840 as a farming settlement originally called Gibbs Station. Life centered around agriculture, small churches, and one-room schoolhouses.",
      img: earlyImg,
      citation: "https://www.coppelltx.gov/610/History-of-Coppell"
    },
    {
      id: 2,
      era: "Growth & Identity",
      years: "1950–1990",
      shortDesc: "Schools, music, and rapid expansion.",
      fullDetails:
        "After the opening of DFW Airport, Coppell shifted from rural farmland to a growing suburb. Music, marching band culture, and youth arts shaped the city’s identity.",
      img: era1950,
      citation:
        "https://coppellstudentmedia.com/121647/entertainment/rock-musics-evolution-its-influence-on-the-world-and-coppell/"
    },
    {
      id: 3,
      era: "Community Era",
      years: "1990–2010",
      shortDesc: "Farmers markets, youth programs, and culture.",
      fullDetails:
        "Community institutions began defining Coppell’s character. The Farmers Market, youth programs, and school traditions strengthened community ties.",
      img: era1990,
      citation:
        "https://coppellstudentmedia.com/20840/entertainment/the-end-of-the-harry-potter-era/"
    },
    {
      id: 4,
      era: "Present Day",
      years: "2010–2025",
      shortDesc: "Modern arts and mutual aid.",
      fullDetails:
        "Coppell now embraces a diverse civic culture shaped by arts programs, mutual aid organizations, and young community-driven initiatives.",
      img: era2025,
      citation:
        "https://www.coppelltx.gov/1225/2025-Yard-of-the-Month-Winners"
    }
  ];

  return (
    <div className="page-container">

      <header className="page-head fade-in">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="lead">Explore Coppell’s cultural eras.</p>
      </header>

      {/* ORIGINAL DESIGN GRID */}
      <div className="timeline-grid reveal fade-in-up">
        {eras.map((era) => (
          <div
            key={era.id}
            className="timeline-card slab"
            onClick={() => setSelectedEra(era)}
          >
            <h3>{era.era}</h3>
            <p className="years">{era.years}</p>
            <p className="short">{era.shortDesc}</p>
          </div>
        ))}
      </div>

      {/* ORIGINAL DESIGN MODAL */}
      {selectedEra && (
        <div className="timeline-modal" onClick={() => setSelectedEra(null)}>
          <div className="modal-content slab" onClick={(e) => e.stopPropagation()}>
            <button className="close-overlay" onClick={() => setSelectedEra(null)}>
              ✕
            </button>

            <h3>{selectedEra.era}</h3>
            <p className="years">{selectedEra.years}</p>

            <img
              src={selectedEra.img}
              alt={selectedEra.era}
              className="modal-img"
            />

            <div className="modal-body">
              <p className="lead">{selectedEra.fullDetails}</p>

              {selectedEra.citation && (
                <p className="citation">
                  <em>
                    Photo Source:{" "}
                    <a
                      href={selectedEra.citation}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedEra.citation}
                    </a>
                  </em>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
