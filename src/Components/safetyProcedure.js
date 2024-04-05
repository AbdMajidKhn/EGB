
import React from 'react';

function SafetyProcedure() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h1 style={styles.heading}>Health and Safety Procedures in Construction Projects</h1>
                <p style={styles.paragraph}>
                    Construction sites need to be carefully managed to prevent hazardous events from happening. For this reason, there are several rules and procedures to follow to ensure the safety of workers, the surrounding environment, and the people that live near the site. These rules can save lives, ensure that the construction project is delivered within the scope and on time, and eliminate unexpected costs that may arise from machine breakdown or labor injuries.
                </p>
                <h2 style={styles.subHeading}>Safety Training</h2>
                <p style={styles.paragraph}>
                    Safety training is an integral part of the construction project regulations that require teaching the workers injury management. Sharing relevant safety and health information with the workers is necessary for understanding hazards on the construction site.
                </p>
                {/* Additional content sections can be added here */}
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
    },
    subHeading: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '15px',
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        textAlign: 'left',
        marginBottom: '20px',
    },
};

export default SafetyProcedure;
