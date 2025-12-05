// File: MissionPage.jsx
import React from 'react';
import './brutalist.css';

export default function MissionPage() {
  return (
    <div className="page">
      <header className="page-head">
        <h1 className="display jag-1">Our Mission</h1>
      </header>
      <main className="page-content">
        <section className="slab">
          <h2 className="lead">Purpose</h2>
          <p>
            The Coppell Archive was created to preserve and showcase the spirit of our community—its stories,
            organizations, and the people who shape our identity. We bridge past and present to inspire the future.
          </p>
        </section>
        <section className="slab">
          <h2 className="lead">Our Values</h2>
          <ul>
            <li><strong>Inclusivity</strong>: We embrace diverse voices across Coppell’s neighborhoods and cultures.</li>
            <li><strong>Community</strong>: Our archive is built for and by the people of Coppell.</li>
            <li><strong>Education</strong>: We promote local awareness through storytelling and shared knowledge.</li>
            <li><strong>Preservation</strong>: Documenting community growth through history and collective memory.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

// File: FlipCard.jsx
import React from 'react';
import './flipcard.css';

export default function FlipCard({ front, back }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
}

// File: flipcard.css
.flip-card {
  background-color: transparent;
  width: 250px;
  height: 150px;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: 2px solid black;
  background: white;
}
.flip-card-back {
  transform: rotateY(180deg);
  background: #f0f0f0;
}

// File: ScrollFadeIn.jsx
import React, { useEffect, useRef, useState } from 'react';
import './scrollfade.css';

export default function ScrollFadeIn({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-section ${visible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
}

// File: scrollfade.css
.fade-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

// File: MapPage.css (or append to brutalist.css)
.pin-active {
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

.map-card.fade-in {
  animation: fadeInCard 0.4s ease forwards;
}
@keyframes fadeInCard {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.grid-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
  animation: shimmer 5s linear infinite;
}
@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
