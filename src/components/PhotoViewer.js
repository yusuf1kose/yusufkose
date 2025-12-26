import React, { useState } from 'react';
import './PhotoViewer.css';

const PhotoViewer = ({ media, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !media || media.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const getCurrentMedia = () => {
    const item = media[currentIndex];
    return typeof item === 'string' ? { url: item, description: '' } : item;
  };

  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('youtube.com') || url.includes('youtu.be');
  };

  const renderMedia = (url) => {
    if (isVideo(url)) {
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let videoId = '';
        if (url.includes('youtube.com/watch?v=')) {
          videoId = url.split('v=')[1].split('&')[0];
        } else if (url.includes('youtu.be/')) {
          videoId = url.split('youtu.be/')[1].split('?')[0];
        }
        return (
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video"
          ></iframe>
        );
      }
      return (
        <video
          controls
          style={{width: '100%', display: 'block', maxHeight: '600px'}}
          key={url}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return <img src={url} alt={`Media ${currentIndex + 1}`} style={{width: '100%', display: 'block'}} />;
  };

  const currentMedia = getCurrentMedia();

  return (
    <div className="photo-viewer-overlay" onClick={onClose}>
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="photo-viewer-content" onClick={(e) => e.stopPropagation()}>
        <div className="media-container">
          {renderMedia(currentMedia.url)}
          {media.length > 1 && (
            <>
              <button className="nav-btn prev-btn" onClick={goToPrevious}>‹</button>
              <button className="nav-btn next-btn" onClick={goToNext}>›</button>
            </>
          )}
        </div>
        {currentMedia.description && (
          <div className="media-description">{currentMedia.description}</div>
        )}
        {media.length > 1 && (
          <div className="media-dots">
            {media.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoViewer;
