import React from "react";


function Service() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive and high-performance websites for businesses.",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    {
      title: "App Development",
      desc: "Cross-platform Android & iOS mobile applications.",
      img: "https://cdn-icons-png.flaticon.com/512/888/888857.png"
    },
    {
      title: "UI/UX Design",
      desc: "Clean and modern user interfaces with great user experience.",
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
    },
    {
      title: "E-Commerce Solutions",
      desc: "Complete online store development with secure payments.",
      img: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
    },
    {
      title: "Website Maintenance",
      desc: "Regular updates, bug fixes and performance optimization.",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png"
    },
    {
      title: "SEO Optimization",
      desc: "Improve website ranking and visibility on search engines.",
      img: "https://cdn-icons-png.flaticon.com/512/3039/3039433.png"
    },
    {
      title: "Cloud Integration",
      desc: "Deploy and manage applications on secure cloud platforms.",
      img: "https://cdn-icons-png.flaticon.com/512/4144/4144783.png"
    },
    {
      title: "API Development",
      desc: "Robust REST API development for web and mobile apps.",
      img: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png"
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">My Services</h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt="service" className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;