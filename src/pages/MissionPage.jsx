import React from "react";
import Footer from "../components/Footer";

export default function MissionPage() {
  return (
    <div className="page mission">

      {/* HEADER */}
      <header className="page-head fade-in">
        <h2 className="xxl skew">MISSION</h2>
        <p className="kicker">why this archive exists</p>
      </header>

      {/* SECTION 1 */}
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

      {/* SECTION 2 – THE THREE PILLARS */}
      <section className="slab mission-grid">

        <div className="mission-card fade-in-up delay-1">
          <div className="eyebrow">ORGANIZATIONS</div>
          <h4>Anchors, Not Ads</h4>
          <p>
            We highlight groups like Coppell Farmers Market, NoteLove,
            Metrocrest Services, and Neighbors In Need as pillars of daily life.
            These aren’t sponsors — they’re community anchors. Together, they
            reflect food access, youth mentorship, mutual aid, and wraparound
            support that help Coppell stay connected and resilient.
          </p>
        </div>

        <div className="mission-card fade-in-up delay-2">
          <div className="eyebrow">PEOPLE</div>
          <h4>Neighbors First</h4>
          <p>
            Every pin on our map represents real people: volunteers packing
            grocery bags, teens offering music lessons, families supporting
            one another during hard weeks, coaches, teachers, artists, and 
            local workers who make daily life feel personal rather than distant.
            Coppell’s community is not abstract — it is built on human stories.
          </p>
        </div>

        <div className="mission-card fade-in-up delay-3">
          <div className="eyebrow">DESIGN</div>
          <h4>Brutalist On Purpose</h4>
          <p>
            Our bold, blocky design mirrors a living bulletin board: layers of
            posters, handwritten notes, maps, announcements, and reminders — 
            the kind of materials you see in real community spaces. The design 
            celebrates honesty, texture, and the raw energy of a city that shows up.
          </p>
        </div>
      </section>

      {/* NEW SECTION – WHY COPPELL IS SPECIAL */}
      <section className="slab fade-in-up">
        <div className="eyebrow">WHY COPPELL IS SPECIAL</div>
        <h3 className="display">A City Built on Connection</h3>
        <p className="lead">
          Coppell is more than a suburb — it is a community shaped by moments of 
          showing up for one another. Growing up here means meeting people who 
          give their time, skills, and energy so others can succeed. It means
          sharing culture, learning from diverse neighbors, discovering new
          opportunities, and seeing how small acts of kindness ripple outward.
        </p>

        <p className="lead">
          From weekend markets to youth-led initiatives, and from cultural 
          celebrations to mutual aid groups, Coppell stands out because its 
          identity is rooted in participation. Everyone contributes something,
          and everyone benefits from the shared effort.
        </p>
      </section>

      {/* NEW SECTION – WHY THIS ARCHIVE MATTERS */}
      <section className="slab fade-in-up">
        <div className="eyebrow">WHY THIS ARCHIVE MATTERS</div>
        <h3 className="display">Preserving What Makes Us Who We Are</h3>
        <p className="lead">
          For students like us, creating this archive is a way to honor the 
          community that shaped our childhood. We built it so future residents, 
          volunteers, and students can understand the heart of Coppell — not 
          through statistics or city brochures, but through real community stories.
        </p>

        <p className="lead">
          This project captures the culture, generosity, and local pride that make
          Coppell feel like home. It is a snapshot of the people and places that 
          gave us opportunities, supported us, and taught us what it means to 
          belong.
        </p>
      </section>

      {/* SECTION – FINAL MESSAGE */}
      <section className="slab fade-in-up">
        <div className="eyebrow">WHAT WE REPRESENT</div>
        <h3 className="display">A Community That Shows Up</h3>
        <p className="lead">
          Coppell is special because it is built on connection. Growing up here
          means learning from diverse neighbors, discovering new experiences,
          and seeing how people support one another. This archive preserves that
          feeling for anyone who visits — now and in the future.
        </p>
      </section>

      <Footer />
    </div>
  );
}


