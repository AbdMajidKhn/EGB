import React from 'react';

function Blog() {
    return (
        <div style={{ width: '100%', height: '100%', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginTop: '200px', fontSize: '2rem', color: '#333' }}>
                Read our blogs to stay up to date with the latest construction trends, advancements, and technologies
            </h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <img
                    className='blog-Image'
                    src="/Images/RENEWABL_ ENERGY.png"
                    alt="Renewable Energy"
                    style={{
                        width: '22%', // Adjusted for four images in one line
                        borderRadius: '20px',
                        margin: '0.5rem'
                    }}
                />
                <img
                    className='blog-Image'

                    src="Images/Smart_System.png"
                    alt="Smart System"
                    style={{
                        width: '22%', // Adjusted for four images in one line
                        borderRadius: '20px',
                        margin: '0.5rem'
                    }}
                />
                <img
                    className='blog-Image'

                    src="Images/Innovative_Design.png"
                    alt="Innovative Design"
                    style={{
                        width: '22%', // Adjusted for four images in one line
                        borderRadius: '20px',
                        margin: '0.5rem'
                    }}
                />
                <img
                    className='blog-Image'

                    src="Images/Recycling.png"
                    alt="Recycling"
                    style={{
                        width: '22%', // Adjusted for four images in one line
                        borderRadius: '20px',
                        margin: '0.5rem'
                    }}
                />
                <img
                    src="Images/Recycling.png"
                    alt="Recycling"
                    style={{
                        width: '22%', // Adjusted for four images in one line
                        borderRadius: '20px',
                        margin: '0.5rem'
                    }}
                />
                <img className='blog-Image'

                    src="Images/Recycling.png"
                    alt="Recycling"
                    style={{
                        width: '22%', // Adjusted for four images in one line
                        borderRadius: '20px',
                        margin: '0.5rem'
                    }}
                />
                <img
                    className='blog-Image'

                    src="Images/Recycling.png"
                    alt="Recycling"
                    style={{
                        width: '22%', // Adjusted for four images in one line
                        borderRadius: '20px',
                        margin: '0.5rem'
                    }}
                />
                <img
                    className='blog-Image'

                    src="Images/Recycling.png"
                    alt="Recycling"
                    style={{
                        width: '22%', // Adjusted for four images in one line
                        borderRadius: '20px',
                        margin: '0.5rem'
                    }}
                />
            </div>
        </div>
    );
};

export default Blog;
