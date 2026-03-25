import React from "react";



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Info */}
        <div className="footer-brand">
          <img
            src="https://images.unsplash.com/photo-1549924231-f129b911e442"
            alt="logo"
            className="footer-logo"
          />
          <h2>Sasikumar</h2>
          <p>Full Stack Developer creating modern and responsive web applications.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3>Services</h3>
          <p>Web Development</p>
          <p>Mobile App Development</p>
          <p>UI/UX Design</p>
          <p>E-Commerce Solutions</p>
          <p>SEO Optimization</p>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get latest updates and project notifications.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 Sasikumar | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;