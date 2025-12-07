import React from "react";
import Footer from "../components/Footer";


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
          <p className="lead" style={{ marginBottom: "1.25rem" }}>
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

            <li>
              <a
                href="https://www.instagram.com/neighbors_in_need_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neighbors In Need
              </a>{" "}
              — neighbors-helping-neighbors mutual aid effort coordinating
              rides, meals, and essentials for local families.
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
            <strong>NoteLove</strong>, <strong>Metrocrest Services</strong>, and{" "}
            <strong>Neighbors In Need</strong> to show how arts, food, mutual
            aid, and support intersect in daily life.
          </p>

          <p className="lead" style={{ marginTop: "0.75rem" }}>
            TSA judges can follow the links to understand the real-world
            impact behind the visual design and storytelling.
          </p>
        </article>
      </section>

      {/* ===========================
          TECHNOLOGY & IMPLEMENTATION
      ============================ */}
      <section className="slab block-pop">
        <div className="eyebrow">TECH STACK</div>
        <h3 className="display">How This Archive Was Built</h3>

        <p className="lead">
          The project uses React (Vite), modern CSS animations, and custom
          components to create a brutalist, poster-like interface. Every page is
          intentionally layered to feel like a community bulletin board brought
          to life.
        </p>

        <ul style={{ marginTop: "1rem" }}>
          <li>React components for modular storytelling</li>
          <li>Canvas-based hero animation for movement and atmosphere</li>
          <li>SVG noir-grid map with interactive pins</li>
          <li>Responsive design for mobile + TSA judging screens</li>
        </ul>
      </section>

      {/* ===========================
          CITATIONS
      ============================ */}
      <section className="slab block-pop">
        <div className="eyebrow">CITATIONS & SOURCES</div>
        <h3 className="display">References Used in Research</h3>

        <ul>
          <li>City of Coppell official website (public programs + events)</li>
          <li>Metrocrest Services — community support descriptions</li>
          <li>NoteLove — youth-led music nonprofit information</li>
          <li>Coppell Farmers Market — local agriculture + vendor info</li>
          <li>Neighbors In Need — mutual aid resources and community narratives</li>
        </ul>
      </section>
      <Footer />

    </div>
  );
}



