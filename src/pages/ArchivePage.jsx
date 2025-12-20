import React, { useState } from "react";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";
import { CheckCircle, Search } from "lucide-react";


import farmersImg from "../assets/coppell-farmers-market.jpg";
import noteloveImg from "../assets/notelove.jpg";
import metrocrestImg from "../assets/metrocrest.jpg";
import neighborsImg from "../assets/neighbors-in-need.jpg";

export default function ArchivePage() {
  useReveal();

  const [submitted, setSubmitted] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Food", "Arts", "Social Services", "Mutual Aid"];

  const resources = [
    {
      title: "Coppell Farmers Market",
      link: "https://coppellfarmersmarket.org/",
      img: farmersImg,
      category: "Food",
      desc: "Providing fresh, local produce and a weekly gathering space."
    },
    {
      title: "NoteLove",
      link: "https://www.notelove.org/",
      img: noteloveImg,
      category: "Arts",
      desc: "Free music lessons ensuring creative access for all students."
    },
    {
      title: "Metrocrest Services",
      link: "https://metrocrestservices.org/",
      img: metrocrestImg,
      category: "Social Services",
      desc: "Food pantry, housing assistance, and crisis support."
    },
    {
      title: "Neighbors In Need",
      link: "https://www.instagram.com/neighbors_in_need_/",
      img: neighborsImg,
      category: "Mutual Aid",
      desc: "Grassroots mutual aid providing rides and groceries."
    }
  ];

  const filtered = resources.filter(r => {
    const q = query.toLowerCase();
    return (
      (r.title.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q)) &&
      (activeCategory === "All" || r.category === activeCategory)
    );
  });

  return (
    <div className="page archive-page">
      <header className="page-head reveal">
        <h2 className="xxl skew">ARCHIVE</h2>
        <p className="kicker">Community Records</p>
      </header>

      {/* SEARCH / FILTER */}
      <section className="reveal fade-in-up">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          <div style={{ position: "relative" }}>
            <Search
              size={18}
              style={{
                position: "absolute",
                top: "14px",
                left: "12px",
                opacity: 0.6
              }}
            />
            <input
              style={{ paddingLeft: "38px" }}
              placeholder="Search the archive..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>

          {/* MOBILE-SAFE CATEGORY BAR */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              overflowX: "auto",
              paddingBottom: "0.25rem"
            }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="btn wire"
                style={{
                  whiteSpace: "nowrap",
                  background:
                    activeCategory === cat ? "var(--mag)" : "transparent",
                  color:
                    activeCategory === cat
                      ? "var(--bg)"
                      : "var(--ink)"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIVE GRID */}
      <section>
        <div className="archive-grid">
          {filtered.map((r, i) => (
            <article
              key={i}
              className="archive-card-uniform reveal fade-in-up"
            >
              <div className="archive-thumb-box">
                <img
                  src={r.img}
                  alt={r.title}
                  className="archive-thumb-img"
                  loading="lazy"
                />
              </div>

              <div className="archive-content">
                <h3>{r.title}</h3>
                <p className="lead">{r.desc}</p>

                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn slab"
                >
                  View Resource →
                </a>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="slab reveal">
            <p>No matching records found.</p>
          </div>
        )}
      </section>

      {/* SUBMISSION */}
      <section className="slab reveal fade-in-up">
        <h3 className="display">Submit a Resource</h3>

        {submitted ? (
          <div className="success-msg">
            <CheckCircle size={56} />
            <p className="lead">Submission received.</p>
            <button
              className="btn slab"
              onClick={() => setSubmitted(false)}
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form
            className="archive-form"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input required placeholder="Organization name" />
            <textarea required placeholder="Description" />
            <input type="url" placeholder="Website (optional)" />
            <button type="submit" className="btn slab">
              Submit
            </button>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}

