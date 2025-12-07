import React, { useState } from "react";
import Footer from "../components/Footer";

export default function ArchivePage() {
  const resources = [
    {
      title: "Coppell Farmers Market",
      desc: "Local growers, artisans, and weekly community gathering.",
      link: "https://coppellfarmersmarket.org/",
    },
    {
      title: "NoteLove",
      desc: "Free youth-led music lessons for local students.",
      link: "https://www.notelove.org/",
    },
    {
      title: "Metrocrest Services",
      desc: "Food support, rent assistance, and community programs.",
      link: "https://metrocrestservices.org/",
    },
  ];

  const [q, setQ] = useState("");

  return (
    <div className="page archive fade-in">
      <header className="page-head fade-in-up">
        <h2 className="xxl skew">COMMUNITY ARCHIVE</h2>
        <p className="kicker">resources — organizations — programs</p>
      </header>

      {/* Search Bar */}
      <div className="archive-search fade-in-up delay-1">
        <div className="better-search">
          <div className="better-search-inner">
            <input
              className="better-search-input"
              placeholder="Search resources…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button className="better-search-btn">Search</button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="archive-grid">
        {resources.map((r, i) => (
          <div
            key={i}
            className={`archive-card fade-in-up delay-${i + 2}`}
            onClick={() => window.open(r.link, "_blank")}
          >
            <h3 className="archive-title">{r.title}</h3>
            <p className="lead">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <section className="slab fade-in-up delay-4">
        <h3 className="display">Submit a New Resource</h3>

        <form className="archive-form">
          <div className="form-field">
            <label>Resource Name</label>
            <input type="text" placeholder="Example: Youth Arts Program" />
          </div>

          <div className="form-field">
            <label>Description</label>
            <textarea placeholder="Describe what this resource offers…" />
          </div>

          <div className="form-field">
            <label>Link (Optional)</label>
            <input type="text" placeholder="https://example.org" />
          </div>

          <button type="submit" className="btn slab">
            Submit Resource
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}




