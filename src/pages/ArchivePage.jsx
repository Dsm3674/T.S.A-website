import React, { useState } from "react";

export default function ArchivePage() {
  const [q, setQ] = useState("");

  const resources = [
    {
      name: "Coppell Farmers Market",
      type: "Food & Community",
      link: "https://coppellfarmersmarket.org/",
      img: "https://images.squarespace-cdn.com/content/v1/5bffb9a0f4e5314b65fbc74a/1554321843575-HF1ZNQXQ2FHLVQ3N4FM8/IMG_6953.jpg",
      desc: "Local producers, community agriculture, and weekly family-friendly events.",
    },
    {
      name: "NoteLove",
      type: "Youth Programs",
      link: "https://www.notelove.org/",
      img: "https://raw.githubusercontent.com/notelove/notelove-org/main/src/images/home1.jpg",
      desc: "Nonprofit providing free music lessons to students across DFW.",
    },
    {
      name: "Metrocrest Services",
      type: "Community Support",
      link: "https://metrocrestservices.org/",
      img: "https://media.licdn.com/dms/image/C4E1BAQEoT6YGtSNY-w/company-background_10000/0/1630616805084/metrocrestservices_cover?e=2147483647&v=beta&t=3YGx6eaM75skU9iXvBhL9QV5y4UIzrR6Qz5L_qpJkZ0",
      desc: "Food pantry, housing support, senior assistance, and community uplift programs.",
    },
  ];

  return (
    <div className="page archive">
      <header className="page-head">
        <h2 className="xxl skew">Coppell ARCHIVE</h2>
        <p className="kicker">Index — Search. Discover. Explore.</p>
      </header>

      {/* SEARCH BAR */}
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
          .filter(
            (r) =>
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
              src="https://images.squarespace-cdn.com/content/v1/5bffb9a0f4e5314b65fbc74a/1554321843575-HF1ZNQXQ2FHLVQ3N4FM8/IMG_6953.jpg"
              className="spotlight-img"
            />
            <h4>Coppell Farmers Market</h4>
          </div>

          <div className="spotlight-card">
            <img
              src="https://raw.githubusercontent.com/notelove/notelove-org/main/src/images/home1.jpg"
              className="spotlight-img"
            />
            <h4>NoteLove</h4>
          </div>

          <div className="spotlight-card">
            <img
              src="https://media.licdn.com/dms/image/C4E1BAQEoT6YGtSNY-w/company-background_10000/0/1630616805084/metrocrestservices_cover?e=2147483647&v=beta&t=3YGx6eaM75skU9iXvBhL9QV5y4UIzrR6Qz5L_qpJkZ0"
              className="spotlight-img"
            />
            <h4>Metrocrest Services</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

