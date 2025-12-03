import React, { useState } from "react";

export default function ArchivePage() {
  const [q, setQ] = useState("");

  const resources = [
    {
      name: "Coppell Farmers Market",
      type: "Food & Community",
      link: "https://coppellfarmersmarket.org/",
      img: "https://coppellfarmersmarket.org/wp-content/uploads/2023/03/IMG_6944-1536x1024.jpg",
      desc: "Local producers, community agriculture, and weekly family-friendly events."
    },
    {
      name: "NoteLove",
      type: "Youth Programs",
      link: "https://www.notelove.org/",
      img: "https://www.notelove.org/assets/nl-kids2.jpg", // working public asset
      desc: "Nonprofit providing free music lessons to students across DFW."
    },
    {
      name: "Coppell Library",
      type: "Education",
      link: "https://coppelltx.gov/library",
      img: "https://www.coppelltx.gov/ImageRepository/Document?documentID=4642",
      desc: "Programs, events, digital archives, and learning resources."
    },
    {
      name: "Metrocrest Services",
      type: "Community Support",
      link: "https://metrocrestservices.org/",
      img: "https://metrocrestservices.org/wp-content/uploads/2023/05/metrocrest-building.jpg",
      desc: "Food pantry, housing support, senior services, and assistance programs."
    }
  ];

  return (
    <div className="page archive">
      <header className="page-head">
        <h2 className="xxl skew">Coppell ARCHIVE</h2>
        <p className="kicker">Index — Search. Discover. Explore.</p>
      </header>

      <section className="archive-search slab">
        <h3 className="display sm">SEARCH RESOURCES</h3>

        <div className="better-search">
          <div className="better-search-inner">
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, category, or keyword…"
              className="better-search-input"
            />
            <button className="better-search-btn">SEARCH</button>
          </div>
        </div>

        <div className="search-hint">
          Try: <code>farmers market</code> <code>music</code> <code>support</code>
        </div>
      </section>

      {/* RESOURCE DIRECTORY */}
      <section className="archive-grid">
        {resources
          .filter((r) =>
            r.name.toLowerCase().includes(q.toLowerCase()) ||
            r.type.toLowerCase().includes(q.toLowerCase()) ||
            r.desc.toLowerCase().includes(q.toLowerCase())
          )
          .map((r, i) => (
            <a
              key={i}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`archive-card jag-${(i % 3) + 1}`}
            >
              <img src={r.img} alt={r.name} className="archive-img" />

              <div className="archive-title">{r.name}</div>
              <div className="kicker">{r.type}</div>

              <p className="lead" style={{ marginTop: "1rem" }}>
                {r.desc}
              </p>
            </a>
          ))}
      </section>

      {/* SPOTLIGHTS */}
      <section className="slab">
        <h3 className="display">Featured Community Resources</h3>
        <p className="lead">A curated spotlight on impactful community programs.</p>

        <div className="spotlight-grid">
          <div className="spotlight-card">
            <img
              src="https://coppellfarmersmarket.org/wp-content/uploads/2023/03/IMG_6944-1536x1024.jpg"
              className="spotlight-img"
            />
            <h4>Coppell Farmers Market</h4>
          </div>

          <div className="spotlight-card">
            <img
              src="https://www.notelove.org/assets/nl-kids2.jpg"
              className="spotlight-img"
            />
            <h4>NoteLove</h4>
          </div>

          <div className="spotlight-card">
            <img
              src="https://metrocrestservices.org/wp-content/uploads/2023/05/metrocrest-building.jpg"
              className="spotlight-img"
            />
            <h4>Metrocrest Services</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

