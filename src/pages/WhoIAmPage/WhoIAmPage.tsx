import React, { useState, useRef } from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './WhoIAmPage.scss'; 
import backgroundImage from '../../assets/background/whoiam-background.jpeg';

const mainPageStyle: React.CSSProperties = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '96vh',
  width: '100vw',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const WhoIAmPage: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className="whoiam-page" style={mainPageStyle}>
      <Header />
      {!showVideo && (
        <div className="play-overlay" onClick={handlePlayClick}>
          <span className="play-text">▶ Play Me</span>
        </div>
      )}
      {showVideo && (
        <video
          className="whoiam-video"
          ref={videoRef}
          src="/MyStory.mp4"
          autoPlay
          loop
          muted
          controls
          playsInline
        />
      )}
    </div>
  );
};

export default WhoIAmPage;