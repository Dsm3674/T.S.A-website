import React, { useEffect, useRef } from "react";
import metrocrestImg from "../assets/metrocrest.jpg";
import noteloveImg from "../assets/notelove.jpg";
import farmersImg from "../assets/coppell-farmers-market.jpg";
import neighborsInNeedImg from "../assets/neighbors-in-need.jpg";
import Footer from "../components/Footer";

export default function HomePage({ setCurrentPage }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      c.width = window.innerWidth;
      c.height = Math.max(560, window.innerHeight * 0.8);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, c.width, c.height);

      for (let i = 0; i < 120; i++) {
        const x =
          c.width / 2 +
          Math.sin(t * 1.3 + i * 0.21) * (c.width * 0.25) +
          Math.sin(t * 0.7 + i) * 30;

        const y =
          c.height / 2 +
          Math.cos(t * 1.1 + i * 0.17) * (c.height * 0.18) +
          Math.cos(t * 0.9 + i) * 20;

        const r = 1.2 + Math.sin(t * 2 + i) * 1;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${(i * 6 + t * 120) % 360}, 90%, ${
          40 + (i % 2) * 20
        }%, 0.14)`;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* MAIN PAGE WRAPPER */}
      <div className="page home page-enter page-enter-active">
        
        {/* HERO SECTION */}
        <section className="hero reveal">
          <canvas ref={canvasRef} className="hero-canvas" />
          <div className="hero-inner">
            <h1 className="hero-title">
              Coppell <span className="outline">ARCHIVE</span>
            </h1>
            <p className="hero-kicker">Showing the Community</p>

            <div className="hero-cta reveal delay-1">
              <button
                className="btn slab"
                onClick={() => setCurrentPage("timeline")}
              >
                EXPLORE TIMELINE
              </button>

              <button className="btn wire" onClick={() => setCurrentPage("map")}>
                OPEN MAP
              </button>

              <button
                className="btn wire secondary"
                onClick={() => setCurrentPage("mission")}
              >
                WHY WE EXIST
              </button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stat-grid">
          {[
            { num: "100+", label: "STORIES GATHERED" },
            { num: "10K+", label: "NEIGHBORS CONNECTED" },
            { num: "4", label: "ANCHOR ORGS FEATURED" },
          ].map((s, i) => (
            <div
              key={i}
              className={`stat-card skew-${(i % 3) + 1} reveal delay-${i + 1}`}
            >
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </section>

        {/* SPLIT CTA */}
        <section className="split-cta">
          {[
            {
              title: "INTERACTIVE TIMELINE",
              desc: "Scroll through eras of growth, art, and mutual aid in Coppell.",
              page: "timeline",
            },
            {
              title: "COMMUNITY MAP",
              desc: "Click noir pins to jump from farmers market mornings to music nights.",
              page: "map",
            },
          ].map((item, i) => (
            <button
              key={i}
              className={`split-card ${
                i === 0 ? "tilt-left" : "tilt-right"
              } reveal delay-${i + 1}`}
              onClick={() => setCurrentPage(item.page)}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>OPEN →</span>
            </button>
          ))}
        </section>

        {/* PEOPLE SECTION */}
        <section className="slab people-section reveal">
          <div className="eyebrow">THE PEOPLE OF COPPELL</div>
          <h3 className="display">Why We Are A Community</h3>
          <p className="lead">
            Coppell is more than streets and buildings...
          </p>

          <div className="people-grid">
            <div className="people-card gift-card reveal delay-1">
              <div className="people-tag">Market Volunteer</div>
              <h4>Saturday Regular</h4>
              <p>A resident who knows every stall...</p>
            </div>

            <div className="people-card gift-card reveal delay-2">
              <div className="people-tag">Youth Leader</div>
              <h4>NoteLove Mentor</h4>
              <p>A teen musician offering lessons...</p>
            </div>

            <div className="people-card gift-card reveal delay-3">
              <div className="people-tag">Neighbor In Action</div>
              <h4>Metrocrest Advocate</h4>
              <p>Helping families find stability...</p>
            </div>

            <div className="people-card gift-card reveal delay-4">
              <div className="people-tag">Mutual Aid Organizer</div>
              <h4>Neighbors In Need</h4>
              <p>Coordinating rides, groceries & support...</p>
            </div>
          </div>
        </section>

        {/* ANCHOR ORGS */}
        <section className="slab reveal">
          <div className="eyebrow">COMMUNITY RESOURCES</div>
          <h3 className="display">Anchor Organizations in Coppell</h3>
          <p className="lead">
            This archive spotlights real community partners...
          </p>

          <div className="spotlight-grid" style={{ marginTop: "2rem" }}>
            {[
              {
                name: "Coppell Farmers Market",
                img: farmersImg,
                link: "https://coppellfarmersmarket.org/",
                desc: "Local growers and artisans...",
              },
              {
                name: "NoteLove",
                img: noteloveImg,
                link: "https://www.notelove.org/",
                desc: "Youth-led free music lessons...",
              },
              {
                name: "Metrocrest Services",
                img: metrocrestImg,
                link: "https://metrocrestservices.org/",
                desc: "Food, housing, senior care...",
              },
              {
                name: "Neighbors In Need",
                img: neighborsInNeedImg,
                link: "https://www.instagram.com/neighbors_in_need_/",
                desc: "Mutual aid across Coppell...",
              },
            ].map((org, i) => (
              <a
                key={i}
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`spotlight-card reveal delay-${i + 1}`}
              >
                <img src={org.img} className="spotlight-img" alt={org.name} />
                <h4>{org.name}</h4>
                <p className="lead" style={{ fontSize: "0.95rem" }}>
                  {org.desc}
                </p>
              </a>
            ))}
          </div>
        </section>

      </div>

     
      <Footer />
    </>
  );
}


