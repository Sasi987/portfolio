import React from "react";


function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">
        
        {/* Left Image */}
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="contact"
          />
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <p>📧 Email: returnitechsolution@gmail.com</p>
            <p>📱 Phone: +91 6382694335</p>
            <p>📍 Location: Tamil Nadu, India</p>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;