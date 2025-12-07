import React, { useEffect } from "react";
import Footer from "../components/Footer";

// IMPORT IMAGES FOR TIMELINE CARDS
import earlyImg from "../assets/timeline-early.jpg";
import growthImg from "../assets/timeline-growth.jpg";
import communityImg from "../assets/timeline-community.jpg";
import presentImg from "../assets/timeline-present.jpg";

export default function TimelinePage() {
  const eras = [
    {
      era: "EARLY ROOTS",
      years: "1840–1950",
      img: earlyImg,
      desc:
        "Coppell began in 1840 as a small farming settlement. Early community life centered on schoolhouses, churches, and family-run farms.",
    },
    {
      era: "GROWTH & IDENTITY",
      years: "1950–1990",
      img: growthImg,
      desc:
        "Neighborhoods expanded, schools developed rapidly, and Coppell shaped a strong identity as an education-focused, close-knit town.",
    },
    {
      era: "COMMUNITY ERA",
      years: "1990–2010",
      img: communityImg,
      desc:
        "Farmers markets, youth programs, and growing volunteer groups created a culture of connection and hometown pride.",
    },
    {
      era: "PRESENT DAY",
      years: "2010–2025",
      img: presentImg,
      desc:
        "Mutual aid, arts programs, nonprofits, and community-led initiatives strengthened Coppell into a modern, people-centered city.",
    }
  ];

  // Fade-in scroll animation
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

      {/* HEADER */}
      <header className="page-head fade-in">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="kicker">Coppell through eras — growth, identity, connection</p>
      </header>

      {/* WHY WE USE ERAS */}
      <section className="slab fade-in-up reveal delay-1">
        <div className="eyebrow">WHY WE USE ERAS</div>
        <h3 className="display">Understanding Coppell Through Time</h3>
        <p className="lead">
          Each era reveals how Coppell transformed from farmland into a modern,
          community-driven city. The eras help visitors see how education,
          connection, and service became core values that shaped today’s Coppell.
        </p>
      </section>

      {/* TIMELINE GRID */}
      <div className="timeline-grid">
        {eras.map((e, i) => (
          <div key={i} className={`timeline-card reveal fade-in-up delay-${i + 1}`}>
            
            <div className="timeline-img-wrapper">
              <img src={e.img} alt={e.era} className="timeline-img" />
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



