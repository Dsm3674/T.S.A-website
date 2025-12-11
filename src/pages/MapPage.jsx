import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function MapPage() {
  const [hoveredNode, setHoveredNode] = useState(null);
  
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

  const organizations = [
    {
      id: 'farmers',
      name: 'Coppell Farmers Market',
      color: '#e6dcc5',
      impact: 'Food access, small business support',
      description: 'Every Saturday morning, local growers, artisans, and food vendors gather to create a community hub. The market serves as a meeting place where neighbors connect over fresh produce and local goods.'
    },
    {
      id: 'notelove',
      name: 'NoteLove',
      color: '#d2c7b2',
      impact: 'Youth mentorship, creative access',
      description: 'Youth-led nonprofit providing free music lessons to students across Coppell. Volunteer instructors transform practice rooms and living rooms into studios, making music education accessible to all.'
    },
    {
      id: 'metrocrest',
      name: 'Metrocrest Services',
      color: '#e6dcc5',
      impact: 'Food security, housing support, crisis aid',
      description: 'Regional hub providing food pantry services, housing assistance, senior support, and emergency aid. Metrocrest acts as a safety net for families facing financial hardship or unexpected crises.'
    },
    {
      id: 'neighbors',
      name: 'Neighbors In Need',
      color: '#d2c7b2',
      impact: 'Mutual aid, direct community support',
      description: 'Grassroots mutual aid network coordinating grocery deliveries, transportation, and direct support for Coppell families. This hyperlocal approach ensures no neighbor feels isolated or forgotten.'
    }
  ];

  return (
    <div className="page map-page">

      {/* ENHANCED HEADER WITH ANIMATION */}
      <header className="page-head slice-reveal reveal fade-in" style={{
        position: 'relative',
        overflow: 'hidden',
        animation: 'slideDown 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
      }}>
        <h2 className="xxl skew" style={{
          position: 'relative',
          display: 'inline-block',
          animation: 'glitchText 8s infinite'
        }}>
          MAP
          {/* Animated underline */}
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '100%',
            height: '6px',
            background: '#ff2a6d',
            animation: 'slideRight 1s cubic-bezier(0.23, 1, 0.32, 1)'
          }} />
        </h2>
        <p className="kicker" style={{
          animation: 'fadeInUp 1s ease 0.3s both'
        }}>
          brutalist — community — network
        </p>

        {/* Decorative corner accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '120px',
          height: '120px',
          background: '#ff2a6d',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          opacity: 0.1,
          animation: 'pulse 3s ease-in-out infinite'
        }} />
      </header>

      <div className="map-layout">

        {/* LEFT SIDE — Enhanced SVG Network with Animations */}
        <div 
          className="map-spin-frame reveal fade-in-up"
          style={{
            position: 'relative',
            animation: 'floatMap 8s ease-in-out infinite',
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
            e.currentTarget.style.boxShadow = '24px 24px 0 #ff2a6d';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '14px 14px 0 var(--shadow)';
          }}
        >

          {/* Animated Top Label */}
          <div className="map-label" style={{
            animation: 'slideDown 0.8s ease 0.5s both'
          }}>
            COPPELL COMMUNITY NETWORK
          </div>

          {/* === ENHANCED SVG START === */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 520"
            xmlns="http://www.w3.org/2000/svg"
            className="map-image"
          >

            {/* Background Grid with Animation */}
            <defs>
              <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
                <path d="M 22 0 L 0 0 0 22" stroke="#777" strokeWidth="0.4" />
              </pattern>
              
              {/* Glow effect for lines */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.22" />

            {/* Animated Connection Lines */}
            <g filter="url(#glow)">
              <line x1="300" y1="120" x2="150" y2="240" stroke="#050505" strokeWidth="6">
                <animate attributeName="stroke-width" values="6;8;6" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="300" y1="120" x2="450" y2="240" stroke="#050505" strokeWidth="6">
                <animate attributeName="stroke-width" values="6;8;6" dur="3s" begin="0.5s" repeatCount="indefinite" />
              </line>
              <line x1="150" y1="240" x2="300" y2="360" stroke="#050505" strokeWidth="6">
                <animate attributeName="stroke-width" values="6;8;6" dur="3s" begin="1s" repeatCount="indefinite" />
              </line>
              <line x1="450" y1="240" x2="300" y2="360" stroke="#050505" strokeWidth="6">
                <animate attributeName="stroke-width" values="6;8;6" dur="3s" begin="1.5s" repeatCount="indefinite" />
              </line>
              <line x1="300" y1="360" x2="300" y2="450" stroke="#050505" strokeWidth="6">
                <animate attributeName="stroke-width" values="6;8;6" dur="3s" begin="2s" repeatCount="indefinite" />
              </line>
            </g>

            {/* COPPELL - Enhanced accent node with pulse */}
            <circle cx="300" cy="120" r="42" fill="#ff2a6d" stroke="#050505" strokeWidth="6"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredNode('coppell')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <animate attributeName="r" values="42;46;42" dur="2s" repeatCount="indefinite" />
            </circle>
            <text
              x="300"
              y="124"
              fontFamily="Courier New, monospace"
              fontSize="12"
              fill="#050505"
              textAnchor="middle"
              fontWeight="bold"
            >
              COPPELL
            </text>

            {/* Farmers Market with hover effect */}
            <circle cx="150" cy="240" r="38" fill="#e6dcc5" stroke="#050505" strokeWidth="6"
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              onMouseEnter={() => setHoveredNode('farmers')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {hoveredNode === 'farmers' && (
                <animate attributeName="r" values="38;42;38" dur="0.5s" repeatCount="indefinite" />
              )}
            </circle>
            <text x="150" y="238" fontSize="11" fontFamily="Courier New, monospace" fill="#050505" textAnchor="middle">
              Farmers
            </text>
            <text x="150" y="253" fontSize="11" fontFamily="Courier New, monospace" fill="#050505" textAnchor="middle">
              Market
            </text>

            {/* NoteLove with hover effect */}
            <circle cx="450" cy="240" r="38" fill="#d2c7b2" stroke="#050505" strokeWidth="6"
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              onMouseEnter={() => setHoveredNode('notelove')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {hoveredNode === 'notelove' && (
                <animate attributeName="r" values="38;42;38" dur="0.5s" repeatCount="indefinite" />
              )}
            </circle>
            <text x="450" y="245" fontSize="11" fontFamily="Courier New, monospace" fill="#050505" textAnchor="middle">
              NoteLove
            </text>

            {/* Metrocrest with hover effect */}
            <circle cx="300" cy="360" r="42" fill="#e6dcc5" stroke="#050505" strokeWidth="6"
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              onMouseEnter={() => setHoveredNode('metrocrest')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {hoveredNode === 'metrocrest' && (
                <animate attributeName="r" values="42;46;42" dur="0.5s" repeatCount="indefinite" />
              )}
            </circle>
            <text x="300" y="364" fontSize="12" fontFamily="Courier New, monospace" fill="#050505" textAnchor="middle">
              Metrocrest
            </text>

            {/* Neighbors In Need with hover effect */}
            <circle cx="300" cy="450" r="36" fill="#d2c7b2" stroke="#050505" strokeWidth="6"
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              onMouseEnter={() => setHoveredNode('neighbors')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {hoveredNode === 'neighbors' && (
                <animate attributeName="r" values="36;40;36" dur="0.5s" repeatCount="indefinite" />
              )}
            </circle>
            <text x="300" y="447" fontSize="11" fontFamily="Courier New, monospace" fill="#050505" textAnchor="middle">
              Neighbors
            </text>
            <text x="300" y="462" fontSize="11" fontFamily="Courier New, monospace" fill="#050505" textAnchor="middle">
              In Need
            </text>

          </svg>
          {/* === SVG END === */}

          {/* Hover Info Panel */}
          {hoveredNode && hoveredNode !== 'coppell' && (
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              background: 'rgba(0, 0, 0, 0.9)',
              border: '2px solid #ff2a6d',
              padding: '1rem',
              color: 'var(--ink)',
              animation: 'slideUp 0.3s ease',
              zIndex: 10
            }}>
              <div style={{
                fontFamily: '"Courier New", monospace',
                fontSize: '0.75rem',
                color: '#ff2a6d',
                marginBottom: '0.5rem',
                letterSpacing: '0.1em'
              }}>
                {organizations.find(o => o.id === hoveredNode)?.name}
              </div>
              <div style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                {organizations.find(o => o.id === hoveredNode)?.impact}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT SIDE — Enhanced Legend with animations */}
        <div className="map-side slab fade-in-up delay-2 reveal" style={{
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated background accent */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255, 42, 109, 0.05) 0%, transparent 70%)',
            animation: 'rotate 20s linear infinite',
            pointerEvents: 'none'
          }} />

          <h3 className="display" style={{
            position: 'relative',
            zIndex: 2,
            animation: 'fadeInRight 0.8s ease'
          }}>
            Why This Network Matters
          </h3>
          <p className="lead" style={{
            position: 'relative',
            zIndex: 2,
            animation: 'fadeInRight 1s ease 0.2s both'
          }}>
            Coppell's community isn't random — it's a connected ecosystem.
            Each node represents a real organization, and each line shows how
            food, arts, mutual aid, and city life overlap in meaningful ways.
          </p>

          <ul style={{ 
            marginTop: "1rem", 
            lineHeight: "1.7",
            position: 'relative',
            zIndex: 2
          }}>
            {[
              { text: 'Coppell', desc: 'is the center — the shared city identity.' },
              { text: 'Farmers Market', desc: 'supports food access + small business.' },
              { text: 'Metrocrest', desc: 'provides essential social support.' },
              { text: 'NoteLove', desc: 'expands creative access for youth.' },
              { text: 'Neighbors In Need', desc: 'strengthens hyperlocal aid.' }
            ].map((item, idx) => (
              <li key={idx} style={{
                animation: `fadeInLeft 0.5s ease ${0.4 + idx * 0.1}s both`,
                transition: 'all 0.3s ease',
                padding: '0.25rem 0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.color = '#ff2a6d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.color = '';
              }}>
                <strong>{item.text}</strong> {item.desc}
              </li>
            ))}
          </ul>

          <p className="lead" style={{ 
            marginTop: "1.25rem",
            position: 'relative',
            zIndex: 2,
            animation: 'fadeInRight 1.2s ease 0.8s both'
          }}>
            Together, they form a <strong>real network of care</strong> that your archive
            documents and makes visible.
          </p>
        </div>
      </div>

      {/* ENHANCED ORGANIZATION CARDS */}
      <section className="slab reveal fade-in-up" style={{ marginTop: '4rem' }}>
        <div className="eyebrow" style={{ animation: 'fadeIn 1s ease' }}>NETWORK STRUCTURE</div>
        <h3 className="display" style={{ animation: 'slideRight 0.8s ease' }}>
          How Coppell's Organizations Connect
        </h3>
        
        <p className="lead" style={{ 
          marginTop: '1.5rem', 
          marginBottom: '2rem',
          animation: 'fadeInUp 1s ease 0.3s both'
        }}>
          The community network above isn't just a visual metaphor — it represents
          real connections between organizations that strengthen Coppell every day.
          Each relationship creates pathways for support, resources, and collaboration.
        </p>

        {/* Enhanced Organization Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          
          {organizations.map((org, idx) => (
            <div
              key={org.id}
              style={{
                border: '3px solid var(--ink)',
                padding: '1.25rem',
                background: `rgba(${org.color === '#e6dcc5' ? '230, 220, 197' : '210, 199, 178'}, 0.1)`,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                animation: `cardSlideIn 0.6s ease ${idx * 0.15}s both`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) rotate(1deg)';
                e.currentTarget.style.boxShadow = '12px 12px 0 #ff2a6d';
                e.currentTarget.style.borderColor = '#ff2a6d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--ink)';
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40px',
                height: '40px',
                background: org.color,
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                opacity: 0.3
              }} />

              <h4 style={{
                fontSize: '1.15rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                marginBottom: '0.65rem',
                color: org.color,
                position: 'relative',
                zIndex: 2,
                transition: 'color 0.3s ease'
              }}>
                {org.name}
              </h4>
              <p style={{ 
                fontSize: '0.9rem', 
                lineHeight: '1.5', 
                marginBottom: '0.85rem',
                position: 'relative',
                zIndex: 2
              }}>
                {org.description}
              </p>
              <div style={{
                fontFamily: '"Courier New", monospace',
                fontSize: '0.75rem',
                color: 'var(--ink-dim)',
                letterSpacing: '0.05em',
                position: 'relative',
                zIndex: 2
              }}>
                <strong>Impact:</strong> {org.impact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENHANCED NETWORK INSIGHTS */}
      <section className="slab reveal fade-in-up delay-1" style={{ 
        marginTop: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated diagonal stripes */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 42, 109, 0.02) 20px, rgba(255, 42, 109, 0.02) 40px)',
          pointerEvents: 'none',
          animation: 'slideStripes 20s linear infinite'
        }} />

        <div className="eyebrow" style={{ 
          position: 'relative', 
          zIndex: 2,
          animation: 'fadeIn 1s ease'
        }}>
          ECOSYSTEM ANALYSIS
        </div>
        <h3 className="display" style={{ 
          position: 'relative', 
          zIndex: 2,
          animation: 'slideLeft 0.8s ease'
        }}>
          The Power of Interconnection
        </h3>
        
        <p className="lead" style={{ 
          marginTop: '1.5rem',
          position: 'relative',
          zIndex: 2,
          animation: 'fadeInUp 1s ease 0.2s both'
        }}>
          What makes Coppell's network special isn't just the organizations themselves —
          it's how they work together. When one organization connects people with food
          access, another provides music education, and others offer emergency support,
          the entire community becomes more resilient.
        </p>

        <div style={{
          marginTop: '2rem',
          padding: '1.75rem',
          border: '3px dashed var(--ink-dim)',
          background: 'rgba(255, 42, 109, 0.05)',
          position: 'relative',
          zIndex: 2,
          animation: 'zoomIn 0.8s ease 0.4s both'
        }}>
          <h4 style={{
            fontSize: '1.15rem',
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
            fontSize: '0.95rem'
          }}>
            {[
              'Farmers Market vendors partner with Metrocrest food pantry',
              'NoteLove volunteers connect families to Neighbors In Need support',
              'Shared volunteer base strengthens all organizations simultaneously',
              'Cultural events bring together multiple community groups',
              'Information networks help residents access the right resources quickly'
            ].map((item, idx) => (
              <li key={idx} style={{
                animation: `fadeInLeft 0.5s ease ${0.6 + idx * 0.1}s both`,
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="lead" style={{ 
          marginTop: '2rem',
          position: 'relative',
          zIndex: 2,
          animation: 'fadeInUp 1.2s ease 1s both'
        }}>
          This archive exists to document and celebrate these connections, ensuring
          future residents understand the community fabric that makes Coppell home.
        </p>
      </section>

      <Footer />

      {/* Inject Animation Styles */}
      <style>{`
        @keyframes floatMap {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes glitchText {
          0%, 90%, 100% { transform: translate(0); }
          91% { transform: translate(-2px, 2px); }
          92% { transform: translate(2px, -2px); }
          93% { transform: translate(-2px, -2px); }
          94% { transform: translate(2px, 2px); }
          95% { transform: translate(0); }
        }

        @keyframes slideDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideRight {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideLeft {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideStripes {
          from { background-position: 0 0; }
          to { background-position: 100px 100px; }
        }
      `}</style>
    </div>
  );
}

