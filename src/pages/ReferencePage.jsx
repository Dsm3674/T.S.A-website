import React from "react";



  return (
    <div className="page reference">
      <header className="page-head">
        <h2 className="xxl skew">REFERENCE INDEX</h2>
        <p className="kicker">sources — citations — documentation</p>
      </header>

      <section className="reference-grid">
        {refs.map((r, i) => (
          <div key={i} className={`ref-card jag-${(i % 3) + 1}`}>
            <h3 className="display">{r.title}</h3>
            <p className="lead">{r.desc}</p>
            <a className="btn wire" href={r.link} target="_blank">
              OPEN →
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
