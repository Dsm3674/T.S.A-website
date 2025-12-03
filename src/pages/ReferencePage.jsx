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
            community. Judges can follow the links to see the organizations
            outside of this TSA project.
          </p>
        </article>
      </section>
    </div>
  );
}
