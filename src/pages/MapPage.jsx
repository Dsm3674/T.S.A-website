import React from "react";

export default function MapPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--ink)',
      padding: '2rem 1.5rem 8rem',
      maxWidth: '1600px',
      margin: '0 auto'
    }}>

      {/* HEADER - Now properly visible! */}
      <header style={{
        marginBottom: '2.5rem',
        borderBottom: '3px solid var(--ink)',
        paddingBottom: '1.5rem'
      }}>
        <h2 style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          lineHeight: '0.85',
          textTransform: 'uppercase',
          fontWeight: '800',
          letterSpacing: '-0.02em',
          transform: 'skewX(-6deg)',
          textShadow: '4px 4px 0 var(--shadow)',
          marginBottom: '0.75rem'
        }}>
          MAP
        </h2>
        <p style={{
          fontFamily: '"Courier New", Courier, monospace',
          color: '#ff2a6d',
          fontSize: '0.875rem',
          letterSpacing: '0.1em',
          fontWeight: '700',
          textTransform: 'uppercase'
        }}>
          brutalist — community — network
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2.3fr 1.7fr',
        gap: '2.5rem',
        alignItems: 'flex-start',
        marginTop: '2.5rem'
      }}>

        {/* LEFT SIDE — Brutalist SVG Network */}
        <div style={{
          position: 'relative',
          border: '4px solid var(--ink)',
          boxShadow: '14px 14px 0 var(--shadow)',
          overflow: 'hidden',
          background: 'var(--panel)',
          transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '22px 22px 0 #ff2a6d';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '14px 14px 0 var(--shadow)';
        }}>

          {/* Top Label */}
          <div style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            padding: '6px 12px',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'var(--ink)',
            fontFamily: '"Courier New", monospace',
            fontSize: '0.7rem',
            letterSpacing: '1px',
            border: '2px solid var(--ink)',
            textTransform: 'uppercase',
            zIndex: 4
          }}>
            COPPELL COMMUNITY NETWORK
          </div>

          {/* === SVG START === */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 520"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
              maxHeight: '520px'
            }}
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
        <div style={{
          background: 'var(--panel)',
          border: '3px solid var(--ink)',
          padding: '2.5rem 2rem',
          position: 'relative',
          boxShadow: '12px 12px 0 var(--shadow)'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
            lineHeight: '0.95',
            fontWeight: '800',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            Why This Network Matters
          </h3>
          
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.6',
            maxWidth: '38rem',
            marginBottom: '1.5rem'
          }}>
            Coppell's community isn't random — it's a connected ecosystem.
            Each node represents a real organization, and each line shows how
            food, arts, mutual aid, and city life overlap in meaningful ways.
          </p>

          <ul style={{ 
            marginTop: '1rem', 
            lineHeight: '1.7',
            paddingLeft: '1.2rem'
          }}>
            <li><strong>Coppell</strong> is the center — the shared city identity.</li>
            <li><strong>Farmers Market</strong> supports food access + small business.</li>
            <li><strong>Metrocrest</strong> provides essential social support.</li>
            <li><strong>NoteLove</strong> expands creative access for youth.</li>
            <li><strong>Neighbors In Need</strong> strengthens hyperlocal aid.</li>
          </ul>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.6',
            marginTop: '1.25rem',
            maxWidth: '38rem'
          }}>
            Together, they form a <strong>real network of care</strong> that your archive
            documents and makes visible.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: 'var(--bg)',
        padding: '5rem 2rem 3rem',
        marginTop: '6rem',
        borderTop: '3px solid var(--ink)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '4rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Footer content can go here */}
          <div>
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>Our Mission</h3>
            <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
              Created by Coppell High School students for the 2025 TSA Webmaster Competition.
            </p>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '2px solid var(--ink-dim)',
          fontSize: '0.9rem',
          opacity: 0.7
        }}>
          © 2025 Coppell Community Archive — Built for TSA
        </div>
      </footer>

      <style>{`
        @media (max-width: 1100px) {
          div[style*="gridTemplateColumns: 2.3fr 1.7fr"] {
            grid-template-columns: minmax(0, 1.7fr) minmax(0, 1.5fr) !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: 2.3fr 1.7fr"],
          div[style*="grid-template-columns: minmax(0, 1.7fr) minmax(0, 1.5fr)"] {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}



