import React, { useState } from "react";

export default function ArchivePage() {
  const [q, setQ] = useState("");

  const collections = [
    { title: "ORAL HISTORIES", count: "50+" },
    { title: "PHOTOGRAPHS", count: "200+" },
    { title: "DOCUMENTS", count: "100+" },
    { title: "INTERVIEWS", count: "30+" },
  ];

  return (
    <div className="page archive">
      <header className="page-head">
        <h2 className="xxl skew">Coppell ARCHIVE</h2>
        <p className="kicker">Index — Search. Discover. Explore.</p>
      </header>

      <section className="archive-grid">
        {collections.map((c, i) => (
          <div key={i} className={`archive-card jag-${(i % 3) + 1}`}>
            <div className="archive-count">{c.count}</div>
            <div className="archive-title">{c.title}</div>
          </div>
        ))}
      </section>

      <section className="archive-search slab">
        <h3 className="display sm">SEARCH ARCHIVE</h3>

        <div className="better-search">
          <div className="better-search-inner">
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by keyword, year, person, place…"
              className="better-search-input"
            />
            <button className="better-search-btn">SEARCH</button>
          </div>
        </div>

        <div className="search-hint">
          Try: <code>murals</code> <code>town center</code> <code>1995</code>
        </div>
      </section>
    </div>
  );
}
