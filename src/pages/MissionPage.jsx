import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function MissionPage({ setCurrentPage }) {
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Crucial: Scroll to top immediately when page is clicked
    window.scrollTo(0, 0);

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

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Stats Data
  const stats = [
    { number: '100+', label: 'Stories Collected', color: '#ff2a6d', target: 'stories' },
    { number: '4', label: 'Anchor Orgs', color: '#05d9e8', target: 'archive' },
    { number: '10K+', label: 'Neighbors Connected', color: '#d1f7ff', target: 'map' },
    { number: '2025', label: 'TSA Competition', color: '#ff2a6d', target: 'reference' }
  ];

  return (
    <div className="page mission">

      {/* ANIMATED HEADER SECTION */}
      <header className="page-head fade-in reveal" style={{
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h2 className="xxl skew" style={{
          position: 'relative',
          display: 'inline-block',
          animation: 'titleGlitch 5s infinite'
        }}>
          MISSION
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '100%',
            height: '5px',
            background: 'linear-gradient(90deg, #ff2a6d, #05d9e8, #d1f7ff)',
            animation: 'slideWidth 1.5s ease'
          }} />
        </h2>
        <p className="kicker" style={{
          animation: 'fadeInUp 1s ease 0.3s both'
        }}>
          why this archive exists
        </p>

        {/* Animated corner accents */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100px',
          background: '#ff2a6d',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          opacity: 0.1,
          animation: 'pulse 3s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '80px',
          height: '80px',
          background: '#05d9e8',
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
          opacity: 0.1,
          animation: 'pulse 3s ease-in-out infinite 1.5s'
        }} />
      </header>

      {/* HERO STATS SECTION - INTERACTIVE CLICKABLE CARDS */}
      <section className="slab fade-in-up reveal" style={{
        background: 'var(--panel)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255, 42, 109, 0.03) 30px, rgba(255, 42, 109, 0.03) 60px)',
          transform: `translateY(${scrollY * 0.1}px)`,
          pointerEvents: 'none'
        }} />

        <div className="eyebrow" style={{ position: 'relative', zIndex: 2 }}>BY THE NUMBERS</div>
        <h3 className="display" style={{ 
          marginBottom: '2rem',
          position: 'relative',
          zIndex: 2
        }}>
          Our Impact in Metrics
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 2
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentPage(stat.target)}
              style={{
                border: '4px solid var(--ink)',
                padding: '1.5rem',
                textAlign: 'center',
                background: 'var(--bg)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                animation: `popIn 0.6s ease ${idx * 0.15}s both`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) rotate(-2deg)';
                e.currentTarget.style.boxShadow = `16px 16px 0 ${stat.color}`;
                e.currentTarget.style.borderColor = stat.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--ink)';
              }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '900',
                lineHeight: 1,
                color: stat.color,
                marginBottom: '0.5rem',
                position: 'relative',
                zIndex: 2
              }}>{stat.number}</div>
              <div style={{
                fontSize: '0.95rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                position: 'relative',
                zIndex: 2
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PURPOSE SECTION WITH ANIMATION */}
      <section className="slab fade-in-up reveal" style={{
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="eyebrow">PURPOSE</div>
        <h3 className="display" style={{
          position: 'relative',
          display: 'inline-block'
        }}>
          A Living Community Ledger
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            left: 0,
            width: '0%',
            height: '4px',
            background: '#ff2a6d',
            animation: 'expandWidth 2s ease forwards'
          }} />
        </h3>
        <p className="lead" style={{
          marginTop: '1.5rem',
          animation: 'fadeInUp 1s ease 0.3s both'
        }}>
          The Coppell Archive is a student-built project for TSA that treats a
          website like a neighborhood bulletin board: loud, layered, and
          unapologetically human. It gathers organizations, stories, and places
          that show how Coppell cares for its people.
        </p>

        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          borderLeft: '6px solid #ff2a6d',
          background: 'rgba(255, 42, 109, 0.05)',
          fontStyle: 'italic',
          fontSize: '1.1rem',
          animation: 'slideRight 1s ease 0.5s both'
        }}>
          "This isn't just a website — it's a digital monument to the people who make Coppell home."
        </div>
      </section>

      {/* THE THREE PILLARS - INTERACTIVE NAV BUILT IN */}
      <section className="slab mission-grid" style={{
        background: 'var(--panel)',
        position: 'relative'
      }}>
        <div style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>
          <div className="eyebrow">CORE PRINCIPLES</div>
          <h3 className="display">The Three Pillars</h3>
        </div>

        {/* PILLAR 1: ORGANIZATIONS */}
        <div
          className={`mission-card fade-in-up reveal`}
          style={{
            position: 'relative',
            padding: '2rem',
            transition: 'all 0.4s ease',
            border: activeCard === 1 ? '4px solid #ff2a6d' : '3px solid var(--ink)',
            cursor: 'pointer'
          }}
          onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
        >
          <div style={{ fontSize: '2rem', opacity: 0.3 }}>🏛️</div>
          <div className="eyebrow">ORGANIZATIONS</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: activeCard === 1 ? '#ff2a6d' : 'inherit' }}>Anchors, Not Ads</h4>
          <p>We highlight groups like NoteLove and Metrocrest as pillars of daily life. These aren't sponsors — they're community anchors.</p>
          <div style={{ maxHeight: activeCard === 1 ? '200px' : '0', overflow: 'hidden', transition: '0.5s ease' }}>
            <button className="btn wire" onClick={(e) => { e.stopPropagation(); setCurrentPage('archive'); }} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem' }}>Open Archive →</button>
          </div>
        </div>

        {/* PILLAR 2: PEOPLE */}
        <div
          className={`mission-card fade-in-up reveal delay-1`}
          style={{
            position: 'relative',
            padding: '2rem',
            transition: 'all 0.4s ease',
            border: activeCard === 2 ? '4px solid #ff2a6d' : '3px solid var(--ink)',
            cursor: 'pointer'
          }}
          onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
        >
          <div style={{ fontSize: '2rem', opacity: 0.3 }}>👥</div>
          <div className="eyebrow">PEOPLE</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: activeCard === 2 ? '#ff2a6d' : 'inherit' }}>Neighbors First</h4>
          <p>Every pin on our map represents real people: volunteers, music teachers, and families supporting one another.</p>
          <div style={{ maxHeight: activeCard === 2 ? '200px' : '0', overflow: 'hidden', transition: '0.5s ease' }}>
            <button className="btn wire" onClick={(e) => { e.stopPropagation(); setCurrentPage('map'); }} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem' }}>Open Map →</button>
          </div>
        </div>

        {/* PILLAR 3: DESIGN */}
        <div
          className={`mission-card fade-in-up reveal delay-2`}
          style={{
            position: 'relative',
            padding: '2rem',
            transition: 'all 0.4s ease',
            border: activeCard === 3 ? '4px solid #ff2a6d' : '3px solid var(--ink)',
            cursor: 'pointer'
          }}
          onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
        >
          <div style={{ fontSize: '2rem', opacity: 0.3 }}>🎨</div>
          <div className="eyebrow">DESIGN</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: activeCard === 3 ? '#ff2a6d' : 'inherit' }}>Brutalist On Purpose</h4>
          <p>Our bold, blocky design mirrors a living bulletin board: layers of posters and raw energy.</p>
          <div style={{ maxHeight: activeCard === 3 ? '200px' : '0', overflow: 'hidden', transition: '0.5s ease' }}>
            <button className="btn wire" onClick={(e) => { e.stopPropagation(); setCurrentPage('stories'); }} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginTop: '1rem' }}>See Design Story →</button>
          </div>
        </div>
      </section>

      {/* WHY COPPELL IS SPECIAL SECTION */}
      <section className="slab fade-in-up reveal" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, var(--panel) 0%, rgba(255, 42, 109, 0.05) 100%)'
      }}>
        <div className="eyebrow">WHY COPPELL IS SPECIAL</div>
        <h3 className="display">A City Built on Connection</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <p className="lead">Coppell is more than a suburb — it is a community shaped by moments of showing up for one another. Growing up here means meeting people who give their time and energy.</p>
          <p className="lead">From weekend markets to youth-led initiatives, Coppell stands out because its identity is rooted in participation. Everyone contributes, and everyone benefits.</p>
        </div>
      </section>

      {/* FINAL MESSAGE - BUTTONS FIXED */}
      <section className="slab fade-in-up reveal" style={{
        textAlign: 'center',
        background: 'var(--bg)',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255, 42, 109, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.3, pointerEvents: 'none' }} />

        <div className="eyebrow" style={{ position: 'relative', zIndex: 2 }}>WHAT WE REPRESENT</div>
        <h3 className="display" style={{ marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
          A Community That Shows Up
        </h3>
        
        <p className="lead" style={{ maxWidth: '800px', margin: '0 auto 2rem', position: 'relative', zIndex: 2 }}>
          Coppell is special because it is built on connection. Learning from diverse neighbors and supporting one another is what makes us home.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem', position: 'relative', zIndex: 2 }}>
          <button 
            className="btn slab"
            onClick={() => setCurrentPage('stories')}
          >
            EXPLORE STORIES
          </button>
          <button 
            className="btn wire"
            onClick={() => setCurrentPage('map')}
          >
            VIEW MAP
          </button>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes titleGlitch {
          0%, 90%, 100% { transform: translate(0); }
          91% { transform: translate(-2px, 2px); }
          92% { transform: translate(2px, -2px); }
        }
        @keyframes slideWidth { from { width: 0%; } to { width: 100%; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes expandWidth { from { width: 0%; } to { width: 100%; } }
        .show { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </div>
  );
}
