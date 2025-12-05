import React from "react";

export default function ReferencePage() {
  return (
    <div className="page reference">
      <header className="page-head slice-reveal">
        <h2 className="xxl skew">REFERENCE INDEX</h2>
        <p className="kicker">sources — citations — documentation</p>
      </header>

      {/* ===========================
          COMMUNITY RESOURCES
      ============================ */}
      <section className="reference-grid">
        <article className="slab block-pop">
          <div className="eyebrow">PRIMARY COMMUNITY RESOURCES</div>
          <h3 className="display">Organizations Featured in the Archive</h3>
          <p className="lead" style={{ marginBottom: "1.5rem" }}>
            These are real Coppell-area organizations that ground the
            fictionalized stories, map pins, and timeline beats in actual
            community work.
          </p>
          <ul>
            <li>
              <a
                href="https://coppellfarmersmarket.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coppell Farmers Market
              </a>{" "}
              — weekly farmers market showcasing local growers, producers,
              and small food businesses.
            </li>
            <li>
              <a
                href="https://www.notelove.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NoteLove
              </a>{" "}
              — youth-led nonprofit offering free music lessons across DFW.
            </li>
            <li>
              <a
                href="https://metrocrestservices.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Metrocrest Services
              </a>{" "}
              — regional safety-net nonprofit providing food, housing,
              financial coaching, and senior support.
            </li>
          </ul>
        </article>

        <article className="slab ghost block-pop">
          <div className="eyebrow">METHODOLOGY</div>
          <h3 className="display">How the Archive Uses These Resources</h3>
          <p className="lead">
            The site blends creative design with real Coppell organizations.
            Map pins, timeline eras, and stories reference{" "}
            <strong>Coppell Farmers Market</strong>,{" "}
            <strong>NoteLove</strong>, and <strong>Metrocrest Services</strong>{" "}
            to show how arts, food, and mutual aid intersect in daily life.
          </p>
          <p className="lead" style={{ marginTop: "1rem" }}>
            TSA judges can follow the links to understand the real-world
            impact behind the visual design and storytelling.
          </p>
        </article>
      </section>

      {/* ===========================
          TECHNOLOGY & IMPLEMENTATION
      ============================ */}
      <section className="slab block-pop" style={{ marginTop: "3rem" }}>
        <div className="eyebrow">TECHNOLOGY & IMPLEMENTATION</div>
        <h3 className="display">How This Archive Was Built</h3>

        <p className="lead">
          The Coppell Community Archive uses a modern web stack selected for
          speed, modularity, and creative expression—important for TSA
          competition criteria and the bold brutalist theme.
        </p>

        <ul className="reference-values" style={{ marginTop: "1rem" }}>
          <li>
            <strong>React</strong> — drives the modular structure. Each page
            (Map, Timeline, Stories, Archive) is a self-contained component,
            mirroring how an archive stores distinct pieces of community life.
          </li>

          <li>
            <strong>Vite</strong> — chosen for its extremely fast build tool,
            hot module reloading, and zero-config setup. The{" "}
            <code>vite.config.js</code> file also enables deployment to
            GitHub Pages for TSA submission.
          </li>

          <li>
            <strong>Lucide Icons</strong> — provides clean SVG icons used
            throughout the navigation and UI without increasing bundle size.
          </li>

          <li>
            <strong>Framer Motion</strong> — powers the chat window animation
            and subtle UI transitions, giving movement without losing the
            analog brutalist aesthetic.
          </li>

          <li>
            <strong>Custom CSS Animations</strong> — nearly all visual effects
            (glitch, floating cards, neon borders, map pulse, slice reveals)
            are handwritten keyframes. This demonstrates technical creativity
            rather than relying on animation libraries.
          </li>

          <li>
            <strong>Canvas Particle Animation</strong> — the homepage features
            a JavaScript-drawn particle field inspired by Maitsō-style art
            direction. It gives the landing page a living, breathing effect.
          </li>

          <li>
            <strong>Express.js Backend</strong> — serves the API endpoint for
            the chatbot and provides a clean separation of UI and processing.
          </li>

          <li>
            <strong>Google Gemini API</strong> — powers the Archive Bot,
            enabling real-time AI responses about Coppell, the website, and
            community resources.
          </li>
        </ul>

        <p className="lead" style={{ marginTop: "1rem" }}>
          Every tool—from React components to raw CSS keyframes—was chosen to
          reinforce the project’s theme: a handcrafted, loud, experimental
          brutalist archive rooted in real community impact.
        </p>
      </section>

      {/* ===========================
          CITY CONTEXT
      ============================ */}
      <section className="slab reveal" style={{ marginTop: "3rem" }}>
        <div className="eyebrow">ABOUT COPPELL</div>
        <h3 className="display">City Context</h3>
        <p className="lead">
          Coppell is a suburban city in the Dallas–Fort Worth area with a
          strong emphasis on education, parks, and neighborhood life. Many
          residents balance local routines with regional jobs, making
          community organizations especially important.
        </p>
        <p className="lead" style={{ marginTop: "1rem" }}>
          This archive does not attempt to document every detail of Coppell.
          It highlights the spaces where community, care, and creativity are
          most visible.
        </p>
      </section>

      {/* ===========================
          VALUES
      ============================ */}
      <section className="slab reveal">
        <div className="eyebrow">WHAT WE REPRESENT</div>
        <h3 className="display">Values Behind The Archive</h3>
        <ul className="reference-values">
          <li>Community: Centering neighbors instead of brands.</li>
          <li>Access: Highlighting free or low-cost resources.</li>
          <li>Youth Voice: Featuring student-driven leadership.</li>
          <li>Continuity: Preserving stories for future residents.</li>
        </ul>
      </section>
    </div>
  );
}


