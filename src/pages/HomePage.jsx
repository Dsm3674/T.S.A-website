import React, { useEffect, useRef } from "react";

export default function HomePage({ setCurrentPage }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let raf, t = 0;

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
          <p className="hero-kicker">
             Data-driven — built for TSA
          </p>
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
          </div>
        </div>
      </section>

      <section className="stat-grid">
        {[
          { num: "100+", label: "STORIES" },
          { num: "30+", label: "YEARS" },
          { num: "1000+", label: "VOICES" },
          { num: "5", label: "ERAS" },
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
            desc: "Scroll decades with horizontal inertia",
            page: "timeline",
          },
          {
            title: "COMMUNITY MAP",
            desc: "Click noir map pins to unlock stories",
            page: "map",
          },
        ].map((item, i) => (
          <button
            key={i}
            className={`split-card tilt-${i === 0 ? "left" : "right"}`}
            onClick={() => setCurrentPage(item.page)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>OPEN →</span>
          </button>
        ))}
      </section>
    </div>
  );
}
