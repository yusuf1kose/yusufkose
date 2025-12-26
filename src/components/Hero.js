import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="glitch" data-text="Yusuf Kose">Yusuf Kose</h1>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i>
          San Jose, California
        </p>
        <p className="hero-description">
          I am a senior studying Computer Engineering at San Jose State University. I specialize in cross-platform mobile development and intelligent systems, and I'm currently working as a Full Stack Developer Intern building Flutter applications with cloud infrastructure. In my free time, I enjoy going to the gym, spending time with family, and watching football and NBA games, including attending games as a reporter to interview players.
        </p>
      </div>
    </section>
  );
};

export default Hero;
