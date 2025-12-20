import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

import earlyImg from "../assets/Document.jpg";
import era1950 from "../assets/image.png";
import era1990 from "../assets/2010.png";
import era2025 from "../assets/Document (1).jpeg";

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState(null);

 
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".reveal, .fade-in, .fade-in-up")
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
        <p className="kicker">Community evolution</p>
      </header>

      {/* Horizontal timeline rail */}
      <section
        className="timeline-scroll"
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          paddingBottom: "1.25rem"
        }}
      >
        {eras.map(e => (
          <button
            key={e.id}
            onClick={() => setSelectedEra(e)}
            className={`timeline-card-h reveal fade-in-up ${
              selectedEra?.id === e.id ? "is-active" : ""
            }`}
            style={{
              minWidth: "260px",
              flexShrink: 0,
              textAlign: "left"
            }}
          >
            <div className="t-img-box">
              <img src={e.img} alt={e.era} loading="lazy" />
            </div>
            <div className="eyebrow">{e.years}</div>
            <strong>{e.era}</strong>
            <p>{e.desc}</p>
          </button>
        ))}
      </section>

      {/* MODAL */}
      {selectedEra && (
        <div
          className="timeline-modal"
          onClick={() => setSelectedEra(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem"
          }}
        >
          <div
            className="slab"
            style={{
              maxWidth: "720px",
              width: "100%",
              borderColor: "var(--mag)"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="eyebrow">{selectedEra.years}</div>
            <h3 className="display">{selectedEra.era}</h3>
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

