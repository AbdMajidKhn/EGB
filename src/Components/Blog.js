import React, { useState } from 'react';

function BlogImage({ src, alt }) {
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

    return (
        <img
            className='blog-Image'
            src={src}
            alt={alt}
            style={{ width: '22%', height: '280px', borderRadius: '20px', margin: '0.5rem', ...hoverStyle }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
}

function Blog() {
    return (
        <div style={{ width: '100%', height: '100%', margin: '0 auto', textAlign: 'center' }}>
            <img
                src="/Images/Enter_Construction.png"
                alt="Enter Construction"
                style={{ position: 'absolute', top: '55px', left: '55px', width: '200px', height: '47px' }}
            />
            <h2 style={{ marginTop: '200px', fontSize: '2rem', color: '#333' }}>
                Read our blogs to stay up to date with the latest construction trends, advancements, and technologies
            </h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <BlogImage src="/Images/RENEWABL_ ENERGY.png" alt="Renewable Energy" />
                <BlogImage src="/Images/Recycling.png" alt="Recycling" />
                <BlogImage src="/Images/Smart_System.png" alt="Smart System" />
                <BlogImage src="/Images/Innovative_Design.png" alt="Innovative Design" />
                <BlogImage src="/Images/awrwef.png" alt="Image 5" />
                <BlogImage src="/Images/Eco-friendly_Materials.png" alt="Eco-friendly Materials" />
                <BlogImage src="/Images/Efficient_Equipment.png" alt="Efficient Equipment" />
                <BlogImage src="/Images/Integrated_Solutions.png" alt="Integrated Solutions" />
                <BlogImage src="/Images/Predictive_Maintenance.png" alt="Predictive Maintenance" />
                <BlogImage src="/Images/Predictive_Maintenance.png" alt="Predictive Maintenance" />
                <BlogImage src="/Images/Predictive_Maintenance.png" alt="Predictive Maintenance" />
                <BlogImage src="/Images/Predictive_Maintenance.png" alt="Predictive Maintenance" />
                {/* Add more images as needed */}
            </div>
        </div>
    );
}

export default Blog;
