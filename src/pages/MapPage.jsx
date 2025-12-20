import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function MapPage() {
  const [hoveredNode, setHoveredNode] = useState(null);
  
  // NOTE: We no longer need the IntersectionObserver inside this file 
  // because App.jsx now handles it globally for all pages.

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
      <header className="page-head reveal fade-in" style={{
        position: 'relative',
        overflow: 'hidden',
      }}>
        <h2 className="xxl skew" style={{
          position: 'relative',
          display: 'inline-block',
          animation: 'glitchText 8s infinite'
        }}>
          MAP
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '100%',
            height: '6px',
            background: '#ff2a6d',
          }} />
        </h2>
        <p className="kicker">
          brutalist — community — network
        </p>

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

        {/* LEFT SIDE — SVG Network */}
        <div 
          className="map-spin-frame reveal fade-in-up"
          style={{
            position: 'relative',
            animation: 'floatMap 8s ease-in-out infinite',
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        >
          <div className="map-label">
            COPPELL COMMUNITY NETWORK
          </div>

          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 520"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="map-image"
          >
            <defs>
              <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
                <path d="M 22 0 L 0 0 0 22" stroke="#777" strokeWidth="0.4" />
              </pattern>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.22" />

            {/* Connection Lines */}
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

            {/* COPPELL CENTER NODE */}
            <circle cx="300" cy="120" r="42" fill="#ff2a6d" stroke="#050505" strokeWidth="6">
              <animate attributeName="r" values="42;46;42" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="300" y="124" fontFamily="Courier New" fontSize="12" fill="#050505" textAnchor="middle" fontWeight="bold">COPPELL</text>

            {/* Farmers Market */}
            <circle cx="150" cy="240" r="38" fill="#e6dcc5" stroke="#050505" strokeWidth="6"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredNode('farmers')}
              onMouseLeave={() => setHoveredNode(null)}
            />
            <text x="150" y="238" fontSize="11" fill="#050505" textAnchor="middle">Farmers</text>
            <text x="150" y="253" fontSize="11" fill="#050505" textAnchor="middle">Market</text>

            {/* NoteLove */}
            <circle cx="450" cy="240" r="38" fill="#d2c7b2" stroke="#050505" strokeWidth="6"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredNode('notelove')}
              onMouseLeave={() => setHoveredNode(null)}
            />
            <text x="450" y="245" fontSize="11" fill="#050505" textAnchor="middle">NoteLove</text>

            {/* Metrocrest */}
            <circle cx="300" cy="360" r="42" fill="#e6dcc5" stroke="#050505" strokeWidth="6"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredNode('metrocrest')}
              onMouseLeave={() => setHoveredNode(null)}
            />
            <text x="300" y="364" fontSize="12" fill="#050505" textAnchor="middle">Metrocrest</text>

            {/* Neighbors */}
            <circle cx="300" cy="450" r="36" fill="#d2c7b2" stroke="#050505" strokeWidth="6"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredNode('neighbors')}
              onMouseLeave={() => setHoveredNode(null)}
            />
            <text x="300" y="447" fontSize="11" fill="#050505" textAnchor="middle">Neighbors</text>
            <text x="300" y="462" fontSize="11" fill="#050505" textAnchor="middle">In Need</text>
          </svg>

          {/* Hover Panel */}
          {hoveredNode && (
            <div style={{
              position: 'absolute',
              bottom: '1rem', left: '1rem', right: '1rem',
              background: 'rgba(0, 0, 0, 0.9)',
              border: '2px solid #ff2a6d',
              padding: '1rem', color: 'white', zIndex: 10
            }}>
              <div style={{ color: '#ff2a6d', fontWeight: 'bold' }}>
                {organizations.find(o => o.id === hoveredNode)?.name}
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                {organizations.find(o => o.id === hoveredNode)?.impact}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE — Legend */}
        <div className="map-side slab reveal delay-2">
          <h3 className="display">Why This Network Matters</h3>
          <p className="lead">
            Coppell's community isn't random — it's a connected ecosystem. 
            Each node represents a real organization showing how food, arts, and mutual aid overlap.
          </p>
          <ul style={{ marginTop: "1rem", lineHeight: "1.7" }}>
            <li><strong>Coppell:</strong> The center city identity.</li>
            <li><strong>Farmers Market:</strong> Food access hub.</li>
            <li><strong>Metrocrest:</strong> Essential social safety net.</li>
            <li><strong>NoteLove:</strong> Creative access for youth.</li>
            <li><strong>Neighbors In Need:</strong> Hyperlocal aid.</li>
          </ul>
        </div>
      </div>

      {/* DETAILED CARDS SECTION */}
      <section className="slab reveal fade-in-up" style={{ marginTop: '4rem' }}>
        <div className="eyebrow">NETWORK STRUCTURE</div>
        <h3 className="display">Organizational Deep Dive</h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {organizations.map((org, idx) => (
            <div
              key={org.id}
              className="reveal delay-1"
              style={{
                border: '3px solid var(--ink)',
                padding: '1.25rem',
                background: 'var(--panel)',
                transition: 'all 0.4s var(--ease)',
              }}
            >
              <h4 style={{ color: '#ff2a6d', marginBottom: '0.5rem' }}>{org.name}</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{org.description}</p>
              <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                <strong>IMPACT:</strong> {org.impact}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Internal Animations specific to this page */}
      <style>{`
        @keyframes floatMap {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glitchText {
          0%, 90%, 100% { transform: translate(0); }
          92% { transform: translate(-2px, 2px); }
          94% { transform: translate(2px, -2px); }
        }
      `}</style>
    </div>
  );
}
