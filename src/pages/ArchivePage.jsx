import React, { useState } from "react";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

// Import Images
import farmersImg from "../assets/coppell-farmers-market.jpg";
import noteloveImg from "../assets/notelove.jpg";
import metrocrestImg from "../assets/metrocrest.jpg";
import neighborsImg from "../assets/neighbors-in-need.jpg";

export default function ArchivePage() {
  const [submitted, setSubmitted] = useState(false);
  const [query, setQuery] = useState(""); // ✅ NEW

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 400);
  };

  const resources = [
    {
      title: "Coppell Farmers Market",
      link: "https://coppellfarmersmarket.org/",
      img: farmersImg,
      desc: "Weekly gathering for local food, fresh produce, and community connection.",
    },
    {
      title: "NoteLove",
      link: "https://www.notelove.org/",
      img: noteloveImg,
      desc: "Youth-led nonprofit offering free music lessons to students across the city.",
    },
    {
      title: "Metrocrest Services",
      link: "https://metrocrestservices.org/",
      img: metrocrestImg,
      desc: "A regional hub for food security, housing support, and emergency aid.",
    },
    {
      title: "Neighbors In Need",
      link: "https://www.instagram.com/neighbors_in_need_/",
      img: neighborsImg,
      desc: "Grassroots support network offering mutual aid, groceries, rides, and care.",
    },
  ];

  // FILTERED RESULTS
  const filtered = resources.filter((r) => {
    const q = query.toLowerCase();
    return (
      r.title.toLowerCase().includes(q) ||
      r.desc.toLowerCase().includes(q)
    );
  });

  return (
    <div className="page archive">
      {/* ======= CSS INSIDE COMPONENT ======= */}
      <style>{`
        /* SEARCH SECTION */
        .archive-search-section {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 2.5rem;
        }

        .archive-search-input {
          width: 60%;
          max-width: 680px;
          padding: 0.9rem 1.2rem;
          background: var(--panel);
          border: var(--border-width) solid var(--ink);
          outline: none;
          font-size: 1.1rem;
          color: var(--ink);
          box-shadow: 6px 6px 0 var(--shadow);
          transition: var(--transition-speed);
          letter-spacing: 0.5px;
        }

        .archive-search-input:focus {
          border-color: var(--mag);
          box-shadow: 8px 8px 0 var(--mag);
          transform: translate(-2px, -2px);
        }

        .archive-search-input:hover {
          border-color: var(--cyan);
          box-shadow: 6px 6px 0 var(--cyan);
        }

        .archive-search-input::placeholder {
          color: var(--ink-dim);
          opacity: 0.8;
        }

        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          color: var(--ink-dim);
          font-size: 1.2rem;
          margin-top: 2rem;
          font-style: italic;
        }

        /* CARD HOVER ENHANCEMENTS */
        .archive-card-uniform {
          transition: 0.35s ease;
        }

        .archive-card-uniform:hover {
          transform: translateY(-4px);
          box-shadow: 10px 10px 0 var(--mag);
          border-color: var(--mag);
        }

        .archive-thumb-box {
          border: var(--border-width) solid var(--ink);
          box-shadow: 4px 4px 0 var(--shadow);
          overflow: hidden;
        }

        .archive-thumb-img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>

      {/* HEADER */}
      <header className="page-head fade-in">
        <h2 className="xxl skew">ARCHIVE</h2>
        <p className="kicker">Submit & Explore</p>
      </header>

      {/* WHY ARCHIVE MATTERS */}
      <div className="slab reveal fade-in-up" style={{ marginBottom: "3rem" }}>
        <h2 className="display">Why Our Community Archive Matters</h2>
        <p className="lead" style={{ marginTop: "1rem" }}>
          The Coppell Community Archive preserves the stories...
        </p>
      </div>

      {/* ===== SEARCH BAR ===== */}
      <section className="archive-search-section fade-in-up">
        <input
          type="text"
          className="archive-search-input"
          placeholder="Search resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      {/* BROWSE SECTION */}
      <section>
        <div className="archive-grid">
          {filtered.map((r, i) => (
            <div
              key={i}
              className={`archive-card-uniform fade-in-up delay-${i + 1}`}
            >
              <div className="archive-thumb-box">
                <img src={r.img} alt={r.title} className="archive-thumb-img" />
              </div>

              <div className="archive-content">
                <h3
                  style={{
                    fontSize: "1.4rem",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                  }}
                >
                  {r.title}
                </h3>

                <p style={{ marginBottom: "1.5rem", opacity: 0.8 }}>
                  {r.desc}
                </p>

                <a href={r.link} target="_blank" className="btn wire">
                  View Resource
                </a>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="no-results fade-in">No matching resources found.</p>
          )}
        </div>
      </section>

      {/* SUBMISSION FORM */}
      <section className="slab fade-in-up delay-2" style={{ marginTop: "4rem" }}>
        <h3 className="display">Submit a New Resource</h3>

        {submitted ? (
          <div className="success-msg fade-in">
            <span className="success-icon">
              <CheckCircle size={64} color="var(--mag)" />
            </span>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              THANK YOU
            </h3>
            <p>Your submission has been received and will be reviewed shortly.</p>
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
            <p className="lead" style={{ marginBottom: "2rem" }}>
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

