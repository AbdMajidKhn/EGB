import React, { useState, useEffect } from 'react';

function MobileApp() {
    const [showVideo, setShowVideo] = useState(true);
    const [videoWidth, setVideoWidth] = useState('100%');
    const [videoHeight, setVideoHeight] = useState('100vh');
    const [showText, setShowText] = useState(false); // Set initial state to false
    const [showCards, setShowCards] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true); // Set to true after initial load
            setVideoWidth('90%'); // Set the desired width for the video
            setVideoHeight('45vh'); // Set the desired height for the video
            // setShowVideo(false); // Remove this line to keep the video displayed
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const cardTimer = setTimeout(() => {
            setShowCards(true); // Set to true after text appears
        }, 1000); // Adjust delay as needed

        return () => clearTimeout(cardTimer);
    }, [showText]);

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };
    const cardNames = [
        'Eco-FRIENDLY Buildings', 'Major Advantages', 'A Complete Eco Cycle', 'Valuable Partnerships', 'Contact Us', 'Our Expertise', 'Company Profile', 'Sustainable Construction', 'Sustainable Design Phase', 'Sustainable Construction Phase', 'Sustainable Finished Product', 'Blogs', 'RENEWABLE ENERGY', 'SMART SYSTEMS', 'INNOVATIVE DESIGN', 'RECYCLING', 'ECO-FRIENDLY MATERIALS', 'EFFICIENT EQUIPMENT', 'INTEGRATED SOLUTIONS', 'PREDICTIVE MAINTENANCE',
    ];
    const cardNames1 = [


        'Eco-FRIENDLY Buildings', 'Major Advantages', 'A Complete Eco Cycle', '', 'Contact Us', 'Our Expertise', 'Company Profile', 'Sustainable Construction', 'Sustainable Design Phase', 'Sustainable Construction Phase', 'Sustainable Finished Product', 'Blogs', ' ', ' ', ' ', '', '', ' ', ' ', ' ',
    ];
    const details = [
        'Eco friendly green buildings are the future of construction and we are at the forefront of building with purpose ',
        'The benefits of Green buildings far outweigh all associated costs. In just a year, operating costs decrease by 10% and maintenance costs decrease by 20%. Also, eco-friendly buildings use 11% less water than conventional buildings. They are also key to preserve energy with 25% less energy consumption and are crucial to decrease CO2 emissions by more than 34%.',
        'ENTER Green Buildings provides a complete solution that starts from eco-friendly designs, to recycling waste, to the use of environmentally friendly building materials, to the selection of the most advanced smart systems, and to the maintenance of finished projects',
        <img
            // className="brand-logo"
            src="/Images/awrwef.png"
            alt="Brand Logo"
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '60%',
                width: '60%',
                borderRadius: '20px'
            }}
        />,
        'Email: admin@entergreenbuildings.com\nContact: 00971-564788746', // Updated for Contact Us
        'Eco-friendly designs Civil, Electrical, and Mechanical works Renewable energy and waste management Recycling of construction materials  ',
        'Company Profile',
        'Ensuring safety standards Minimising schedule delays  Preventing cost overruns Improving profitability rates Automating data collection processes Alleviating front-end shortages',
        'Resource Efficiency  Environmental Impact  Health and Wellbeing Resilience and Adaptability',
        'Material Selection and Procurement Energy efficiency and green technologies Water conservation and management Construction Waste Management',
        'The end product of sustainable building incorporates systems that lead to a greener environmental impact, quality of indoor environment, long term durability and resistance. As well as, cost and lifecycle performance.',
        <a
            className="blog-link"
            href="https://enterconstruction.ru/en/blog/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Visit Our Blog
        </a>
        ,
        <img
            // className=?"brand-logo"
            src="/Images/RENEWABL_ ENERGY.png"
            alt="Brand Logo"
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '60%',
                width: '60%',
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
                height: '60%',
                width: '60%',
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
                height: '60%',
                width: '60%',
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
                height: '60%',
                width: '60%',
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
                height: '60%',
                width: '60%',
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
                height: '60%',
                width: '60%',
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
                height: '60%',
                width: '60%',
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
                height: '60%',
                borderRadius: '20px'
            }}
        />,
    ];

    return (
        <div className="mobile-app-container" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            {showVideo && (
                <div style={{
                    width: videoWidth,
                    height: videoHeight,
                    position: 'relative',
                    margin: '0 auto', // Centers the video container
                    transition: 'width 0.5s, height 0.5s',
                }}>
                    <video
                        className="video-frame"
                        autoPlay
                        loop
                        muted
                        style={{
                            marginTop: '20px',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '15px'

                        }}
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
                            zIndex: '2' // Ensure the logo is above the video
                        }}
                    />
                </div>
            )}
            {showText && (
                <div className="text-container" style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '10px', // Aligns the text to the right
                    zIndex: '1',
                    // backgroundColor: '#000', // Assuming you want a dark background
                    padding: '10px',
                    borderRadius: '10px',
                    maxWidth: '80%',
                    boxSizing: 'border-box' // Ensures padding doesn't affect the width
                }}>
                    <p style={{
                        color: 'black',
                        textAlign: 'left', // Aligns the text to the right
                        fontFamily: 'Canela,serif', // Example font
                        fontSize: '1.65rem', // Adjust as needed
                        lineHeight: '1.5' // Adjust for better readability
                    }}>
                        Ever Green is on a mission to use the world's resources more efficiently, and to create more energy-efficient and healthier homes and buildings.
                    </p>
                </div>
            )}

            <div className="video-container" style={{ width: '100%', height: '414vh', position: 'relative', borderRadius: '0px' }}>
                <video
                    id="videoFrame"
                    className="video-frame"
                    title="Video Background"
                    autoPlay
                    loop
                    muted
                    style={{ width: '99.5%', height: '99%', objectFit: 'cover', marginTop: '400px', borderRadius: '0px' }}
                >
                    <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div style={{ position: 'absolute', top: '0', left: '0', width: '99%', height: '9%', marginTop: '400px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(16, 1fr)', gap: '0', padding: '0px', zIndex: '1' }}>
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
                height: '230px',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '0px'
            }}
        >

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
                <p style={{ fontFamily: 'Canela,serif', fontWeight: 'bold', fontSize: '24px', color: 'grey', position: 'absolute', top: '0', left: '5%' }}>
                    {cardNames1[index]}
                </p>
                <p style={{ fontFamily: 'Canela,serif', fontWeight: 'normal', fontSize: '16px', color: 'grey', textAlign: 'center', width: '300px' }}>
                    {details[index]}
                </p>
            </div>

            <p style={{ fontFamily: 'Canela,serif', fontWeight: 'bold', fontSize: '24px', color: 'white' }}>
                {cardNames[index]}
            </p>
        </div>
    ))}
</div>

            </div>
        </div>
    );
}

export default MobileApp;
