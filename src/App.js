import React, { useState, useEffect } from 'react';
import './App.css';
// import logo from '/Logos/Logo.png'; //
function App() {
  const [showVideo, setShowVideo] = useState(true);
  const [videoWidth, setVideoWidth] = useState('50%');

  // This effect hides the video and shows the website content after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 2000); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, []);

  // This effect adjusts the video width on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const newWidth = `${Math.max(50, 50 + (scrollTop / windowHeight) * 50)}%`;
      setVideoWidth(newWidth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {showVideo ? (
        // Fullscreen video with brand name 'EGB'
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <video
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src="/Logos/Logo.png"
            alt="Brand Logo"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxHeight: '50%', // Adjust as needed
              maxWidth: '50%', // Adjust as needed
            }}
          />
        </div>
      ) : (
        // Website content after the video
        <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
          {/* Left side with video */}
          <div style={{ width: '50%', height: '100%', position: 'relative' }}>
  <video
    id="videoFrame"
    title="Video Background"
    autoPlay
    loop
    muted
    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', marginTop: '10px', marginLeft: '10px' }}
  >
    <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <img
    src="/Logos/Logo.png"
    alt="Brand Logo"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: '50%', // Adjust as needed
      maxWidth: '50%', // Adjust as needed
    }}
  />
</div>

       
        
          {/* Right side with text */}
          <div
            style={{
              flex: '1',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '20%',
            }}
          >
            <h1
              className="h1 title"
              style={{
                fontWeight: '150',
                fontSize: '70px',
                fontStyle: 'normal',
                fontFamily: 'Times New Roman, Times, serif',
                padding: '20px',
                margin: '0',
              }}
            >
              We invest in high-margin, fast-growing financial technology companies across the globe.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
