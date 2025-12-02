import React, { useEffect, useRef, useState } from "react";

export default function TimelinePage() {
  const [selected, setSelected] = useState(null);
  const railRef = useRef(null);

  const eras = [
    {
      id: 1,
      year: "2025",
      title: "FOUNDATION",
      desc: "Roots planted",
      detail:
        "Volunteer circles form, first local businesses anchor the district.",
    },
    {
      id: 2,
      year: "2025",
      title: "GROWTH",
      desc: "Expansion",
      detail:
        "Population accelerates, main street emerges, civic groups stabilize.",
    },
    {
      id: 3,
      year: "2025",
      title: "PARTNERSHIP",
      desc: "Alliances",
      detail:
        "Nonprofits and small businesses link arms for shared impact projects.",
    },
    {
      id: 4,
      year: "2025",
      title: "DIGITAL NOW",
      desc: "Modern shift",
      detail:
        "Cultural initiatives meet open data; community dashboards launched.",
    },
    {
      id: 5,
      year: "2025",
      title: "ARCHIVE",
      desc: "Preservation",
      detail:
        "Community voices preserved in a living, interactive brutalist index.",
    },
  ];

  useEffect(() => {
    const el = railRef.current;
    const onWheel = (e) => {
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="page timeline">
      <header className="page-head">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="kicker">Scroll horizontally — click to expand</p>
      </header>

      <div className="rail" ref={railRef}>
        <div className="rail-inner">
          {eras.map((e) => (
            <button
              key={e.id}
              className={`era-card ${selected === e.id ? "active" : ""}`}
              onClick={() => setSelected(e.id)}
            >
              <div className="era-year">{e.year}</div>
              <div className="era-title">{e.title}</div>
              <div className="era-desc">{e.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <section className="era-detail slab">
          <div className="eyebrow">SELECTED ERA</div>
          <h3 className="display">
            {eras.find((x) => x.id === selected)?.title}
          </h3>
          <p className="lead">{eras.find((x) => x.id === selected)?.detail}</p>

          <div className="detail-grid">
            <div className="detail-card">
              <h4>Artifacts</h4>
              <ul>
                <li>Posters, zines, meeting notes</li>
                <li>Local business flyers</li>
                <li>Community event wristbands</li>
              </ul>
            </div>
            <div className="detail-card">
              <h4>Signals</h4>
              <ul>
                <li>Foot traffic heatlines</li>
                <li>Volunteer hour spikes</li>
                <li>Story submissions per month</li>
              </ul>
            </div>
            <div className="detail-card">
              <h4>Quotes</h4>
              <blockquote>“We didn’t plan a brand. We made a place.”</blockquote>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
