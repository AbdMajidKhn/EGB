// VideoBackground.js
import React from 'react';

const VideoBackground = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <video
        className="video-frame"
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '1000%', objectFit: 'cover' }}
      >
        <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        className="brand-logo"
        src="/Logos/Logo.png"
        alt="Brand Logo"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxHeight: '50%',
          maxWidth: '50%',
        }}
      />
    </div>
  );
};

export default VideoBackground;
