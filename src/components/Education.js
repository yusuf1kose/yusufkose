import React from 'react';
import './Education.css';

const Education = () => {
  const courses = [
    "Advanced Algorithms",
    "Assembly Language",
    "Compiler Design",
    "Computer Architecture",
    "Computer Networks",
    "Operating Systems"
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <div className="edu-header">
            <div>
              <h3>San Jose State University</h3>
              <p className="degree">B.S. Computer Engineering</p>
              <p className="gpa">GPA: 3.50</p>
            </div>
            <span className="graduation">Spring 2026</span>
          </div>
          
          <div className="coursework">
            <p className="coursework-title">Coursework:</p>
            <div className="courses-grid">
              {courses.map((course, idx) => (
                <div key={idx} className="course-item">
                  <span className="arrow">→</span>
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
