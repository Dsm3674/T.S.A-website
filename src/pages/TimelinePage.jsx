import React from "react";

export default function TimelinePage() {
  const eras = [
    {
      era: "EARLY ROOTS",
      years: "1800–1950",
      desc:
        "Coppell begins as a small settlement with farms, a schoolhouse, and the earliest community centers.",
    },
    {
      era: "GROWTH & IDENTITY",
      years: "1950–1990",
      desc:
        "Neighborhoods expand, schools grow, and Coppell develops its identity as a close-knit town.",
    },
    {
      era: "COMMUNITY ERA",
      years: "1990–2010",
      desc:
        "Farmers markets, volunteer groups, and youth organizations shape the city’s culture.",
    },
    {
      era: "PRESENT DAY",
      years: "2010–2025",
      desc:
        "Mutual aid, arts programs, and nonprofits strengthen support and make Coppell more connected.",
    },
  ];

  return (
    <div className="page timeline">

      <header className="page-head fade-in">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="kicker">Coppell through eras — growth, identity, community</p>
      </header>

      <section className="slab fade-in-up">
        <div className="eyebrow">WHY ERA SEPARATION?</div>
        <h3 className="display">Understanding Coppell Through Time</h3>
        <p className="lead">
          We divided Coppell into eras so visitors can clearly see how the city
          transformed from farmland to a modern, community-driven town. Each
          era highlights shifts in culture, population, and the organizations
          that shaped today’s Coppell.
        </p>
      </section>

      <div className="timeline-grid">
        {eras.map((e, i) => (
          <div key={i} className={`timeline-card fade-in-up delay-${i + 1}`}>
            <div className="eyebrow">{e.years}</div>
            <h3 className="display">{e.era}</h3>
            <p className="lead">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



