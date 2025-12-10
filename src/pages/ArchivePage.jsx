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
      desc: "Weekly gathering for local food, fresh produce, and community connection."
    },
    { 
      title: "NoteLove", 
      link: "https://www.notelove.org/",
      img: noteloveImg,
      desc: "Youth-led nonprofit offering free music lessons to students across the city."
    },
    { 
      title: "Metrocrest Services", 
      link: "https://metrocrestservices.org/",
      img: metrocrestImg,
      desc: "A regional hub for food security, housing support, and emergency aid."
    },
  ];

  {
  title: "Neighbors In Need",
  description:
    "A grassroots support network providing groceries, rides, and mutual aid to Coppell families.",
  image: "/images/neighbors-in-need.jpg",
  link: "https://www.instagram.com/neighbors_in_need_/"
}


  <div className="slab reveal fade-in-up">
  <h2 className="display">Why Our Community Archive Matters</h2>
  <p className="lead" style={{ marginTop: "1rem" }}>
    The Coppell Community Archive preserves the stories, organizations, and
    cultural foundations that shape our city. By documenting local projects—
    from Metrocrest Services to NoteLove and neighborhood-led initiatives like
    Neighbors In Need—we create a living record of community support, resilience,
    and shared history. This archive ensures future generations understand the
    people and groups who strengthened Coppell.
  </p>
</div>

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
            <div key={i} className={`archive-card-uniform fade-in-up delay-${i + 1}`}>
              
              {/* Image Box - Fixed Height */}
              <div className="archive-thumb-box">
                <img src={r.img} alt={r.title} className="archive-thumb-img" />
              </div>

              {/* Content Box */}
              <div className="archive-content">
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  {r.title}
                </h3>
                <p style={{ marginBottom: '1.5rem', opacity: 0.8, lineHeight: 1.5 }}>
                  {r.desc}
                </p>
                <a href={r.link} target="_blank" className="btn wire">
                  View Resource
                </a>
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
