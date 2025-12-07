import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-about">
          <h4>About This Project</h4>
          <p>
            Built by Coppell High School students for the 2025 TSA Webmaster competition. 
            Our goal is to highlight real community organizations, mutual aid groups, and 
            the people who shape Coppell every day.
          </p>
        </div>

        <div className="footer-links">
          <h4>Featured Organizations</h4>
          <ul>
            <li><a href="https://coppellfarmersmarket.org/" target="_blank">Coppell Farmers Market</a></li>
            <li><a href="https://www.notelove.org/" target="_blank">NoteLove</a></li>
            <li><a href="https://metrocrestservices.org/" target="_blank">Metrocrest Services</a></li>
            <li><a href="https://www.instagram.com/neighbors_in_need_/" target="_blank">Neighbors In Need</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Coppell, TX — Student Webmaster Team</p>
          <p>Email: <a href="mailto:coppellwebteam@gmail.com">coppellwebteam@gmail.com</a></p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Coppell Community Archive — Built for TSA</p>
      </div>
    </footer>
  );
}
