import React, { useState } from "react";
import metrocrestImg from "../assets/metrocrest.jpg";
import noteloveImg from "../assets/notelove.jpg";
import farmersImg from "../assets/coppell-farmers-market.jpg";
import neighborsInNeedImg from "../assets/neighbors-in-need.jpg";
import Footer from "../components/Footer";

export default function ArchivePage() {
  const [q, setQ] = useState("");

  const resources = [
    {
      name: "Coppell Farmers Market",
      type: "Food & Community",
      link: "https://coppellfarmersmarket.org/",
      img: farmersImg,
      desc: "Local producers, community agriculture, and weekly family-friendly events.",
      tags: ["food", "market", "local"],
    },
    {
      name: "NoteLove",
      type: "Youth Programs",
      link: "https://www.notelove.org/",
      img: noteloveImg,
      desc: "Nonprofit providing free music lessons to students across DFW.",
      tags: ["music", "students", "arts"],
    },
    {
      name: "Metrocrest Services",
      type: "Community Support",
      link: "https://metrocrestservices.org/",
      img: metrocrestImg,
      desc: "Food pantry, housing support, senior assistance, and community uplift programs.",
      tags: ["support", "services", "aid"],
    },
    {
      name: "Neighbors In Need",
      type: "Mutual Aid & Support",
      link: "https://www.instagram.com/neighbors_in_need_/",
      img: neighborsInNeedImg,
      desc: "Neighbors coordinating rides, meals, and essentials so families have support during tough weeks.",
      tags: ["mutual aid", "neighbors", "support"],
    },
  ];

  const filtered = resources.filter((r) => {
    const needle = q.toLowerCase();
    return (
      r.name.toLowerCase().includes(needle) ||
      r.type.toLowerCase().includes(needle) ||
      r.desc.toLowerCase().includes(needle) ||
      r.tags.some((t) => t.toLowerCase().includes(needle))
    );
  });

  return (
    <>
      <div className="page archive page-enter page-enter-active">

        <header className="page-head reveal">
          <h2 className="xxl skew">COPPELL ARCHIVE</h2>
          <p className="kicker">Index — Search. Discover. Explore.</p>
        </header>

        <section className="archive-search slab reveal delay-1">
          <h3 className="display sm">SEARCH RESOURCES</h3>

          <div className="better-search">
            <div className="better-search-inner">
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, category, or keyword…"
                className="better-search-input"
              />
              <button className="better-search-btn">SEARCH</button>
            </div>
          </div>

          <div className="search-hint">
            Try: <code>farmers market</code>{" "}
            <code>music</code>{" "}
            <code>support</code>{" "}
            <code>mutual aid</code>
          </div>
        </section>

        <section className="archive-grid">
          {filtered.map((r, i) => (
            <a
              key={i}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`archive-card jag-${(i % 3) + 1} reveal delay-${(i % 4) + 1}`}
            >
              <img src={r.img} alt={r.name} className="archive-img" />
              <div className="archive-title">{r.name}</div>
              <div className="kicker">{r.type}</div>
              <p className="lead" style={{ marginTop: "1rem" }}>
                {r.desc}
              </p>
              <div className="archive-tags">
                {r.tags.map((tag) => (
                  <span key={tag} className="archive-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </section>

        <section className="slab reveal delay-1">
          <h3 className="display">How To Use This Index</h3>
          <p className="lead">
            The archive is a jumping-off point...
          </p>
        </section>

        <section className="slab reveal delay-2">
          <div className="eyebrow">COMMUNITY THEMES</div>
          <h3 className="display">What These Resources Represent</h3>
          <p className="lead">
            Food access, youth arts, mutual aid...
          </p>
        </section>

        <section className="slab block-pop reveal delay-3">
          <div className="eyebrow">Submit a Resource</div>
          <h3 className="display">Add to the Community Archive</h3>

          <form
            className="archive-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your resource has been submitted for review.");
            }}
          >
            {/* form fields... */}
            <button className="btn slab" type="submit">
              SUBMIT RESOURCE
            </button>
          </form>
        </section>

      </div>

      <Footer />  {/* FIXED position */}
    </>
  );
}




