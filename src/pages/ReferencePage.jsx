import React from "react";

export default function ReferencePage() {
  return (
    <div className="page reference">
      <header className="page-head">
        <h2 className="xxl skew">REFERENCE INDEX</h2>
        <p className="kicker">sources — citations — documentation</p>
      </header>

      <section className="reference-grid">
        <article className="slab">
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
              — weekly farmers market showcasing local growers, producers, and
              small food businesses.
            </li>
            <li>
              <a
                href="https://www.notelove.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NoteLove
              </a>{" "}
              — youth-led nonprofit that offers free music lessons to students
              across DFW, including Coppell.
            </li>
            <li>
              <a
                href="https://metrocrestservices.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Metrocrest Services
              </a>{" "}
              — regional nonprofit providing food, housing support, financial
              coaching, and senior services.
            </li>
          </ul>
        </article>

        <article className="slab ghost">
          <div className="eyebrow">METHODOLOGY</div>
          <h3 className="display">How the Archive Uses These Resources</h3>
          <p className="lead">
            The site blends speculative design with real resources. Map pins,
            stories, and timeline eras reference{" "}
            <strong>Coppell Farmers Market</strong>,{" "}
            <strong>NoteLove</strong>, and <strong>Metrocrest Services</strong>{" "}
            to show how arts, food, and mutual aid intersect in a single
            community.
          </p>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Judges can follow the links to see the organizations outside of this
            TSA project and understand the real-world impact behind the visual
            design.
          </p>
        </article>
      </section>

      <section className="slab" style={{ marginTop: "3rem" }}>
        <div className="eyebrow">ABOUT COPPELL</div>
        <h3 className="display">City Context</h3>
        <p className="lead">
          Coppell is a suburban city in the Dallas–Fort Worth area with a strong
          emphasis on schools, parks, and neighborhood life. Many residents
          balance local routines with regional jobs, making community spaces
          like markets, libraries, and arts programs especially important.
        </p>
        <p className="lead" style={{ marginTop: "1rem" }}>
          This archive does not attempt to document every detail of Coppell. It
          focuses on the parts of the city where community, care, and creativity
          are most visible.
        </p>
      </section>

      <section className="slab">
        <div className="eyebrow">WHAT WE REPRESENT</div>
        <h3 className="display">Values Behind The Archive</h3>
        <ul className="reference-values">
          <li>
            Community: Centering neighbors, not just buildings or brands.
          </li>
          <li>
            Access: Highlighting free or low-cost resources that support
            families.
          </li>
          <li>
            Youth Voice: Recognizing the role young people play in shaping
            Coppell’s future.
          </li>
          <li>
            Continuity: Keeping stories alive so new residents can see where
            they fit in.
          </li>
        </ul>
      </section>
    </div>
  );
}

