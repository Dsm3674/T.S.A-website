import React from "react";

export default function Footer() {
  return (
    <footer className="footer brutal-footer mx-panel-stripes">
      <div className="footer-inner">

        <div className="footer-section">
          <h3 className="footer-title bleed">ABOUT THIS PROJECT</h3>
          <p className="footer-text">
            Created by Coppell High School students for the 2025 TSA Webmaster Competition.
            Built to spotlight community organizations, history, and the people who shape Coppell.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title bleed">FEATURED GROUPS</h3>
          <ul className="footer-links">
            <li><a href="https://coppellfarmersmarket.org">Coppell Farmers Market</a></li>
            <li><a href="https://notelove.org">NoteLove</a></li>
            <li><a href="https://metrocrestservices.org">Metrocrest Services</a></li>
            <li><a href="#">Neighbors In Need</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title bleed">CONTACT US</h3>
          <p className="footer-text">
            Coppell, TX — Student Webmaster Team<br />
            <a href="mailto:coppellwebteam@gmail.com">coppellwebteam@gmail.com</a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Coppell Community Archive — Built for TSA
      </div>
    </footer>
  );
}

