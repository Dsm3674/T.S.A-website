import React, { useEffect, useRef, useState } from "react";

export default function TimelinePage() {
  const [selected, setSelected] = useState(null);
  const railRef = useRef(null);

  const eras = [
    {
      id: 1,
      year: "1840s",
      title: "FOUNDATION",
      desc: "Roots planted",
      detail:
        "Early neighborhoods take shape in Coppell, schools open, and small businesses start to define the edges of community life.",
    },
    {
      id: 2,
      year: "1980s",
      title: "GROWTH",
      desc: "Expansion",
      detail:
        "Population in Coppell begins accelerates, main corridors fill in, and civic groups stabilize around shared traditions.",
    },
    {
      id: 3,
      year: "2010s",
      title: "PARTNERSHIP",
      desc: "Alliances",
      detail:
        "Major nonprofits and local businesses start to popup and connect to support families through disaters such as Covid and the huge snowstorm.",
    },
    {
      id: 4,
      year: "2020s",
      title: "DIGITAL NOW",
      desc: "Modern shift",
      detail:
        "Community storytelling meets digital tools, from online mutual aid posts to interactive maps like this one.",
    },
    {
      id: 5,
      year: "FUTURE",
      title: "ARCHIVE",
      desc: "Preservation",
      detail:
        "Community voices are preserved in living archives, keeping Coppell’s stories—and groups like Neighbors In Need, accessible for future generations.",
    },
  ];

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // horizontal scroll on desktop, but keep it smooth for mobile
      if (window.innerWidth >= 768) {
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const activeEra = selected ? eras.find((x) => x.id === selected) : null;

  return (
    <div className="page timeline">
      <header className="page-head">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="kicker">Scroll horizontally — click to expand</p>
      </header>

      <div className="timeline-container">
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
      </div>

      {selected && (
        <section className="era-detail slab">
          <div className="eyebrow">SELECTED ERA</div>
          <h3 className="display">{activeEra?.title}</h3>
          <p className="lead">{activeEra?.detail}</p>

          <div className="detail-grid">
            <div className="detail-card">
              <h4>Artifacts</h4>
              <ul>
                <li>Posters, zines, meeting notes</li>
                <li>Local business flyers and menus</li>
                <li>Event wristbands and badges</li>
              </ul>
            </div>
            <div className="detail-card">
              <h4>Signals</h4>
              <ul>
                <li>Foot traffic at the farmers market</li>
                <li>Volunteer hours logged with Metrocrest</li>
                <li>Music lessons delivered through NoteLove</li>
                <li>Mutual aid runs organized by Neighbors In Need</li>
              </ul>
            </div>
            <div className="detail-card">
              <h4>Quotes</h4>
              <blockquote>“We didn’t plan a brand. We made a place.”</blockquote>
            </div>
            <div className="detail-card">
              <h4>Community Resources</h4>
              <ul>
                <li>
                  <a
                    href="https://coppellfarmersmarket.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coppell Farmers Market
                  </a>{" "}
                  — weekend marketplace for local growers and makers.
                </li>
                <li>
                  <a
                    href="https://www.notelove.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NoteLove
                  </a>{" "}
                  — free music lessons and youth arts leadership.
                </li>
                <li>
                  <a
                    href="https://metrocrestservices.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Metrocrest Services
                  </a>{" "}
                  — regional nonprofit providing food, housing, and senior
                  support.
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/neighbors_in_need_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Neighbors In Need
                  </a>{" "}
                  — neighbors-helping-neighbors network supporting local families.
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}



