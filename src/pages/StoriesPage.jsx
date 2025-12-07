import React from "react";
import farmersImg from "../assets/coppell-farmers-market.jpg";
import noteloveImg from "../assets/notelove.jpg";
import metrocrestImg from "../assets/metrocrest.jpg";
import neighborsInNeedImg from "../assets/neighbors-in-need.jpg";
import historyImg from "../assets/Document.jpg";
import Footer from "../components/Footer";

export default function StoriesPage() {
  const stories = [
    {
      title: "FIRST BUSINESS OPENS",
      year: 1840,
      excerpt: "A small corner café becomes the unofficial meeting spot for early settlers.",
      img: historyImg,
      link: "https://www.coppelltx.gov/610/History-of-Coppell",
    },
    {
      title: "Farmers Market Becomes a Ritual",
      year: 2009,
      excerpt: "Residents gather every Saturday to support local growers and family-owned businesses.",
      link: "https://coppellfarmersmarket.org/",
      img: farmersImg,
    },
    {
      title: "NoteLove Brings Free Music",
      year: 2019,
      excerpt: "Youth volunteers turn practice rooms and living rooms into studios.",
      link: "https://www.notelove.org/",
      img: noteloveImg,
    },
    {
      title: "Metrocrest Expands Support",
      year: 2023,
      excerpt: "Food pantry lines and housing needs meet a regional safety net.",
      link: "https://metrocrestservices.org/",
      img: metrocrestImg,
    },
    {
      title: "Neighbors In Need Rallies",
      year: 2024,
      excerpt: "Residents coordinate grocery drops and rides so families never feel alone.",
      link: "https://www.instagram.com/neighbors_in_need_/",
      img: neighborsInNeedImg,
    },
  ];

  return (
    <div className="page stories">
      <header className="page-head fade-in">
        <h2 className="xxl skew">STORIES</h2>
        <p className="kicker">Raw narratives — bold layout — living history</p>
      </header>

      <div className="stories-list">
        {stories.map((s, i) => (
          <div
            key={`story-${i}`}
            // Added fade-in-up class here so the whole row animates in
            className={`story-row fade-in-up delay-${(i % 3) + 1}`}
          >
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

            <div className="story-img">
              <img
                src={s.img}
                alt={s.title}
                className="story-photo"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

