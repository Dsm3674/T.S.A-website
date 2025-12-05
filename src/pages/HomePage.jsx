import React, { useEffect, useRef } from "react";
import metrocrestImg from "../assets/metrocrest.jpg";
import noteloveImg from "../assets/notelove.jpg";
import farmersImg from "../assets/coppell-farmers-market.jpg";

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
    <div className="page home">
      <section className="hero">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-inner">
          <h1 className="hero-title">
            Coppell <span className="outline">ARCHIVE</span>
          </h1>
          <p className="hero-kicker">Showing the Community</p>
          <div className="hero-cta">
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

      <section className="stat-grid">
        {[
          { num: "100+", label: "STORIES GATHERED" },
          { num: "10K+", label: "NEIGHBORS CONNECTED" },
          { num: "3", label: "ANCHOR ORGS FEATURED" },
        ].map((s, i) => (
          <div key={i} className={`stat-card skew-${(i % 3) + 1}`}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

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
            className={`split-card ${i === 0 ? "tilt-left" : "tilt-right"}`}
            onClick={() => setCurrentPage(item.page)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>OPEN →</span>
          </button>
        ))}
      </section>

      <section className="slab people-section">
        <div className="eyebrow">THE PEOPLE OF COPPELL</div>
        <h3 className="display">Why We Are A Community</h3>
        <p className="lead">
          Coppell is more than streets and buildings. It is farmers waking up
          before dawn, students teaching students, and neighbors organizing
          support when life gets heavy. This archive centers those people.
        </p>

        <div className="people-grid">
          <div className="people-card gift-card">
            <div className="people-tag">Market Volunteer</div>
            <h4>Saturday Regular</h4>
            <p>
              A resident who knows every stall at Coppell Farmers Market and
              remembers your favorite bread.
            </p>
          </div>
          <div className="people-card gift-card gift-card-delay">
            <div className="people-tag">Youth Leader</div>
            <h4>NoteLove Mentor</h4>
            <p>
              A teen musician offering free lessons so younger kids can hear
              themselves on stage someday.
            </p>
          </div>
          <div className="people-card gift-card gift-card-late">
            <div className="people-tag">Neighbor In Action</div>
            <h4>Metrocrest Advocate</h4>
            <p>
              A volunteer helping families find food, housing support, and
              stability when they need it most.
            </p>
          </div>
        </div>
      </section>

      <section className="slab">
        <div className="eyebrow">COMMUNITY RESOURCES</div>
        <h3 className="display">Anchor Organizations in Coppell</h3>
        <p className="lead">
          This archive spotlights real community partners shaping Coppell&apos;s
          everyday life, from food security to youth arts and mutual aid.
        </p>

        <div className="spotlight-grid" style={{ marginTop: "2rem" }}>
          <a
            href="https://coppellfarmersmarket.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="spotlight-card"
          >
            <img
              src={farmersImg}
              className="spotlight-img"
              alt="Coppell Farmers Market"
            />
            <h4>Coppell Farmers Market</h4>
            <p className="lead" style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>
              Local growers, food artisans, and weekend rituals that keep
              Coppell rooted in community.
            </p>
          </a>

          <a
            href="https://www.notelove.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="spotlight-card"
          >
            <img
              src={noteloveImg}
              className="spotlight-img"
              alt="NoteLove"
            />
            <h4>NoteLove</h4>
            <p className="lead" style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>
              A youth-led nonprofit offering free music lessons to students
              across DFW, including Coppell.
            </p>
          </a>

          <a
            href="https://metrocrestservices.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="spotlight-card"
          >
            <img
              src={metrocrestImg}
              className="spotlight-img"
              alt="Metrocrest Services"
            />
            <h4>Metrocrest Services</h4>
            <p className="lead" style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>
              A regional lifeline providing food, housing assistance, senior
              services, and crisis support.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}

