import React from "react";

export default function StoriesPage() {
  const stories = [
    {
      title: "FIRST BUSINESS OPENS",
      year: 2025,
      excerpt: "How a corner diner began the boom.",
    },
    {
      title: "NONPROFIT ERA",
      year: 2025,
      excerpt: "Mutual aid takes shape and scales.",
    },
    {
      title: "10K MILESTONE",
      year: 2015,
      excerpt: "Population hits 10K; main street pops.",
    },
    {
      title: "ARTS TAKE STAGE",
      year: 2025,
      excerpt: "art.",
    },
    // NEW: stories explicitly tied to the three featured resources
    {
      title: "Coppell Farmers Market Becomes a Weekly Ritual",
      year: 2009,
      excerpt:
        "Residents gather every Saturday to support local growers, makers, and family-owned businesses.",
      link: "https://coppellfarmersmarket.org/",
    },
    {
      title: "NoteLove Brings Free Music Lessons to Local Students",
      year: 2019,
      excerpt:
        "Youth volunteers turn practice rooms and living rooms into studios, expanding access to music education.",
      link: "https://www.notelove.org/",
    },
    {
      title: "Metrocrest Services Expands Support in Coppell",
      year: 2023,
      excerpt:
        "Food pantry lines, housing questions, and senior needs all meet a regional safety net headquartered nearby.",
      link: "https://metrocrestservices.org/",
    },
  ];

  return (
    <div className="page stories">
      <header className="page-head">
        <h2 className="xxl skew">STORIES</h2>
        <p className="kicker">Raw narratives, bold layout, heavy grid</p>
      </header>

      <div className="stories-list">
        {stories.map((s, i) => (
          <div key={i} className={`story-row tilt-${i % 2 ? "r" : "l"}`}>
            <div className="story-card slab">
              <div className="eyebrow">{s.year}</div>
              <h3 className="display">{s.title}</h3>
              <p className="lead">{s.excerpt}</p>
              {s.link ? (
                <a
                  className="btn wire"
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VISIT RESOURCE →
                </a>
              ) : (
                <button className="btn wire">READ STORY →</button>
              )}
            </div>
            <div className="story-img ghost">
              <span>[ Image Placeholder ]</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
