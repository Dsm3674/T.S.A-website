import React, { useState } from "react";
import historyImg from "../assets/history.jpg";

// NEW IMAGE IMPORTS
import era1950 from "../assets/image.png";               
import era1990 from "../assets/2010.png";                
import era2025 from "../assets/Document (1).jpeg";       

import "../styles/brutalist.css";

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState(null);

  // UPDATED ERAS ARRAY
  const eras = [
    {
      id: 1,
      era: "Early Roots",
      years: "1840–1950",
      shortDesc: "Small farming settlement.",
      fullDetails:
        "Coppell began in 1840 as a small farming settlement originally called Gibbs Station. Life centered around agriculture, one-room schoolhouses, and small community churches. These early decades formed Coppell’s foundation of close-knit living and neighborly support.",
      img: historyImg
    },
    {
      id: 2,
      era: "Growth & Identity",
      years: "1950–1990",
      shortDesc: "Schools, music, & rapid expansion.",
      fullDetails:
        "After the opening of DFW Airport, Coppell shifted from rural farmland into a flourishing suburb. School spirit, marching band culture, and the rise of youth arts shaped the city’s identity. This era’s photo captures how music and youth expression reflected changing culture.",
      img: era1950,
      citation:
        "https://coppellstudentmedia.com/121647/entertainment/rock-musics-evolution-its-influence-on-the-world-and-coppell/"
    },
    {
      id: 3,
      era: "Community Era",
      years: "1990–2010",
      shortDesc: "Farmers markets, youth programs, & culture.",
      fullDetails:
        "As the city matured, culture and community institutions took center stage. The Coppell Farmers Market launched, youth sports grew, and community traditions formed. This era’s image highlights key cultural moments from the time.",
      img: era1990,
      citation:
        "https://coppellstudentmedia.com/20840/entertainment/the-end-of-the-harry-potter-era/"
    },
    {
      id: 4,
      era: "Present Day",
      years: "2010–2025",
      shortDesc: "Modern arts, mutual aid, & civic identity.",
      fullDetails:
        "Coppell now embraces a diverse and connected civic culture. From NoteLove to Neighbors in Need to expanded city arts initiatives, this era reflects a shift toward collaboration and creative expression.",
      img: era2025,
      citation:
        "https://www.coppelltx.gov/1225/2025-Yard-of-the-Month-Winners"
    }
  ];

  return (
    <div className="page-container">
      {/* MAP HEADER ADDITION */}
      <section className="slab reveal fade-in-up" style={{ marginTop: "2rem" }}>
        <div className="eyebrow">MAP + TIMELINE OVERVIEW</div>
        <h3 className="display">How Geography + History Connect</h3>
        <p className="lead" style={{ marginTop: "1rem" }}>
          Coppell’s growth and its cultural eras are tightly linked. The map
          highlights the city’s anchor organizations, while this timeline shows
          how the community evolved across settlement, expansion, culture
          building, and modern civic engagement.
        </p>
      </section>

      <header className="page-head fade-in">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="lead">
          Four eras that shaped Coppell’s identity and community culture.
        </p>
      </header>

      <div className="timeline-container reveal fade-in-up">
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

      {selectedEra && (
        <div className="timeline-overlay fade-in-up">
          <button
            className="close-overlay"
            onClick={() => setSelectedEra(null)}
          >
            ✕
          </button>

          <div className="overlay-content slab">
            <h3>{selectedEra.era}</h3>
            <p className="years">{selectedEra.years}</p>
            <img
              src={selectedEra.img}
              alt={selectedEra.era}
              className="overlay-img"
            />
            <p className="lead">{selectedEra.fullDetails}</p>

            {/* Citation Rendering */}
            {selectedEra.citation && (
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.85rem",
                  opacity: 0.6
                }}
              >
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
      )}
    </div>
  );
}

