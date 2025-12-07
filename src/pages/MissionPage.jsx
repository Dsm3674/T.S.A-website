import React, { useEffect } from "react";

export default function MissionPage() {

  // Scroll reveal logic
  useEffect(() => {
    const observers = [];

    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const options = {
      threshold: 0.15,
      rootMargin: "0px 0px -20px 0px",
    };

    revealElements.forEach((el) => {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("fade-in-up-active");
            obs.unobserve(el);
          }
        });
      }, options);

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="page mission">

      {/* Header scroll-reveal */}
      <header className="page-head reveal-on-scroll fade-in-up">
        <h2 className="xxl skew">MISSION</h2>
        <p className="kicker">why this archive exists</p>
      </header>

      {/* Purpose section */}
      <section className="slab reveal-on-scroll fade-in-up">
        <div className="eyebrow">PURPOSE</div>
        <h3 className="display">A Living Community Ledger</h3>
        <p className="lead">
          The Coppell Archive is a student-built project for TSA that treats a
          website like a neighborhood bulletin board: loud, layered, and
          unapologetically human. It gathers organizations, stories, and places
          that show how Coppell cares for its people.
        </p>
      </section>

      {/* Mission cards */}
      <section className="slab mission-grid">

        <div className="mission-card reveal-on-scroll fade-in-up delay-1">
          <div className="eyebrow">ORGANIZATIONS</div>
          <h4>Anchors, Not Ads</h4>
          <p>
            We highlight groups like Coppell Farmers Market, NoteLove,
            Metrocrest Services, and Neighbors In Need as anchors of daily
            life, not as sponsors. They represent food, arts, mutual aid, and
            support systems that neighbors rely on.
          </p>
        </div>

        <div className="mission-card reveal-on-scroll fade-in-up delay-2">
          <div className="eyebrow">PEOPLE</div>
          <h4>Neighbors First</h4>
          <p>
            Every map point and story hints at real people: volunteers stocking
            shelves, teens tuning instruments, neighbors organizing meal
            trains, and families meeting at the market before a busy week.
          </p>
        </div>

        <div className="mission-card reveal-on-scroll fade-in-up delay-3">
          <div className="eyebrow">DESIGN</div>
          <h4>Brutalist On Purpose</h4>
          <p>
            The bold, blocky design mirrors a community bulletin board: layered
            posters, overlapping events, and handwritten notes that refuse to be
            quiet.
          </p>
        </div>

      </section>

      {/* Bottom fade-in */}
      <section className="slab reveal-on-scroll fade-in-up">
        <div className="eyebrow">WHAT WE REPRESENT</div>
        <h3 className="display">A Community That Shows Up</h3>
        <p className="lead">
          Coppell represents people showing up for each other, whether that is a
          bag of groceries, a piano lesson, or a ride across town. This archive
          is a snapshot of that spirit, designed so visitors can feel it in both
          the content and the visuals.
        </p>
      </section>

    </div>
  );
}

