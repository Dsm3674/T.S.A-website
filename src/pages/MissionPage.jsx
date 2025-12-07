import React from "react";

export default function MissionPage() {
  return (
    <div className="page mission">

      <header className="page-head fade-in">
        <h2 className="xxl skew">MISSION</h2>
        <p className="kicker">why this archive exists</p>
      </header>

      <section className="slab fade-in-up">
        <div className="eyebrow">PURPOSE</div>
        <h3 className="display">A Living Community Ledger</h3>
        <p className="lead">
          The Coppell Archive is a student-built project for TSA that treats a
          website like a neighborhood bulletin board: loud, layered, and
          unapologetically human. It gathers organizations, stories, and places
          that show how Coppell cares for its people.
        </p>
      </section>

      <section className="slab mission-grid">
        <div className="mission-card fade-in-up delay-1">
          <div className="eyebrow">ORGANIZATIONS</div>
          <h4>Anchors, Not Ads</h4>
          <p>
            We highlight groups like Coppell Farmers Market, NoteLove,
            Metrocrest Services, and Neighbors In Need as anchors of daily
            life. These organizations reflect food access, youth mentorship,
            mutual aid, and community support systems.
          </p>
        </div>

        <div className="mission-card fade-in-up delay-2">
          <div className="eyebrow">PEOPLE</div>
          <h4>Neighbors First</h4>
          <p>
            Each map pin and story points to real people—volunteers stocking
            shelves, teens tuning instruments, neighbors organizing meal
            trains, and families meeting at the market before busy weeks.
          </p>
        </div>

        <div className="mission-card fade-in-up delay-3">
          <div className="eyebrow">DESIGN</div>
          <h4>Brutalist On Purpose</h4>
          <p>
            Our bold, blocky layout mirrors a real bulletin board: layers of
            posters, handwritten notes, and overlapping events capturing the
            messy, creative energy of a city that shows up.
          </p>
        </div>
      </section>

      <section className="slab fade-in-up">
        <div className="eyebrow">WHAT WE REPRESENT</div>
        <h3 className="display">A Community That Shows Up</h3>
        <p className="lead">
          Coppell is special because it is built on connection. Growing up here
          means learning from diverse neighbors, discovering new experiences,
          and seeing how people support one another. This archive preserves that
          feeling for anyone who visits.
        </p>
      </section>

    </div>
  );
}


