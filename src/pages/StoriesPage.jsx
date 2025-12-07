import React from "react";
import farmersImg from "../assets/coppell-farmers-market.jpg";
import noteloveImg from "../assets/notelove.jpg";
import metrocrestImg from "../assets/metrocrest.jpg";
import neighborsInNeedImg from "../assets/neighbors-in-need.jpg";
import historyImg from "../assets/Document.jpg";

export default function StoriesPage() {
  const stories = [
    {
      title: "FIRST BUSINESS OPENS",
      year: 1840,
      excerpt: "A small corner café becomes the unofficial meeting spot.",
      img: historyImg,
      link: "https://www.coppelltx.gov/610/History-of-Coppell",
    },

    {
      title: "Coppell Farmers Market Becomes a Weekly Ritual",
      year: 2009,
      excerpt:
        "Residents gather every Saturday to support local growers, makers, and family-owned businesses.",
      link: "https://coppellfarmersmarket.org/",
      img: farmersImg,
    },
    {
      title: "NoteLove Brings Free Music Lessons to Local Students",
      year: 2019,
      excerpt:
        "Youth volunteers turn practice rooms and living rooms into studios, expanding access to music education.",
      link: "https://www.notelove.org/",
      img: noteloveImg,
    },
    {
      title: "Metrocrest Services Expands Support in Coppell",
      year: 2023,
      excerpt:
        "Food pantry lines, housing questions, and senior needs all meet a regional safety net headquartered nearby.",
      link: "https://metrocrestservices.org/",
      img: metrocrestImg,
    },
    {
      title: "Neighbors In Need Rallies Mutual Aid",
      year: 2024,
      excerpt:
        "Residents coordinate grocery drops, rides, and support so families never feel alone.",
      link: "https://www.instagram.com/neighbors_in_need_/",
      img: neighborsInNeedImg,
    },
  ];

  return (
    <div className="page stories page-enter page-enter-active">

      <header className="page-head fade-in">
        <h2 className="xxl skew">STORIES</h2>
        <p className="kicker">Raw narratives — bold layout — living history</p>
      </header>

      <div className="stories-list">
        {stories.map((s, i) => (
          <div
            key={i}
            className={`story-row reveal fade-in-up tilt-hover delay-${(i % 5) + 1} ${
              i % 2 ? "tilt-r" : "tilt-l"
            }`}
          >
            <div className="story-card slab pop-hover">
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

            <div className="story-img">
              <img
                src={s.img}
                alt={s.title}
                className={`story-photo ${
                  s.img === historyImg ? "sepia" : "clean"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



