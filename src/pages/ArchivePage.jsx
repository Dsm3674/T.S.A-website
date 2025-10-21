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
        <h2 className="xxl skew"> Coppell ARCHIVE</h2>
        <p className="kicker">The index — search and browse</p>
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
        <div className="search-row">
          <input
            type="text"
            className="search-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="keyword, year, location…"
          />
          <button className="btn slab">SEARCH</button>
        </div>
        <div className="search-hint">
          Try: <code>1995</code>, <code>murals</code>, <code>market</code>
        </div>
      </section>
    </div>
  );
}
