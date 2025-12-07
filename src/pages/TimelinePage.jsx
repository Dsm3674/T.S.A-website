import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function TimelinePage() {
  const eras = [
    {
      era: "EARLY ROOTS",
      years: "1840–1950",
      desc:
        "Coppell began in 1840 as a small farming settlement. Early community life centered on schoolhouses, churches, and family-run farms.",
    },
    {
      era: "GROWTH & IDENTITY",
      years: "1950–1990",
      desc:
        "Neighborhoods expanded, schools developed rapidly, and Coppell shaped a strong identity as an education-focused, close-knit town.",
    },
    {
      era: "COMMUNITY ERA",
      years: "1990–2010",
      desc:
        "Farmers markets, youth programs, and growing volunteer groups created a culture of connection and hometown pride.",
    },
    {
      era: "PRESENT DAY",
      years: "2010–2025",
      desc:
        "Mutual aid, arts programs, nonprofits, and community-led initiatives strengthened Coppell into a modern, people-centered city.",
    }
  ];

  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll(".reveal, .fade-in-up");
      const trigger = window.innerHeight * 0.85;

      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("show");
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="page timeline">

      <header className="page-head fade-in">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="kicker">Coppell through eras — growth, identity, connection</p>
      </header>

      <section className="slab fade-in-up reveal delay-1">
        <div className="eyebrow">WHY WE USE ERAS</div>
        <h3 className="display">Understanding Coppell Through Time</h3>
        <p className="lead">
          Each era reveals how Coppell transformed from farmland into a modern,
          community-driven city. The eras help visitors see how education,
          connection, and service became core values that shaped today's Coppell.
        </p>
      </section>

      <div className="timeline-grid">
        {eras.map((e, i) => (
          <div key={i} className={`timeline-card reveal fade-in-up delay-${i + 1}`}>
            
            <div className="timeline-img-wrapper">
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '0.9rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {e.years}
              </div>
            </div>

            <div className="eyebrow">{e.years}</div>
            <h3 className="display">{e.era}</h3>
            <p className="lead">{e.desc}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

