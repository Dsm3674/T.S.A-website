import React from "react";
import Footer from "../components/Footer";

export default function TimelinePage() {
  const eras = [
    {
      era: "EARLY ROOTS",
      years: "1800–1950",
      desc:
        "Coppell begins as a small settlement with farms, a schoolhouse, and the earliest community gathering places.",
    },
    {
      era: "GROWTH & IDENTITY",
      years: "1950–1990",
      desc:
        "Suburban neighborhoods expand, schools grow, and Coppell develops its identity as a close-knit and welcoming town.",
    },
    {
      era: "COMMUNITY ERA",
      years: "1990–2010",
      desc:
        "Farmers markets, volunteer groups, and youth organizations help shape the city’s community-driven culture.",
    },
    {
      era: "PRESENT DAY",
      years: "2010–2025",
      desc:
        "Mutual aid, arts programs, and nonprofits strengthen support networks and make Coppell more connected than ever.",
    },
  ];

  return (
    <div className="page timeline">

      {/* HEADER */}
      <header className="page-head fade-in">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="kicker">Coppell through eras — growth, identity, community</p>
      </header>

      {/* WHY ERA SEPARATION */}
      <section className="slab fade-in-up">
        <div className="eyebrow">WHY ERA SEPARATION?</div>
        <h3 className="display">Understanding Coppell Through Time</h3>
        <p className="lead">
          We divided Coppell’s history into eras so visitors can clearly see how the
          city transformed from farmland to a thriving, community-focused town. Each
          era represents a major shift in culture, population, and the types of
          organizations that shaped daily life.
        </p>
      </section>

      {/* NEW SECTION — WHY THESE ERAS MATTER */}
      <section className="slab fade-in-up delay-1">
        <div className="eyebrow">WHY WE INCLUDED THESE ERAS</div>
        <h3 className="display">How These Eras Tell Coppell’s Story</h3>

        <p className="lead">
          These eras were chosen intentionally to help people understand
          the evolution of Coppell’s identity. Instead of listing dates, we highlight
          the moments where the community experienced real change. This approach makes
          the timeline feel more like a story than a history lesson.
        </p>

        <ul className="lead" style={{ marginTop: "1rem" }}>
          <li>
            <strong>Early Roots</strong> shows how Coppell began with agriculture,
            family-owned land, and the earliest signs of community gathering.
          </li>

          <li>
            <strong>Growth & Identity</strong> marks when Coppell expanded, built new
            neighborhoods, and defined its sense of belonging.
          </li>

          <li>
            <strong>Community Era</strong> highlights the rise of organizations,
            farmers markets, and volunteer groups that shaped modern culture.
          </li>

          <li>
            <strong>Present Day</strong> connects Coppell’s current nonprofits,
            youth-led programs, and mutual aid efforts to the foundation built over
            generations.
          </li>
        </ul>

        <p className="lead" style={{ marginTop: "1rem" }}>
          Separating Coppell’s history this way allows us to show how different parts
          of the community — food, arts, youth leadership, and mutual aid — emerged
          at different stages but work together today.
        </p>
      </section>

      {/* ERA CARDS */}
      <div className="timeline-grid">
        {eras.map((e, i) => (
          <div key={i} className={`timeline-card fade-in-up delay-${i + 2}`}>
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


