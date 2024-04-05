import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import { Link } from 'react-router-dom'; // Import Link component



function LaptopApp() {
  const [showVideo, setShowVideo] = useState(true);
  const [videoWidth, setVideoWidth] = useState('50%');
  const [textOpacity, setTextOpacity] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  // Define a state to control the video movement
  const [videoStyle, setVideoStyle] = useState({});
  const [textVisibility, setTextVisibility] = useState({
    text1: false,
    text2: false,
    text3: false,
  });

  const [imageOpacities, setImageOpacities] = useState({
    image1: 0.8,
    image2: 0.8,
    image3: 0.8,
  });

  const handleMouseOver = (textId, imageId) => {
    setTextVisibility({ ...textVisibility, [textId]: true });
    setImageOpacities({ ...imageOpacities, [imageId]: 0.6 });
  };

  const handleMouseOut = (textId, imageId) => {
    setTextVisibility({ ...textVisibility, [textId]: false });
    setImageOpacities({ ...imageOpacities, [imageId]: 0.8 });
  };


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
    'Eco-friendly Buildings', 'Major Advantages', 'A Complete Eco Cycle', 'Our Expertise', 'Sustainable Building', 'Sustainable Design Phase', ' Sustainable Construction Phase', 'Sustainable Finished Product', 'Company Profile', 'Blogs', 'Valuable Partnerships', 'Contact Us', 'Renewable Energy', 'Smart Systems', 'Innovative Designs', 'Recycling ', 'Eco Friendly Materials', 'Efficient Equipment', 'Integrated Solutions', 'Predictive Maintenance',
  ];
  // const cardNames1 = [


  //   'Eco-FRIENDLY Buildings', 'Major Advantages', 'A Complete Eco Cycle', '', 'Contact Us', 'Our Expertise', 'Company Profile', 'Sustainable Construction','Sustainable Design Phase', 'Sustainable Construction Phase','Sustainable Finished Product','Blogs',' ', ' ', ' ', '', '', ' ', ' ', ' ', 
  // ];
  const details = [
    'Eco friendly green buildings are the future of construction and we are at the forefront of building with purpose ',
    'The benefits of Green buildings far outweigh all associated costs. In just a year, operating costs decrease by 10% and maintenance costs decrease by 20%. Also, eco-friendly buildings use 11% less water than conventional buildings. They are also key to preserve energy with 25% less energy consumption and are crucial to decrease CO2 emissions by more than 34%.',
    'ENTER Green Buildings provides a complete solution that starts from eco-friendly designs, to recycling waste, to the use of environmentally friendly building materials, to the selection of the most advanced smart systems, and to the maintenance of finished projects',
    'Eco-friendly designs Civil, Electrical, and Mechanical works Renewable energy and waste management  Recycling of construction materials',
    'Ensuring safety standards  Minimising schedule delays Preventing cost overrunsImproving profitability rates Automating data collection processes Alleviating front-end shortage ',
    'Resource Efficiency Environmental Impact Health and Wellbeing Resilience and Adaptability',
    'Material Selection and Procurement Energy efficiency and green technologies Water conservation and management Construction Waste Management',
    'The end product of sustainable building incorporates systems that lead to a greener environmental impact, quality of indoor environment, long term durability and resistance. As well as, cost and lifecycle performance.',
    'Company Profile',
    <Link to="/blog" style={{
      display: 'inline-block',
      padding: '10px 20px',
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: '#007bff',
      border: '1px solid #007bff',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    }}>Visit Our Blog</Link>,
    <img
      // className="brand-logo"
      src="/Images/awrwef.png"
      alt="Brand Logo"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        borderRadius: '20px'
      }}
    />,
    'Email: admin@entergreenbuildings.com\nContact: 00971-564788746', // Updated for Contact Us
    <img
      // className=?"brand-logo"
      src="/Images/RENEWABL_ ENERGY.png"
      alt="Brand Logo"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        borderRadius: '20px'
      }}
    />,
    <img
      // className="brand-logo"
      src="Images/Smart_System.png"
      alt="Brand Logo"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        borderRadius: '20px'
      }}
    />,

    <img
      // className="brand-logo"
      src="Images/Innovative_Design.png"
      alt="Brand Logo"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        borderRadius: '20px'
      }}
    />,
    <img
      // className="brand-logo"
      src="Images/Recycling.png"
      alt="Brand Logo"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        borderRadius: '20px'
      }}
    />,
    <img
      // className="brand-logo"
      src="Images/Eco-friendly_Materials.png"
      alt="Brand Logo"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        borderRadius: '20px'
      }}
    />,
    <img
      // className="brand-logo"
      src="Images/Efficient_Equipment.png"
      alt="Brand Logo"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        borderRadius: '20px'
      }}
    />,
    <img
      // className="brand-logo"
      src="Images/Integrated_Solutions.png"
      alt="Brand Logo"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        borderRadius: '20px'
      }}
    />,
    <img
      // className="brand-logo"
      src="Images/Predictive_Maintenance.png"
      alt="Brand Logo"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: '100%',
        borderRadius: '20px'
      }}
    />,
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
      ) : (
        <div className="app-container" style={{ width: '100%', height: '100vh', display: 'flex' }}>
          <div className="video-container" style={{ width: videoWidth, height: '1200px', position: 'relative', opacity: '1.5' }}>
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
              flexDirection: 'column', // Arrange children vertically
              alignItems: 'center',
              paddingTop: '3%',
              transition: 'opacity 0.5s ease-in-out',
              opacity: 1,
              translate: 'none',
              rotate: 'none',
              visibility: 'inherit',
              transform: `translate(${videoWidth === '50%' ? '0' : videoWidth}, 0px)`, // Adjusted transform property
              textAlign: 'start'
            }}
          >

            <h1
              className="h3-title"
              style={{
                fontWeight: '100',
                fontSize: '2.8rem', // Smaller font size for h3
                letterSpacing: '-.06rem',
                lineHeight: '1',
                fontStyle: 'normal',
                fontFamily: 'Panton, sans-serif',
                padding: '20px',
                margin: '0',
                color: 'rgba(0, 0, 0, 0.55)'
              }}
            >
              We build with the environment in mind Eco-friendly green buildings are the future of construction and we are at the forefront of building with purpose.
            </h1>
          </div>


        </div>
      )}
      <div className="video-container" style={{ width: '100%', height: '228vh', position: 'relative', borderRadius: '20px' }}>
        <video
          id="videoFrame"
          className="video-frame"
          title="Video Background"
          autoPlay
          loop
          muted
          style={{ width: '99.5%', height: '99%', objectFit: 'cover', marginTop: '100px', borderRadius: '20px' }}
        >
          <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '99%', height: '99%', marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(10, 1fr)', gap: '15px', padding: '10px' }}>
          {Array.from({ length: 20 }).map((_, index) => (
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
                  {/* <p style={{ fontFamily: 'Canela,serif', fontWeight: 'bold', fontSize: '24px', color: 'grey', position: 'absolute', top: '0', left: '5%' }}>
                      {cardNames1[index]}
                    </p> */}
                  <p style={{ fontFamily: 'Lemon Milk, sans-serif', fontWeight: 'normal', fontSize: '16px', color: 'grey', textAlign: 'center', width: '300px' }}>
                    {details[index]}

                  </p>
                </div>
              )}
              <p style={{ fontFamily: 'Lemon Milk, sans-serif', fontWeight: 'bold', fontSize: '24px', color: 'white' }}>
                {cardNames[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', display: 'flex', height: '99%', }}>
        <div style={{
          marginTop: '90px',
          width: '60%',
          fontSize: '30px',
          fontStyle: 'normal',
          fontFamily: 'Panton, sans-serif',
          padding: '20px',
          marginTop: '100px',
          color: 'rgba(0, 0, 0, 0.55)',
        }}>
          <p
            style={{
              width: '90%', // Adjusted width
              marginTop: '20px',
              textAlign: 'left'// Adjusted spacing
            }}>
            Enter Green Building is on a mission to use the world's
            resources more efficiently, and to create more
            energy-efficient and healthier homes and buildings.
          </p>
          <p
            style={{
              width: '90%', // Adjusted width
              marginTop: '20px',
              textAlign: 'left'// Adjusted spacing
            }}
          >
            A New World Envisioned
          </p>
        </div>

        <div style={{ marginTop: '90px', display: 'flex' }}>
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/Images/Where_Green_Meets_Growth.png"
                alt="Where Green Meets Growth"
                style={{ width: '300px', height: '400px', alignSelf: 'center', marginTop: '405px', marginLeft: '50px', borderRadius: '30px', opacity: imageOpacities.image1 }}
                onMouseOver={() => handleMouseOver('text1', 'image1')}
                onMouseOut={() => handleMouseOut('text1', 'image1')}
              />
              <span
                id="text1"
                style={{ width: '180px', position: 'absolute', top: '605px', left: '200px', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Canela, serif', opacity: textVisibility.text1 ? '1' : '0', transition: 'opacity 0.3s', pointerEvents: 'none' }}
              >
                Where Green Meets Growth
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/Images/Redefining_a_Sustainable_Future.png"
                alt="Redefining a Sustainable Future"
                style={{ width: '300px', height: '400px', margin: '10px', marginTop: '200px', marginRight: '50px', borderRadius: '30px', opacity: imageOpacities.image2 }}
                onMouseOver={() => handleMouseOver('text2', 'image2')}
                onMouseOut={() => handleMouseOut('text2', 'image2')}
              />
              <span
                id="text2"
                style={{ position: 'absolute', top: '65%', left: '45%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Canela, serif', opacity: textVisibility.text2 ? '1' : '0', transition: 'opacity 0.3s', pointerEvents: 'none' }}
              >
                Redefining a Sustainable Future
              </span>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="/Images/EcoInnovate.png"
                alt="Eco-Innovate"
                style={{ width: '300px', height: '400px', margin: '10px', marginRight: '50px', borderRadius: '30px', opacity: imageOpacities.image3 }}
                onMouseOver={() => handleMouseOver('text3', 'image3')}
                onMouseOut={() => handleMouseOut('text3', 'image3')}
              />
              <span
                id="text3"
                style={{ position: 'absolute', top: '50%', left: '46%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Canela, serif', opacity: textVisibility.text3 ? '1' : '0', transition: 'opacity 0.3s', pointerEvents: 'none' }}
              >
                Eco-Innovate
              </span>
            </div>
          </div>
        </div>


      </div>








    </div>
  );
}
export default LaptopApp;