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
              <button className="btn wire">READ STORY →</button>
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
