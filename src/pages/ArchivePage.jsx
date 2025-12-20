import React, { useState } from "react";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

// Images
import farmersImg from "../assets/coppell-farmers-market.jpg";
import noteloveImg from "../assets/notelove.jpg";
import metrocrestImg from "../assets/metrocrest.jpg";
import neighborsImg from "../assets/neighbors-in-need.jpg";

export default function ArchivePage() {
  const [submitted, setSubmitted] = useState(false);
  const [query, setQuery] = useState("");

  const resources = [
    {
      title: "Coppell Farmers Market",
      link: "https://coppellfarmersmarket.org/",
      img: farmersImg,
      desc:
        "Weekly gathering for local food, fresh produce, and community connection.",
    },
    {
      title: "NoteLove",
      link: "https://www.notelove.org/",
      img: noteloveImg,
      desc:
        "Youth-led nonprofit offering free music lessons to students across the city.",
    },
    {
      title: "Metrocrest Services",
      link: "https://metrocrestservices.org/",
      img: metrocrestImg,
      desc:
        "A regional hub for food security, housing support, and emergency aid.",
    },
    {
      title: "Neighbors In Need",
      link: "https://www.instagram.com/neighbors_in_need_/",
      img: neighborsImg,
      desc:
        "Grassroots support network offering mutual aid, groceries, rides, and care.",
    },
  ];

  const filtered = resources.filter((r) => {
    const q = query.toLowerCase();
    return (
      r.title.toLowerCase().includes(q) ||
      r.desc.toLowerCase().includes(q)
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 400);
  };

  return (
    <div className="page archive-page">
      {/* HEADER */}
      <header className="page-head fade-in">
        <h2 className="xxl skew">ARCHIVE</h2>
        <p className="kicker">Submit & Explore</p>
      </header>

      {/* WHY ARCHIVE */}
      <div className="slab reveal fade-in-up" style={{ marginBottom: "3rem" }}>
        <h2 className="display">Why Our Community Archive Matters</h2>
        <p className="lead" style={{ marginTop: "1rem" }}>
          The Coppell Community Archive preserves the organizations, people,
          and stories that shape everyday life. It documents how food access,
          youth mentorship, mutual aid, and local culture connect neighbors.
        </p>
      </div>

      {/* SEARCH */}
      <section className="archive-search-section fade-in-up">
        <input
          type="text"
          className="archive-search-input"
          placeholder="Search resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      {/* GRID */}
      <section>
        <div className="archive-grid">
          {filtered.map((r, i) => (
            <div
              key={i}
              className={`archive-card-uniform fade-in-up delay-${i + 1}`}
            >
              <div className="archive-thumb-box">
                <img
                  src={r.img}
                  alt={r.title}
                  className="archive-thumb-img"
                />
              </div>

              <div className="archive-content">
                <h3
                  style={{
                    fontSize: "1.4rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {r.title}
                </h3>

                <p style={{ marginBottom: "1.5rem", opacity: 0.85 }}>
                  {r.desc}
                </p>

                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn wire"
                >
                  View Resource
                </a>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="no-results fade-in">
              No matching resources found.
            </p>
          )}
        </div>
      </section>

      {/* SUBMIT */}
      <section className="slab fade-in-up delay-2" style={{ marginTop: "4rem" }}>
        <h3 className="display">Submit a New Resource</h3>

        {submitted ? (
          <div className="success-msg fade-in">
            <CheckCircle size={64} color="var(--mag)" />
            <h3 style={{ marginTop: "1rem" }}>THANK YOU</h3>
            <p>Your submission has been received for review.</p>
            <button
              className="btn wire"
              style={{ marginTop: "1.5rem" }}
              onClick={() => setSubmitted(false)}
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form className="archive-form" onSubmit={handleSubmit}>
            <p className="lead">
              Know of a community group that belongs here?
            </p>

            <div className="form-field">
              <label>Resource Name</label>
              <input type="text" required />
            </div>

            <div className="form-field">
              <label>Description</label>
              <textarea required />
            </div>

            <div className="form-field">
              <label>Link (Optional)</label>
              <input type="url" placeholder="https://" />
            </div>

            <button type="submit" className="btn slab">
              Submit Resource
            </button>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}

