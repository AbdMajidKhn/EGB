import React from 'react';

function DronesConstruction() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h1 style={styles.heading}>The Usage of Drones in Construction</h1>
                <p style={styles.paragraph}>
                    Efficiency is one of the key factors in the construction sector and a minor improvement in operations can save up to millions of dollars. For the last few years, drones are being used in the construction sector to increase spatial data precision and site surveillance. They are also used to transport materials. In fact, it is the most cost-effective solution.
                </p>
                <h2 style={styles.subHeading}>The benefits of drones for construction projects are numerous:</h2>
                <ul style={styles.list}>
                    <li>Remote working</li>
                    <li>On-site image acquisition</li>
                    <li>Data accuracy and precision</li>
                    <li>Live data and site surveillance available upfront</li>
                    <li>Data transparency that leads to increased productivity</li>
                    <li>Reduce labor and machinery time</li>
                    <li>Reach locations and angles that are inaccessible by the workmen</li>
                    <li>Avoid thefts and provide security of the construction site</li>
                </ul>
                {/* Additional content can be added based on the provided text */}
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
    },
    video: {
        position: 'fixed',
        right: 0,
        bottom: 0,
        minWidth: '100%',
        minHeight: '100%',
        zIndex: -1,
    },
    content: {
        position: 'relative',
        zIndex: 1,
        padding: '20px',
    },
    heading: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#000', // Change heading color to black
    },
    subHeading: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#007bff', // Change subheading color to bluish
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        textAlign: 'left',
        marginBottom: '20px',
    },
    list: {
        paddingLeft: '20px',
    },
};

export default DronesConstruction;
