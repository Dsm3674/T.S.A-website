import React, { useState } from "react";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

export default function ArchivePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call or processing
    setTimeout(() => {
      setSubmitted(true);
      // Optional: scroll to top or focus on message
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 400);
  };

  const resources = [
    { title: "Coppell Farmers Market", link: "https://coppellfarmersmarket.org/" },
    { title: "NoteLove", link: "https://www.notelove.org/" },
    { title: "Metrocrest Services", link: "https://metrocrestservices.org/" },
  ];

  return (
    <div className="page archive">
      <header className="page-head fade-in">
        <h2 className="xxl skew">ARCHIVE</h2>
        <p className="kicker">Submit & Explore</p>
      </header>

      {/* Browse Section */}
      <section className="fade-in-up">
        <div className="archive-grid">
          {resources.map((r, i) => (
            <div key={i} className="archive-card fade-in-up delay-1">
              <h3 className="archive-title">{r.title}</h3>
              <a href={r.link} target="_blank" className="btn wire" style={{ marginTop: '1rem' }}>View</a>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Section */}
      <section className="slab fade-in-up delay-2" style={{ marginTop: '4rem' }}>
        <h3 className="display">Submit a New Resource</h3>
        <p className="lead" style={{ marginBottom: '2rem' }}>
          Know of a community group that belongs here? Let us know.
        </p>

        {submitted ? (
          <div className="success-msg fade-in">
            <span className="success-icon">
              <CheckCircle size={64} color="var(--mag)" />
            </span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>THANK YOU FOR SUBMISSION</h3>
            <p>We will review it shortly.</p>
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




