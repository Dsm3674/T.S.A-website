import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function MapPage() {
  
  // Reveal effect on scroll
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .fade-in-up, .fade-in');
    
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page map-page">

      {/* HEADER */}
      <header className="page-head slice-reveal reveal fade-in">
        <h2 className="xxl skew">MAP</h2>
        <p className="kicker">brutalist — community — network</p>
      </header>

      <div className="map-layout">

        {/* LEFT SIDE — Brutalist SVG Network */}
        <div className="map-spin-frame reveal fade-in-up">

          {/* Top Label */}
          <div className="map-label">COPPELL COMMUNITY NETWORK</div>

          {/* === SVG START === */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 520"
            xmlns="http://www.w3.org/2000/svg"
            className="map-image"
          >

            {/* Background Grid */}
            <defs>
              <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
                <path d="M 22 0 L 0 0 0 22" stroke="#777" strokeWidth="0.4" />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.22" />

            {/* Connection Lines */}
            <line x1="300" y1="120" x2="150" y2="240" stroke="#050505" strokeWidth="6" />
            <line x1="300" y1="120" x2="450" y2="240" stroke="#050505" strokeWidth="6" />
            <line x1="150" y1="240" x2="300" y2="360" stroke="#050505" strokeWidth="6" />
            <line x1="450" y1="240" x2="300" y2="360" stroke="#050505" strokeWidth="6" />
            <line x1="300" y1="360" x2="300" y2="450" stroke="#050505" strokeWidth="6" />

            {/* COPPELL - accent node */}
            <circle cx="300" cy="120" r="42" fill="#ff2a6d" stroke="#050505" strokeWidth="6" />
            <text
              x="300"
              y="124"
              fontFamily="Courier New, monospace"
              fontSize="12"
              fill="#050505"
              textAnchor="middle"
            >
              COPPELL
            </text>

            {/* Farmers Market (Beige) */}
            <circle cx="150" cy="240" r="38" fill="#e6dcc5" stroke="#050505" strokeWidth="6" />
            <text
              x="150"
              y="238"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              Farmers
            </text>
            <text
              x="150"
              y="253"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              Market
            </text>

            {/* NoteLove */}
            <circle cx="450" cy="240" r="38" fill="#d2c7b2" stroke="#050505" strokeWidth="6" />
            <text
              x="450"
              y="245"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              NoteLove
            </text>

            {/* Metrocrest */}
            <circle cx="300" cy="360" r="42" fill="#e6dcc5" stroke="#050505" strokeWidth="6" />
            <text
              x="300"
              y="364"
              fontSize="12"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              Metrocrest
            </text>

            {/* Neighbors In Need */}
            <circle cx="300" cy="450" r="36" fill="#d2c7b2" stroke="#050505" strokeWidth="6" />
            <text
              x="300"
              y="447"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              Neighbors
            </text>
            <text
              x="300"
              y="462"
              fontSize="11"
              fontFamily="Courier New, monospace"
              fill="#050505"
              textAnchor="middle"
            >
              In Need
            </text>

          </svg>
          {/* === SVG END === */}

        </div>

        {/* RIGHT SIDE — Meaning / Legend */}
        <div className="map-side slab fade-in-up delay-2 reveal">
          <h3 className="display">Why This Network Matters</h3>
          <p className="lead">
            Coppell's community isn't random — it's a connected ecosystem.
            Each node represents a real organization, and each line shows how
            food, arts, mutual aid, and city life overlap in meaningful ways.
          </p>

          <ul style={{ marginTop: "1rem", lineHeight: "1.7" }}>
            <li><strong>Coppell</strong> is the center — the shared city identity.</li>
            <li><strong>Farmers Market</strong> supports food access + small business.</li>
            <li><strong>Metrocrest</strong> provides essential social support.</li>
            <li><strong>NoteLove</strong> expands creative access for youth.</li>
            <li><strong>Neighbors In Need</strong> strengthens hyperlocal aid.</li>
          </ul>

          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Together, they form a <strong>real network of care</strong> that your archive
            documents and makes visible.
          </p>
        </div>
      </div>

      {/* EXPANDED NETWORK DESCRIPTION SECTION */}
      <section className="slab reveal fade-in-up" style={{ marginTop: '4rem' }}>
        <div className="eyebrow">NETWORK STRUCTURE</div>
        <h3 className="display">How Coppell's Organizations Connect</h3>
        
        <p className="lead" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          The community network above isn't just a visual metaphor — it represents
          real connections between organizations that strengthen Coppell every day.
          Each relationship creates pathways for support, resources, and collaboration.
        </p>

        {/* Organization Deep Dives */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          
          {/* Farmers Market */}
          <div style={{
            border: '3px solid var(--ink)',
            padding: '1.5rem',
            background: 'rgba(230, 220, 197, 0.1)'
          }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              color: '#e6dcc5'
            }}>
              Coppell Farmers Market
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Every Saturday morning, local growers, artisans, and food vendors gather
              to create a community hub. The market serves as a meeting place where
              neighbors connect over fresh produce and local goods.
            </p>
            <div style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.8rem',
              color: 'var(--ink-dim)',
              letterSpacing: '0.05em'
            }}>
              <strong>Impact:</strong> Food access, small business support
            </div>
          </div>

          {/* NoteLove */}
          <div style={{
            border: '3px solid var(--ink)',
            padding: '1.5rem',
            background: 'rgba(210, 199, 178, 0.1)'
          }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              color: '#d2c7b2'
            }}>
              NoteLove
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Youth-led nonprofit providing free music lessons to students across
              Coppell. Volunteer instructors transform practice rooms and living
              rooms into studios, making music education accessible to all.
            </p>
            <div style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.8rem',
              color: 'var(--ink-dim)',
              letterSpacing: '0.05em'
            }}>
              <strong>Impact:</strong> Youth mentorship, creative access
            </div>
          </div>

          {/* Metrocrest */}
          <div style={{
            border: '3px solid var(--ink)',
            padding: '1.5rem',
            background: 'rgba(230, 220, 197, 0.1)'
          }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              color: '#e6dcc5'
            }}>
              Metrocrest Services
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Regional hub providing food pantry services, housing assistance,
              senior support, and emergency aid. Metrocrest acts as a safety net
              for families facing financial hardship or unexpected crises.
            </p>
            <div style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.8rem',
              color: 'var(--ink-dim)',
              letterSpacing: '0.05em'
            }}>
              <strong>Impact:</strong> Food security, housing support, crisis aid
            </div>
          </div>

          {/* Neighbors In Need */}
          <div style={{
            border: '3px solid var(--ink)',
            padding: '1.5rem',
            background: 'rgba(210, 199, 178, 0.1)'
          }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              color: '#d2c7b2'
            }}>
              Neighbors In Need
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Grassroots mutual aid network coordinating grocery deliveries,
              transportation, and direct support for Coppell families. This
              hyperlocal approach ensures no neighbor feels isolated or forgotten.
            </p>
            <div style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.8rem',
              color: 'var(--ink-dim)',
              letterSpacing: '0.05em'
            }}>
              <strong>Impact:</strong> Mutual aid, direct community support
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL NETWORK INSIGHTS */}
      <section className="slab reveal fade-in-up delay-1" style={{ marginTop: '3rem' }}>
        <div className="eyebrow">ECOSYSTEM ANALYSIS</div>
        <h3 className="display">The Power of Interconnection</h3>
        
        <p className="lead" style={{ marginTop: '1.5rem' }}>
          What makes Coppell's network special isn't just the organizations themselves —
          it's how they work together. When one organization connects people with food
          access, another provides music education, and others offer emergency support,
          the entire community becomes more resilient.
        </p>

        <div style={{
          marginTop: '2rem',
          padding: '2rem',
          border: '3px dashed var(--ink-dim)',
          background: 'rgba(255, 42, 109, 0.05)'
        }}>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '800',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            color: '#ff2a6d'
          }}>
            Network Effects in Action
          </h4>
          <ul style={{ 
            paddingLeft: '1.5rem', 
            lineHeight: '1.8',
            fontSize: '1rem'
          }}>
            <li>Farmers Market vendors partner with Metrocrest food pantry</li>
            <li>NoteLove volunteers connect families to Neighbors In Need support</li>
            <li>Shared volunteer base strengthens all organizations simultaneously</li>
            <li>Cultural events bring together multiple community groups</li>
            <li>Information networks help residents access the right resources quickly</li>
          </ul>
        </div>

        <p className="lead" style={{ marginTop: '2rem' }}>
          This archive exists to document and celebrate these connections, ensuring
          future residents understand the community fabric that makes Coppell home.
        </p>
      </section>

      <Footer />
    </div>
  );
}


