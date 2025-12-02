import React from "react";

export default function ReferencePage() {
  const refs = [
    {
      title: "Coppell Historical Society",
      link: "https://coppellhistory.com",
      desc: "Primary source information on early settlers, landmarks, and oral histories."
    },
    {
      title: "Coppell GIS / Public Maps",
      link: "https://www.coppelltx.gov",
      desc: "Open geographic datasets used to construct the noir-style map grid."
    },
    {
      title: "Community Archive Dataset",
      link: "#",
      desc: "Dataset powering timeline eras, stories, and map locations."
    },
    {
      title: "TSA 2025 Documentation",
      link: "#",
      desc: "Architecture, design system, and AI bot documentation for judging."
    }
  ];

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
