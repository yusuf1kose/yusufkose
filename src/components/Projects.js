import React, { useState } from 'react';
import './Projects.css';
import PhotoViewer from './PhotoViewer';

const Projects = () => {
  const [photoViewerOpen, setPhotoViewerOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const projects = [
    {
      title: "Jarvis AI Assistant",
      subtitle: "Cross-Platform Conversational Chatbot",
      description: "A multi-platform AI assistant using Flutter, Firebase, and Google Cloud, integrating the Anthropic Claude API for real-time conversational intelligence with contextual memory.",
      tech: ["Flutter", "Firebase", "Google Cloud", "Claude API", "BLE", "GitHub Actions"],
      features: [
        "Architected an asynchronous chat system using StreamBuilder and provider-based state management to support concurrent sessions, reduce latency, and ensure smooth message rendering",
        "Implemented Firebase Authentication and Firestore persistence with secure access rules for cross-device session continuity",
        "Integrated Bluetooth Low Energy (BLE) and text-to-speech/voice recognition for interactive user control",
        "Automated build, testing, and release workflows via GitHub Actions and Firebase App Distribution"
      ],
      github: "https://github.com/yusuf1kose/jarvis-chat-api",
      media: [
        {
          url: "https://github.com/yusuf1kose/yusufkose/raw/main/signinflow%20(1).mp4",
          description: "Firebase Authentication system with email/password and Google Sign-In, featuring form validation, error handling, and persistent session management that automatically navigates users based on auth state."
        },
        {
          url: "https://github.com/yusuf1kose/yusufkose/raw/main/savedchatfeature.mp4",
          description: "Local chat storage using SharedPreferences with Firebase UID separation, managed through Riverpod providers that handle JSON serialization of chat sessions with titles, timestamps, and full message history for persistence across app restarts."
        },
        {
          url: "https://github.com/yusuf1kose/yusufkose/raw/main/searchfeature.mp4",
          description: "Case-insensitive search functionality with real-time highlighting and bolding of matched text, featuring a green background glow on matching messages and an integrated search bar in both active chats and saved chats pages."
        },
        {
          url: "https://github.com/yusuf1kose/yusufkose/raw/main/voicefeature.mp4",
          description: "Speech-to-text integration using the speech_to_text package, allowing users to dictate messages with real-time feedback, a dynamic microphone/stop button interface, and seamless switching between voice and manual text input."
        }
      ]
    },
    {
      title: "Jarvis Chat Session API",
      subtitle: "RESTful API with Swagger/OpenAPI Documentation",
      description: "Built a RESTful API to manage Jarvis chat sessions using Express.js on AWS EC2 with MongoDB Atlas as the cloud database. The application is managed by PM2 for process control and provides full CRUD operations for chat sessions.",
      tech: ["Express.js", "Node.js", "AWS EC2", "MongoDB Atlas", "Swagger UI", "PM2"],
      features: [
        "Designed and implemented RESTful endpoints for creating, reading, updating, and deleting chat sessions",
        "Integrated the API into the Jarvis Flutter app by replacing local storage with HTTP calls to REST endpoints for cloud-based persistence",
        "Generated interactive API documentation using Swagger UI for streamlined testing and developer collaboration",
        "Deployed on AWS EC2 with PM2 process management for reliable production hosting"
      ],
      github: "https://github.com/yusuf1kose/jarvis-chat-api",
      links: {
        demo: "http://18.217.133.254:3000/api-docs",
        swagger: "http://18.217.133.254:3000/swagger.json"
      },
      media: [
        {
          url: "https://github.com/yusuf1kose/yusufkose/raw/main/swaggerio%20(1).mp4",
          description: "Interactive Swagger UI documentation demonstrating the RESTful API endpoints for full CRUD operations on chat sessions, deployed on AWS EC2 with MongoDB Atlas integration."
        }
      ]
    },
    {
      title: "Distributed mmWave Radar Network",
      subtitle: "Real-Time 2D Floor Visualization (Software Lead)",
      description: "Leading a 4-person software team in partnership with Texas Instruments to develop a cloud-based sensor fusion system that processes data from 3 IWR6843AOP radar nodes for privacy-preserving spatial awareness.",
      tech: ["Python", "AWS EC2", "SQLite", "Open3D", "NumPy", "SciPy", "scikit-learn", "OpenCV", "Flask"],
      features: [
        "Developing multi-stage fusion pipeline (DBSCAN, FPFH, RANSAC, ICP) achieving real-time 2D floor visualization at 5+ Hz with sub-0.5m positional accuracy across 4m x 4m coverage area",
        "Architecting AWS EC2 ingestion infrastructure with SQLite backend supporting 90 inserts/sec throughput, enabling camera-free monitoring for robotics validation and indoor applications",
        "Designing object detection and tracking system using density-based clustering and Kalman filtering for persistent object IDs, with real-time visualization API serving cross-platform clients",
        "Coordinating software-hardware integration across 8-person team, establishing packet format specifications and timing protocols for seamless WiFi-based radar communication"
      ],
      github: "#",
      media: []
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <PhotoViewer media={currentImages} isOpen={photoViewerOpen} onClose={() => setPhotoViewerOpen(false)} />
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-header">
                <h3>{project.title}</h3>
                <p className="subtitle">{project.subtitle}</p>
                <div className="tech-tags">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-more">+{project.tech.length - 4}</span>
                  )}
                </div>
              </div>
              
              <div className="card-body">
                <p className="description">{project.description}</p>
                
                <div className="features">
                  <p className="features-title">Key Features:</p>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="all-tech">
                  <p className="tech-title">Technologies:</p>
                  <div className="tech-tags">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="card-footer">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                    GitHub
                  </a>
                  {project.links?.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-btn">
                      API Docs
                    </a>
                  )}
                  {project.links?.swagger && (
                    <a href={project.links.swagger} target="_blank" rel="noopener noreferrer" className="project-btn">
                      Swagger Spec
                    </a>
                  )}
                </div>
                {project.media && project.media.length > 0 && (
                  <button
                    className="project-btn media-btn"
                    onClick={() => {
                      setCurrentImages(project.media);
                      setPhotoViewerOpen(true);
                    }}
                  >
                    View Media
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
