// FILE 4: src/pages/MapPage.jsx
// REPLACE YOUR ENTIRE MapPage.jsx WITH THIS:

import React, { useState, useEffect } from "react";

const LOCATIONS = [
  {
    id: "metrocrest",
    short: "Metrocrest",
    name: "Metrocrest Services Hub",
    description:
      "A regional hub for food security, housing support, emergency aid, and senior programs serving Coppell-area families.",
    focus: "Food, housing, emergency assistance, seniors",
    role: "Anchor nonprofit for basic needs and wraparound services.",
    link: "https://www.metrocrestservices.org/",
    top: "72%",
    left: "40%",
  },
  {
    id: "notelove",
    short: "NoteLove",
    name: "NoteLove Coppell",
    description:
      "Youth-led nonprofit that offers free music lessons and performances, helping students turn creativity into service.",
    focus: "Arts, youth leadership, free music education",
    role: "Shows how student-led projects can amplify community culture.",
    link: "https://notelove.org/",
    top: "50%",
    left: "30%",
  },
  {
    id: "coppell-farmers",
    short: "Farmers Mkt",
    name: "Coppell Farmers Market",
    description:
      "Weekly market where local growers, bakers, and small food vendors connect directly with Coppell residents.",
    focus: "Local food, small business, weekly gathering space",
    role: "Every-Saturday hub that keeps neighborhood life visible and local.",
    link: "https://coppellfarmersmarket.org/",
    top: "40%",
    left: "42%",
  },
  {
    id: "neighbors",
    short: "Neighbors",
    name: "Neighbors In Need",
    description:
      "Mutual-aid style network coordinating support for local families when unexpected needs or crises appear.",
    focus: "Mutual aid, emergency support, neighbor-to-neighbor help",
    role: "Illustrates informal support systems that exist between formal nonprofits.",
    link: "",
    top: "60%",
    left: "55%",
  },
  {
    id: "sri-temple",
    short: "Sri Temple",
    name: "Sri Guruvayurappan Temple Dallas",
    description:
      "A regional temple and cultural center where families gather for worship, festivals, and community events.",
    focus: "Faith community, festivals, cultural programming",
    role: "Highlights how cultural and faith spaces also serve as support networks.",
    link: "https://www.srigttemple.org/",
    top: "58%",
    left: "70%",
  },
];

export default function MapPage() {
  const [active, setActive] = useState(LOCATIONS[0]);

  useEffect(() => {
    const selector = ".fade-in, .fade-in-up, .reveal";
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page map-page">
      <header className="page-head fade-in-up">
        <span className="kicker">community geography</span>
        <h2 className="xxl skew">MAP OF COPPELL RESOURCES</h2>
        <p className="lead">
          This stylized map uses the real outline of Coppell. Each pin marks a
          community resource that appears in our stories, archive, and mission
          pages.
        </p>
      </header>

      <section className="map-grid">
        <div className="map-pane fade-in-up delay-1">
          <div className="map-bg">
            <img
              src="/coppell-map.svg"
              alt="Stylized outline map of Coppell, Texas"
              className="map-img coppell-map-img"
            />

            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                type="button"
                className={`map-pin ${
                  active.id === loc.id ? "map-pin-active" : ""
                }`}
                style={{ top: loc.top, left: loc.left }}
                onClick={() => setActive(loc)}
                aria-label={`View ${loc.name}`}
              >
                <span className="map-pin-dot" />
                <span className="map-pin-label">{loc.short}</span>
              </button>
            ))}
          </div>
        </div>

        <aside className="map-side">
          <article className="slab map-card fade-in-up delay-2">
            <span className="kicker">location</span>
            <h3 className="display">{active.name}</h3>
            <p className="lead">{active.description}</p>

            <ul className="map-meta">
              <li>
                <strong>Focus:</strong> {active.focus}
              </li>
              <li>
                <strong>Role in archive:</strong> {active.role}
              </li>
            </ul>

            {active.link && (
              <a
                href={active.link}
                className="btn wire"
                target="_blank"
                rel="noreferrer"
              >
                Visit site →
              </a>
            )}

            <p className="map-footnote">
              Tap different pins to see how nonprofits, markets, and mutual-aid
              networks overlap across Coppell.
            </p>
          </article>
        </aside>
      </section>

      <section className="map-legend fade-in-up delay-3">
        <h4 className="eyebrow">legend</h4>
        <p>
          Each neon pin represents a real organization included in our
          community resource hub. The dark background echoes night-mode
          navigation maps, while the outline comes from the official future land
          use map of Coppell.
        </p>
      </section>
    </div>
  );
}

