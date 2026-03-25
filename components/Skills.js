import React from "react";

function Skills() {
  const skills = [
    { name: "HTML5", level: "95%", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS3", level: "90%", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", level: "85%", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React.js", level: "88%", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Node.js", level: "80%", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "MongoDB", level: "78%", img: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
    { name: "Python", level: "75%", img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "Java", level: "82%", img: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: "Git & GitHub", level: "85%", img: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png" },
    { name: "Bootstrap", level: "88%", img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    { name: "Tailwind CSS", level: "84%", img: "https://cdn-icons-png.flaticon.com/512/5968/5968673.png" },
    { name: "MySQL", level: "76%", img: "https://cdn-icons-png.flaticon.com/512/919/919836.png" }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt="skill" className="skill-icon" />
            <h3>{skill.name}</h3>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>

            <span className="percent">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;