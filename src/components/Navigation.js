import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 60;
      const titleOffset = 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - titleOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navigation">
      {['Experience', 'Projects', 'Skills', 'Education', 'Contact'].map(section => (
        <button
          key={section}
          className="nav-btn"
          onClick={() => scrollToSection(section.toLowerCase())}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
