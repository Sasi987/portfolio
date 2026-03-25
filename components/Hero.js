import React from "react";


function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hi, I'm <span>Sasikumar C</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <p>
          I create modern, scalable and high-performance web applications
          with beautiful user experiences.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View Projects</button>
          <button className="btn-outline ">Download Resume</button>
        </div>
      </div>

      <div className="hero-img">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="developer"
        />
      </div>
    </section>
  );
}

export default Hero;
