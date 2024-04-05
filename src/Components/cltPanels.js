import React from 'react';

function CLTPanels() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h1 style={styles.heading}>CLT Panels in Green Construction</h1>
                <p style={styles.paragraph}>
                    CLT, or cross laminated timber panels are structural panels of 3, 5, 7 or more layers glued (at 90 degrees) and pressed together. Their ability to resist high compressive forces makes them cost-effective compared to steel and brick constructions. CLT systems are becoming more popular in the world as they meet complex design and sustainability goals.
                </p>
                <h2 style={styles.subHeading}>Common Applications of CLT Panels</h2>
                <p style={styles.paragraph}>
                    CLT panels provide strength and stability in mid and high-rise buildings. They can be used for residential, commercial or office buildings of up to 8 levels.
                </p>
                <p style={styles.paragraph}>
                    Common applications of CLT panels include floors, walls, and roofing. They can be also used in balconies, stairs, and even for elevator shafts.
                </p>
                <h3 style={styles.subHeading}>Floors</h3>
                <p style={styles.paragraph}>
                    CLT panels are suited for floor systems as they provide aesthetics and on-site assembly that simplifies the construction process. These panels are shipped to the site and installed in short periods.
                </p>
                <h3 style={styles.subHeading}>Walls</h3>
                <p style={styles.paragraph}>
                    CLT wall panels are a cost-effective solution to pre-cast concrete systems. They are lighter and easier to assemble. Also, when applied together with the CLT floor system, they provide better efficiency and flexibility for different types of building designs. Being a load-bearing element, CLT panels can be used as the structural system for the entire project.
                </p>
                <h3 style={styles.subHeading}>Roofs</h3>
                <p style={styles.paragraph}>
                    CLT roofs can be easily installed on-site, and they can efficiently span up to 12 meters. CLT panels are 5 times lighter than concrete and steel, allowing to create much greater open spaces.
                </p>
                {/* Add more sections based on the provided content */}
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
};

export default CLTPanels;
