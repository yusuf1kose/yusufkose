import React, { useState } from 'react';
import './Experience.css';
import PhotoViewer from './PhotoViewer';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [photoViewerOpen, setPhotoViewerOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Finally Free Productions",
      location: "New York, US · Remote",
      period: "Dec 2024 - Present",
      achievements: [
        "Collaborated with senior engineers to build cross-platform Flutter apps with advanced state management, REST API integrations, and cloud-based persistence using AWS EC2 and MongoDB Atlas, improving app responsiveness by ~20%",
        "Enhanced a fitness tracking application (over 1,000 downloads and a 4.8-star rating) through UI/UX improvements, bug fixes, and performance optimizations across Android and iOS platforms",
        "Designed and deployed a RESTful chat session management API with full CRUD operations on AWS and interactive Swagger UI documentation, streamlining testing and developer collaboration",
        "Participated in product testing and code reviews to identify early bugs and performance bottlenecks, maintaining detailed technical documentation and reducing API error rates by 15%"
      ],
      media: []
    },
    {
      title: "Consultation Agent",
      company: "Geek Squad",
      location: "San Jose, CA · On-site",
      period: "Jun 2025 - Present",
      achievements: [
        "Implemented security measures including malware removal, encryption setup, and secure backups, reducing client vulnerability risks by 30–40% based on post-service scans",
        "Diagnosed and resolved hardware, software, and network issues for 20+ customers weekly, achieving a 50%+ first-contact resolution rate through systematic troubleshooting and clear documentation",
        "Performed device evaluations and product testing across Windows, macOS, and mobile platforms, optimizing configurations to improve system performance by 20–35%"
      ],
      media: []
    },
    {
      title: "NBA Reporter",
      company: "Habername",
      location: "San Jose, CA",
      period: "Dec 2023 - Present",
      achievements: [
        "Cover NBA games and events as an on-site reporter, writing articles and conducting post-game interviews with players and coaches",
        "Analyze game statistics and player performance to provide in-depth coverage and insights for basketball enthusiasts"
      ],
      articles: [
        {
          title: "Warriors 4 Maçı Kaybettikten Sonra Edwards'ın Tekrar Patlamasıyla Elendi",
          url: "https://www.habername.com/haber-warriors-4-maci-kaybettikten-sonra-edwardsin-tekrar-patlamasiyla-elenme-238910.htm"
        },
        {
          title: "Warriors 3: Maçın Sonlarında Edwards ve Randle Wolves'un Geri Dönüşüne Güç Verdi",
          url: "https://www.habername.com/haber-warriors-3-macin-sonlarinda-edwards-ve-randle-wolvesun-geri-donusune-guc-verdi-238765.htm"
        },
        {
          title: "Savunma Hataları ve Bozuk Oyunlar: Golden State Warriors 6. Maçı Nasıl Kaybetti",
          url: "https://www.habername.com/haber-savunma-hatalari-ve-bozuk-oyunlar-golden-state-warriors-6-maci-nasil-kaybetti-238328.htm"
        }
      ]
    },
    {
      title: "UI/UX Developer",
      company: "DeVO Protocol",
      location: "RDU Area · Remote",
      period: "Jul 2023 - Sep 2023",
      achievements: [
        "Designed and developed aesthetically pleasing and intuitive user interfaces for the DApp",
        "Worked with Full Stack Developers and the CTO to integrate the front-end with back-end logic and ensure seamless functionality"
      ],
      media: []
    },
    {
      title: "Product Development Intern",
      company: "Quantum3D, Inc.",
      location: "Milpitas, CA · On-site",
      period: "Dec 2022 - Jan 2023",
      achievements: [
        "Developed a comprehensive procedure for setting up and configuring an Unmanned Aerial Vehicle (UAV) simulator and created corresponding documentation for engineers and technicians to use",
        "Conducted thorough testing to ensure the simulator met the required specifications and standards"
      ],
      media: []
    }
  ];

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <PhotoViewer media={currentImages} isOpen={photoViewerOpen} onClose={() => setPhotoViewerOpen(false)} />
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {expandedIndex !== null && (
          <div className="experience-card expanded">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="exp-header" onClick={() => handleCardClick(expandedIndex)}>
                <div className="exp-title-section">
                  <h3>{experiences[expandedIndex].title}</h3>
                  <p className="company">{experiences[expandedIndex].company}</p>
                  <p className="location">{experiences[expandedIndex].location}</p>
                </div>
                <span className="period">{experiences[expandedIndex].period}</span>
              </div>
              
              <div onClick={(e) => e.stopPropagation()}>
                <ul className="achievements">
                  {experiences[expandedIndex].achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                
                {experiences[expandedIndex].articles && experiences[expandedIndex].articles.length > 0 && (
                  <div className="articles-section">
                    <p className="articles-title">Published Articles:</p>
                    <div className="articles-list">
                      {experiences[expandedIndex].articles.map((article, idx) => (
                        <a 
                          key={idx}
                          href={article.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="article-link"
                        >
                          {article.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                {experiences[expandedIndex].media && experiences[expandedIndex].media.length > 0 && (
                  <div className="media-button-container">
                    <button
                      className="media-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImages(experiences[expandedIndex].media);
                        setPhotoViewerOpen(true);
                      }}
                    >
                      View Media
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            expandedIndex !== index && (
              <div 
                key={index}
                className="experience-card"
                onClick={() => handleCardClick(index)}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="exp-header">
                    <div className="exp-title-section">
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                      <p className="location">{exp.location}</p>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
