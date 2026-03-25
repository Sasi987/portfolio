import React from "react";


function Project() {
  const projectData = [
    {
      title: "E-Commerce Website",
      desc: "A full-featured shopping platform with cart and secure checkout.",
      tech: "React, Node.js, MongoDB",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      link: "#"
    },
    {
      title: "AI Chat Application",
      desc: "Real-time smart chat app with AI-powered responses.",
      tech: "React, Firebase, OpenAI API",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      link: "#"
    },
    {
      title: "Task Management System",
      desc: "Organize daily work with drag-and-drop task features.",
      tech: "React, Express, MySQL",
      img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      link: "#"
    },
    {
      title: "Portfolio Website",
      desc: "Personal responsive portfolio with animations and modern UI.",
      tech: "React, CSS3, Framer Motion",
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      link: "#"
    },
    {
      title: "Online Learning Platform",
      desc: "Course platform with video streaming and progress tracking.",
      tech: "React, Django, PostgreSQL",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      link: "#"
    },
    {
      title: "Food Delivery App",
      desc: "Order food online with live tracking and payment gateway.",
      tech: "React Native, Node.js, Stripe",
      img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={project.img} alt="project" />
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span className="tech">{project.tech}</span>
              <a href={project.link} className="demo-btn">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;