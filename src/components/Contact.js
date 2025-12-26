import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <p className="contact-intro">
            Open to new opportunities and collaborations!
          </p>
          <div className="contact-info">
            <a href="mailto:yusuf.kose@sjsu.edu" className="contact-link">
              <i className="fas fa-envelope"></i>
              yusuf.kose@sjsu.edu
            </a>
            <p className="location-info">
              <i className="fas fa-map-marker-alt"></i>
              San Jose, CA
            </p>
          </div>
          <div className="social-links">
            <a href="https://github.com/yusuf1kose" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/yusuf-kose-0934662a5" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
