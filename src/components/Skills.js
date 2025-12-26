import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C++", "C", "Python", "Dart", "Verilog"]
    },
    {
      title: "Frameworks",
      skills: ["Flutter", "React Native", ".NET MAUI", "Node.js", "Express.js"]
    },
    {
      title: "Tools",
      skills: ["Git", "AWS EC2", "MongoDB", "Firebase", "Docker", "Linux"]
    },
    {
      title: "Other",
      skills: ["Cross-Platform Dev", "REST APIs", "CI/CD", "Cloud", "Security"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="card-glow"></div>
            <div className="card-content">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
