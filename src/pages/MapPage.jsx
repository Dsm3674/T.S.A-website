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
          Interactive map showing community resources across Coppell. 
          Click each pin to learn more about local organizations.
        </p>
      </header>

      <section className="map-grid">
        <div className="map-pane fade-in-up delay-1">
          <div className="map-bg" style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid var(--mag)',
            overflow: 'hidden'
          }}>
            {/* Decorative grid pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(var(--ink-dim) 1px, transparent 1px), linear-gradient(90deg, var(--ink-dim) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              opacity: 0.1,
              pointerEvents: 'none'
            }} />

            {/* Center text */}
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              zIndex: 1,
              maxWidth: '500px'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: 'var(--mag)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                fontWeight: '900'
              }}>
                COPPELL COMMUNITY MAP
              </h3>
              <p style={{
                color: 'var(--ink-dim)',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Click the pins on the right to explore different community organizations 
                and their locations throughout Coppell, Texas.
              </p>
            </div>

            {/* Interactive Pins */}
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                type="button"
                className={`map-pin ${
                  active.id === loc.id ? "map-pin-active" : ""
                }`}
                style={{ 
                  top: loc.top, 
                  left: loc.left,
                  position: 'absolute',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  zIndex: 10
                }}
                onClick={() => setActive(loc)}
                aria-label={`View ${loc.name}`}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: active.id === loc.id ? 'var(--cyan)' : 'var(--mag)',
                  border: '3px solid var(--bg)',
                  boxShadow: active.id === loc.id 
                    ? '0 0 20px var(--cyan), 0 0 40px var(--cyan)' 
                    : '0 0 15px var(--mag)',
                  transition: 'all 0.3s ease',
                  transform: active.id === loc.id ? 'scale(1.3)' : 'scale(1)'
                }} />
                <span style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '8px',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  color: active.id === loc.id ? 'var(--cyan)' : 'var(--ink)',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  background: 'rgba(10, 10, 10, 0.9)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: '1px solid ' + (active.id === loc.id ? 'var(--cyan)' : 'var(--mag)')
                }}>
                  {loc.short}
                </span>
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
          Each pin represents a real organization included in our
          community resource hub. This interactive map helps visualize
          the network of support services available throughout Coppell.
        </p>
      </section>
    </div>
  );
}
