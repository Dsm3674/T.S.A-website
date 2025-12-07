import React from "react";
import Footer from "../components/Footer";

export default function TimelinePage() {
  const eras = [
    {
      years: "1840–1950",
      era: "EARLY ROOTS",
      desc:
        "Coppell begins as a small settlement with farms, a schoolhouse, and the earliest community gathering places.",
    },
    {
      years: "1950–1990",
      era: "GROWTH & IDENTITY",
      desc:
        "Neighborhoods expand, schools grow, and Coppell develops its identity as a close-knit and welcoming town.",
    },
    {
      years: "1990–2010",
      era: "COMMUNITY ERA",
      desc:
        "Farmers markets, volunteer groups, and youth organizations help shape the city’s community-driven culture.",
    },
    {
      years: "2010–2025",
      era: "PRESENT DAY",
      desc:
        "Mutual aid, arts programs, and nonprofits strengthen support networks and make Coppell more connected than ever.",
    },
  ];

  return (
    <div className="page timeline fade-in">
      <header className="page-head fade-in-up">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="kicker">Coppell through eras — growth, identity, community</p>
      </header>

      <section className="slab fade-in-up delay-1">
        <div className="eyebrow">WHY ERA SEPARATION?</div>
        <h3 className="display">Understanding Coppell Through Time</h3>
        <p className="lead">
          Coppell is best understood in eras — each period marks shifts in growth,
          culture, and the organizations that shaped the community we live in today.
        </p>
      </section>

      <div className="timeline-grid">
        {eras.map((e, i) => (
          <div
            key={i}
            className={`timeline-card fade-in-up delay-${i + 2}`}
          >
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



