import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { CheckCircle, Search, Filter, Archive } from "lucide-react";

// Images
import farmersImg from "../assets/coppell-farmers-market.jpg";
import noteloveImg from "../assets/notelove.jpg";
import metrocrestImg from "../assets/metrocrest.jpg";
import neighborsImg from "../assets/neighbors-in-need.jpg";

export default function ArchivePage() {
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
      desc: "A cornerstone of Coppell culture. Providing fresh, local produce and a weekly gathering space for residents to support small-scale agriculture.",
    },
    {
      title: "NoteLove",
      link: "https://www.notelove.org/",
      img: noteloveImg,
      category: "Arts",
      desc: "Bridging the gap in music education. This youth-led nonprofit offers free lessons, ensuring that creative expression is accessible to every student.",
    },
    {
      title: "Metrocrest Services",
      link: "https://metrocrestservices.org/",
      img: metrocrestImg,
      category: "Social Services",
      desc: "The regional safety net. From rent assistance to a robust food pantry, they provide essential support for neighbors facing financial crisis.",
    },
    {
      title: "Neighbors In Need",
      link: "https://www.instagram.com/neighbors_in_need_/",
      img: neighborsImg,
      category: "Mutual Aid",
      desc: "Hyperlocal community care. A grassroots network coordinating direct help, rides, and grocery deliveries across the city of Coppell.",
    },
  ];

  const filtered = resources.filter((r) => {
    const matchesQuery = r.title.toLowerCase().includes(query.toLowerCase()) || 
                         r.desc.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === "All" || r.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }, 400);
  };

  return (
    <div className="page archive-page">
      {/* HEADER SECTION */}
      <header className="page-head reveal">
        <h2 className="xxl skew">ARCHIVE</h2>
        <p className="kicker">Digital Preservation — Community Ledger</p>
        
        {/* Abstract design element */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px',
          border: '2px solid var(--mag)',
          color: 'var(--mag)',
          fontFamily: 'monospace',
          fontSize: '0.8rem',
          transform: 'rotate(5deg)'
        }}>
          FILE_ID: COPPELL_2025_TSA
        </div>
      </header>

      {/* WHY ARCHIVE - Deep Dive */}
      <div className="slab reveal fade-in-up">
        <div className="eyebrow">THE PURPOSE</div>
        <h2 className="display">Protecting Local History</h2>
        <p className="lead" style={{ marginTop: "1rem" }}>
          In a rapidly growing suburb, history is easily overwritten by new developments. 
          This archive exists to document the <strong>human infrastructure</strong> of Coppell—the 
          nonprofits, student groups, and volunteers that create our city's soul.
        </p>
      </div>

      {/* SEARCH & FILTER BAR */}
      <section className="reveal fade-in-up delay-1" style={{ marginBottom: '3rem' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          background: 'var(--panel)',
          padding: '1.5rem',
          border: '3px solid var(--ink)',
          boxShadow: '8px 8px 0 var(--mag)'
        }}>
          <div style={{ flex: '1', minWidth: '280px', position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '12px', opacity: 0.5 }} size={20} />
            <input
              type="text"
              style={{ paddingLeft: '40px', marginBottom: 0 }}
              placeholder="Search the collection..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.8rem',
                  background: activeCategory === cat ? 'var(--mag)' : 'transparent',
                  color: activeCategory === cat ? 'white' : 'var(--ink)',
                  border: '2px solid var(--ink)',
                  cursor: 'pointer',
                  fontWeight: '800'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID OF ARCHIVAL RECORDS */}
      <section>
        <div className="archive-grid">
          {filtered.map((r, i) => (
            <div
              key={i}
              className={`archive-card-uniform reveal fade-in-up delay-${(i % 3) + 1}`}
              style={{
                background: 'var(--panel)',
                border: '3px solid var(--ink)',
                position: 'relative'
              }}
            >
              {/* Category Tag Badge */}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                padding: '2px 8px',
                fontSize: '0.7rem',
                fontWeight: '900',
                zIndex: 5
              }}>
                {r.category}
              </div>

              <div className="archive-thumb-box">
                <img src={r.img} alt={r.title} className="archive-thumb-img" />
              </div>

              <div className="archive-content">
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{r.title}</h3>
                <p style={{ marginBottom: "1.5rem", opacity: 0.8, fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {r.desc}
                </p>
                <a href={r.link} target="_blank" rel="noopener noreferrer" className="btn wire" style={{ width: '100%' }}>
                  ACCESS FILE →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="slab" style={{ textAlign: 'center' }}>
            <p>No records found matching your query.</p>
          </div>
        )}
      </section>

      {/* SUBMISSION SECTION - Styled like a physical form */}
      <section className="slab reveal fade-in-up delay-1" style={{ marginTop: "4rem", background: 'var(--bg)' }}>
        <div className="eyebrow">CONTRIBUTE TO THE RECORD</div>
        <h3 className="display">Submit a New Entry</h3>

        {submitted ? (
          <div className="success-msg fade-in" style={{ border: '4px solid #05d9e8' }}>
            <CheckCircle size={64} color="#05d9e8" />
            <h3 style={{ marginTop: "1rem" }}>SUBMISSION RECEIVED</h3>
            <p className="lead">Your contribution has been indexed and is awaiting verification by the student team.</p>
            <button className="btn slab" style={{ marginTop: "1.5rem" }} onClick={() => setSubmitted(false)}>
              NEW SUBMISSION
            </button>
          </div>
        ) : (
          <form className="archive-form" onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="form-field">
                <label>ORGANIZATION NAME</label>
                <input type="text" required placeholder="e.g. Coppell Arts Council" />
              </div>
              <div className="form-field">
                <label>ESTABLISHED YEAR</label>
                <input type="text" placeholder="YYYY" />
              </div>
            </div>

            <div className="form-field">
              <label>DESCRIPTION & IMPACT</label>
              <textarea required placeholder="Explain how this group supports the Coppell community..." />
            </div>

            <div className="form-field">
              <label>OFFICIAL WEBSITE (URL)</label>
              <input type="url" placeholder="https://..." />
            </div>

            <button type="submit" className="btn slab" style={{ width: 'fit-content', padding: '1rem 4rem' }}>
              STAMP & SUBMIT
            </button>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}
