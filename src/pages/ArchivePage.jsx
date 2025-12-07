import React, { useState } from "react";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

// Import Images
import farmersImg from "../assets/coppell-farmers-market.jpg";
import noteloveImg from "../assets/notelove.jpg";
import metrocrestImg from "../assets/metrocrest.jpg";

export default function ArchivePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 400);
  };

  const resources = [
    { 
      title: "Coppell Farmers Market", 
      link: "https://coppellfarmersmarket.org/",
      img: farmersImg,
      desc: "Weekly gathering for local food."
    },
    { 
      title: "NoteLove", 
      link: "https://www.notelove.org/",
      img: noteloveImg,
      desc: "Free youth-led music lessons."
    },
    { 
      title: "Metrocrest Services", 
      link: "https://metrocrestservices.org/",
      img: metrocrestImg,
      desc: "Community support & housing."
    },
  ];

  return (
    <div className="page archive">
      <header className="page-head fade-in">
        <h2 className="xxl skew">ARCHIVE</h2>
        <p className="kicker">Submit & Explore</p>
      </header>

      {/* Browse Section */}
      <section>
        <div className="archive-grid">
          {resources.map((r, i) => (
            <div key={i} className={`archive-card fade-in-up delay-${i + 1}`}>
              <div className="archive-img-wrapper">
                <img src={r.img} alt={r.title} className="archive-card-img" />
              </div>
              <div style={{ padding: '0 0 0.5rem 0' }}>
                <h3 className="archive-title" style={{ marginTop: '1rem' }}>{r.title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.8 }}>{r.desc}</p>
                <a href={r.link} target="_blank" className="btn wire" style={{ width: '100%' }}>View</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Section */}
      <section className="slab fade-in-up delay-2" style={{ marginTop: '4rem' }}>
        <h3 className="display">Submit a New Resource</h3>
        
        {submitted ? (
          <div className="success-msg fade-in">
            <span className="success-icon">
              <CheckCircle size={64} color="var(--mag)" />
            </span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>THANK YOU</h3>
            <p>Your submission has been received and will be reviewed shortly.</p>
            <button 
              className="btn wire" 
              style={{ marginTop: '1.5rem' }}
              onClick={() => setSubmitted(false)}
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form className="archive-form" onSubmit={handleSubmit}>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Know of a community group that belongs here?
            </p>
            <div className="form-field">
              <label>Resource Name</label>
              <input type="text" placeholder="Example: Youth Arts Program" required />
            </div>
            <div className="form-field">
              <label>Description</label>
              <textarea placeholder="Describe what this resource offers..." required />
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

