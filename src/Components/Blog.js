import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/BlogComponent.css'; // Import your CSS file
import buildingInstruction from './buildingInstruction';
import ModularConstruction from './modularConstruction'; // Import modularConstruction component
import PropertyBuilding from './propertyBuildings'; // Import PropertyBuilding component
import SustainableBuildings from './sustainableBuildings'; // Import SustainableBuildings component
import WoodGreen from './woodGreen';
import EcoFriendlyPaint from './ecoFriendlyPaint';
import CLTPanels from './cltPanels';
function BlogImage({ src, alt, isFirstImage, isSecondImage, isThirdImage, isFourthImage ,isFifthImage,isSixthImage,isSeventhImage,isEighthImage,isNinthImage,isTenthImage,isEleventhImage}) {
    const [hoverStyle, setHoverStyle] = useState({});

    const handleMouseEnter = () => {
        setHoverStyle({
            transform: 'scale(1.05) translateY(-10px)',
            transition: 'transform 0.5s ease'
        });
    };

    const handleMouseLeave = () => {
        setHoverStyle({});
    };

    let overlayText = '';
    let destination = '/'; // Default destination

    if (isFirstImage) {
        overlayText = 'building-information-modeling';
        destination = "/buildingInstruction";
    } else if (isSecondImage) {
        overlayText = 'Modular Construction';
        destination = "/modularConstruction";
    } else if (isThirdImage) {
        overlayText = 'Property Building'; // Change text for third image
        destination = "/propertyBuildings";
    } else if (isFourthImage) {
        overlayText = 'Sustainable Buildings'; // Change text for fourth image
        destination = "/sustainableBuildings";
    } else if (isFifthImage) {
        overlayText = 'Turnkey Construction '; // Change text for fourth image
        destination = "/turnkeyConstruction";
    } else if (isSixthImage) {
        overlayText = 'Using Wood In Green Buidling Construction '; // Change text for fourth image
        destination = "/woodGreen";
    } else if (isSeventhImage) {
        overlayText = 'Eco-Friendly Paint Vs Traditional Paint '; // Change text for fourth image
        destination = "/ecoFriendlyPaint";
    } else if (isEighthImage) {
        overlayText = 'CLT Panels In Green Contruction '; // Change text for fourth image
        destination = "/cltPanels";
    }else if (isNinthImage) {
        overlayText = 'The Usage Of Drones In Construction '; // Change text for fourth image
        destination = "/dronesConstruction";
    }else if (isTenthImage) {
        overlayText = 'Construction Project Management Software'; // Change text for fourth image
        destination = "/managementSoftware";
    }else if (isEleventhImage) {
        overlayText = 'Health And Safety Procedures In COnstruction Project'; // Change text for fourth image
        destination = "/safetyProcedure";
    }
 
    return (
        <Link to={destination} className="image-link">
            <div className="image-container">
                <img
                    className='blog-Image'
                    src={src}
                    alt={alt}
                    style={{ ...hoverStyle }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <div className="image-overlay">
                    <p className="overlay-text">{overlayText}</p>
                </div>
            </div>
        </Link>
    );
}

function Blog() {
    return (
        <div className="blog-container">
            <img
                src="/Images/Logo.png"
                alt="Enter Construction"
                className="construction-image"
            />
            <h2 className="blog-heading">
                Read our blogs to stay up to date with the latest construction trends, advancements, and technologies
            </h2>

            <div className="image-grid">
                <BlogImage src="/Images/RENEWABL_ ENERGY.png" alt="Renewable Energy" isFirstImage={true}/>
                <BlogImage src="/Images/Recycling.png" alt="Recycling" isSecondImage={true} />
                <BlogImage src="/Images/Smart_System.png" alt="Smart System" isThirdImage={true}/>
                <BlogImage src="/Images/Innovative_Design.png" alt="Innovative Design" isFourthImage={true}/>
                <BlogImage src="/Images/awrwef.png" alt="Image 5" isFifthImage={true} />
                <BlogImage src="/Images/Eco-friendly_Materials.png" alt="Eco-friendly Materials" isSixthImage={true} />
                <BlogImage src="/Images/Efficient_Equipment.png" alt="Efficient Equipment" isSeventhImage={true}/>
                <BlogImage src="/Images/Integrated_Solutions.png" alt="Integrated Solutions" isEighthImage={true}/>
                <BlogImage src="/Images/Predictive_Maintenance.png" alt="Predictive Maintenance" isNinthImage={true} />
                <BlogImage src="/Images/Predictive_Maintenance.png" alt="Predictive Maintenance" isTenthImage={true}/>
                <BlogImage src="/Images/Predictive_Maintenance.png" alt="Predictive Maintenance" isEleventhImage={true}/>
                
            </div>
        </div>
    );
}

export default Blog;
