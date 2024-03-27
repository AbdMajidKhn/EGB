import React, { useState, useEffect } from 'react';
// import './App.css';

function App() {
  const [showVideo, setShowVideo] = useState(true);
  const [videoWidth, setVideoWidth] = useState('50%');
  const [textOpacity, setTextOpacity] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  // Define a state to control the video movement
  const [videoStyle, setVideoStyle] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const newWidth = `${Math.min(100, 50 + (scrollTop / windowHeight) * 50)}%`;

      setVideoWidth(newWidth);
      const newOpacity = Math.max(0, 1 - (scrollTop / windowHeight));
      setTextOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardNames = [
    'RENEWABLE ENERGY', 'SMART SYSTEMS', 'INNOVATIVE DESIGN', 'RECYCLING', 'ECO-FRIENDLY MATERIALS', 'EFFICIENT EQUIPMENT', 'INTEGRATED SOLUTIONS', 'PREDICTIVE MAINTENANCE', 'BLOGS', 'COMPANY PROFILE', 'MAJOR ADVANTAGES', 'ABOUT US', 'VALUABLE PARTNERSHIPS', 'A COMPLETE ECO CYCLE', 'ROAD MAP TO SUCCESS', 'CONTACT US',
  ];
  // Function to handle mouse enter and leave events
  const handleMouseEnter = () => {
    setVideoStyle({
      transform: 'translateY(-10%)', // Moves the video up by 10%
      transition: 'transform 0.5s ease-in-out' // Smooth transition for the movement
    });
  };

  const handleMouseLeave = () => {
    setVideoStyle({
      transform: 'translateY(0)', // Returns the video to its original position
      transition: 'transform 0.5s ease-in-out' // Smooth transition for the movement
    });
  };
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {showVideo ? (
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
              maxHeight: '50%',
              maxWidth: '50%',
            }}
          />
        </div>
      ) : (
        <div className="app-container" style={{ width: '100%', height: '100vh', display: 'flex' }}>
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
                maxHeight: '50%',
                maxWidth: '50%',
              }}
            />
          </div>
          <div
            className="text-container"
            style={{
              flex: '1',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '3%',
              transition: 'opacity 0.5s ease-in-out',
              opacity: textOpacity,
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
              Ever Green Is on a mission to use the world's resources more efficiently, and to create more energy-efficient and healthier homes and buildings.
            </h1>
          </div>
        </div>
      )}
      <div className="video-container" style={{ width: '100%', height: '203vh', position: 'relative', borderRadius: '20px' }}>
        <video
          id="videoFrame"
          className="video-frame"
          title="Video Background"
          autoPlay
          loop
          muted
          style={{ width: '99.5%', height: '99%', objectFit: 'cover', marginTop: '10px', borderRadius: '20px' }}
        >
          <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '99%', height: '99%', marginTop: '10px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(9, 1fr)', gap: '15px', padding: '10px' }}>
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="card"
              style={{
                background: 'transparent',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '0.5px solid Grey',
                height: '350px',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '20px'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === index && (
                <div
                  className="card-overlay"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    transition: 'background-color 0.3s ease-in-out',
                  }}
                >
                  <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: 'grey' }}>
                    {cardNames[index]}
                  </p>
                  <p style={{ fontFamily: 'Helvetica', fontWeight: 'normal', fontSize: '16px', color: 'grey', textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac massa a arcu mollis ullamcorper.
                  </p>
                </div>
              )}
              <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: 'white' }}>
                {cardNames[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', display: 'flex', height: '99%' , display: 'flex' }}>
      <p
              className="h1-title"
              style={{
                fontWeight: '50',
                width:'30%',
                fontSize: '20px',
                fontStyle: 'normal',
                fontFamily: 'Times New Roman, Times, serif',
                padding: '20px',
                margin: '0',
              }}
            >
              Ever Green Is on a mission to use the world's resources more efficiently, and to create more energy-efficient and healthier homes and buildings.
            </p>
    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
   
   <img src="/Images/Where_Green_Meets_Growth.png" alt="Where Green Meets Growth" style={{ width: 'auto', maxHeight: '100px', alignSelf: 'center' , marginTop: '45px', marginLeft: '500px'}} />
 </div>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <img src="/Images/EcoInnovate.png" alt="Eco-Innovate" style={{ width: 'auto', maxHeight: '100px', margin: '10px' }} />
    <img src="/Images/Redefining_a_Sustainable_Future.png" alt="Redefining a Sustainable Future" style={{ width: 'auto', maxHeight: '100px', margin: '10px' }} />
  </div>
  
</div>






    </div>
  );
}

export default App;
