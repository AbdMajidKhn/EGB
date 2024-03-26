import React, { useState, useEffect } from 'react';
import './App.css';
// import logo from '/Logos/Logo.png'; //
function App() {
  const [showVideo, setShowVideo] = useState(true);
  const [videoWidth, setVideoWidth] = useState('50%');
  const [textOpacity, setTextOpacity] = useState(1);


  // This effect hides the video and shows the website content after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 2000); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate the new width based on the scroll position
      const newWidth = `${Math.max(50, 50 + (scrollTop / windowHeight) * 50)}%`;

      // Update the state to set the new width
      setVideoWidth(newWidth);
      // Update text opacity based on scroll position
      const newOpacity = Math.max(0, 1 - (scrollTop / windowHeight));
      setTextOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // This effect adjusts the video width on scroll

  const cardNames = [
    'RENEWABLE ENERGY', 'SMART SYSTEMS', 'INNOVATIVE DESIGN', 'RECYCING', 'ECO-FRIENDLY MATERIALS', 'EFFICIENT EQUIPMENT', 'INTEGRATED SOLUTIONS', 'PREDICTIVE MAINTENANCE', 'BLOGS', 'COMPANY PROFILE', 'MAJOR ADVANTAGES', 'ABOUT US', 'VALUABLE PARTNERSHIPS', 'A COMPLETE ECO CYCLE', 'ROAD MAP TO SUCCESS', 'CONTACT US',// ... add more names
  ];
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {showVideo ? (
        // Fullscreen video with brand name 'EGB'
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <video
            className="video-frame"
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
              maxHeight: '50%', // Adjust as needed
              maxWidth: '50%', // Adjust as needed
            }}
          />
        </div>
      ) : (
        // Website content after the video
        <div className="app-container" style={{ width: '100%', height: '100vh', display: 'flex' }}>
          {/* Left side with video */}
          <div className="video-container" style={{ width: videoWidth, height: '900px', position: 'relative', opacity: '1.5' }}>
            <video
              id="videoFrame"
              className="video-frame"
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
              className="brand-logo"
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
            className="text-container"
            style={{
              flex: '1',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '20%',
              transition: 'opacity 0.5s ease-in-out',
              opacity: textOpacity, // Use the state variable here
            }}
          >
            <h1
              className="h1-title"
              style={{
                fontWeight: '150',
                fontSize: '70px',
                fontStyle: 'normal',
                fontFamily: 'Times New Roman, Times, serif',
                padding: '20px',
                margin: '0',
              }}
            >
              Ever Green Is on a mission to use the world's resources more efficietly, and to create more energy-efficient and healthier homes and buildings.
            </h1>
          </div>

        </div>

      )}
      <div className="video-container" style={{ width: '100%', height: '67vh', position: 'relative' }}>
        <video
          id="videoFrame"
          className="video-frame"
          title="Video Background"
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '300%', objectFit: 'cover', marginTop: '100px' }}
        >
          <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Grid container for cards */}

        <div style={{ position: 'absolute', top: '0', left: '0', width: '99%', height: '99%', marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(9, 1fr)', gap: '15px', padding: '10px' }}>
  {/* Cards */}
  {Array.from({ length: 16 }).map((_, index) => (
    <div key={index} className="card" style={{ background: 'transparent', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', height: '350px' /* Adjust this value as needed */ }}>
      {/* Content for each card */}
      <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: 'white' }}>{cardNames[index]}</p>
    </div>
  ))}
</div>



      </div>



    </div>
  );
}

export default App;
