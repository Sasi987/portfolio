import React from "react";


function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-image">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="About Me"
            />
          </div>
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <h3>Creative Full Stack Developer</h3>
          <p>
            I am a passionate developer who enjoys building modern,
            responsive and user-friendly web applications. I love turning
            complex problems into simple and beautiful solutions.
          </p>

          <div className="about-info">
            <div><strong>Name:</strong> Sasikumar C</div>
            <div><strong>Email:</strong>returnitechsolution@gmail.com</div>
            <div><strong>Experience:</strong> Fresher</div>
            <div><strong>Location:</strong> sholinganallur</div>
          </div>

          <button className="about-btn">Download CV</button>
        </div>

      </div>
    </section>
  );
}

export default About;