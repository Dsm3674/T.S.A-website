import React, { useState, useRef } from "react";
import Footer from "../components/Footer";
import historyImg from "../assets/Document.jpg"; // Using generic assets for demo

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState(null);
  const scrollRef = useRef(null);

  const eras = [
    {
      id: 1,
      era: "Early Roots",
      years: "1840–1950",
      shortDesc: "Small farming settlement.",
      fullDetails: "Coppell began in 1840 as a small farming settlement originally named Gibbs Station. Early community life centered on one-room schoolhouses, local churches, and family-run cotton/farming operations. It was a quiet, rural existence defined by hard work and close neighborly bonds.",
      img: historyImg
    },
    {
      id: 2,
      era: "Growth & Identity",
      years: "1950–1990",
      shortDesc: "Schools & rapid expansion.",
      fullDetails: "Following the opening of DFW Airport, Coppell transformed from a village to a suburb. Neighborhoods expanded, the school district (CISD) became a major draw for families, and the city officially incorporated. This era defined the 'education-first' identity of the town.",
      img: historyImg
    },
    {
      id: 3,
      era: "Community Era",
      years: "1990–2010",
      shortDesc: "Farmers markets & pride.",
      fullDetails: "As the population boom settled, culture took root. The Coppell Farmers Market was established (2003), youth sports programs exploded, and the Senior Center opened. A culture of connection and hometown pride solidified during these decades.",
      img: historyImg
    },
    {
      id: 4,
      era: "Present Day",
      years: "2010–2025",
      shortDesc: "Mutual aid & modern arts.",
      fullDetails: "Today, Coppell is a diverse, modern city. Initiatives like NoteLove, Neighbors in Need, and the Arts Center highlight a shift towards mutual aid and cultural expression. It is no longer just a bedroom community, but a hub for active, caring citizenship.",
      img: historyImg
    }
  ];

  // Enable drag to scroll
  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    let isDown = true;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const onMouseUp = () => { isDown = false; slider.classList.remove('active'); };
    const onMouseLeave = () => { isDown = false; slider.classList.remove('active'); };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);
  };

  return (
    <div className="page timeline">
      <header className="page-head fade-in">
        <h2 className="xxl skew">TIMELINE</h2>
        <p className="kicker">Scroll to explore • Click for details</p>
      </header>

      {/* Horizontal Scroll Section */}
      <div 
        className="timeline-scroll-container fade-in-up" 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
      >
        <div className="timeline-track">
          {eras.map((item) => (
            <div 
              key={item.id} 
              className={`timeline-card-h ${selectedEra?.id === item.id ? 'is-active' : ''}`}
              onClick={() => setSelectedEra(item)}
            >
              <div className="t-img-box">
                {/* No text inside image anymore */}
                <img src={item.img} alt={item.era} />
              </div>
              <div className="eyebrow">{item.years}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                {item.era}
              </h3>
              <p style={{ opacity: 0.8 }}>{item.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Details Section */}
      <div id="era-details">
        {selectedEra ? (
          <div className="timeline-detail-panel slab">
            <div className="eyebrow">HISTORICAL CONTEXT: {selectedEra.years}</div>
            <h3 className="display">{selectedEra.era}</h3>
            <hr style={{ border: 'none', borderTop: '2px solid var(--ink)', margin: '1.5rem 0' }} />
            <p className="lead">{selectedEra.fullDetails}</p>
            <button 
              className="btn wire" 
              style={{ marginTop: '2rem' }}
              onClick={() => setSelectedEra(null)}
            >
              Close Details
            </button>
          </div>
        ) : (
          <div className="fade-in-up delay-2" style={{ textAlign: 'center', padding: '4rem', opacity: 0.5 }}>
            <p>Select a card above to see what happened during that era.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

