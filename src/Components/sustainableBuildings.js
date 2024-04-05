import React from 'react';

function SustainableBuildings() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h1 style={styles.heading}>Advantages of Sustainable Buildings</h1>
                <div>
                    <h2 style={styles.subHeading}>Environmental</h2>
                    <ul style={styles.list}>
                        <li>Globally, buildings are responsible for 40% of final energy consumption and 36% of carbon emission every year, however, it is possible to minimize this use by designing green buildings that are environmentally responsible and resource-efficient throughout their lifecycle.</li>
                        <li>Around 30% of the energy used by buildings is wasted every year through heat loss and cooling. A green building with an appropriate design reduces this energy waste to almost 0% by means of natural heating and cooling and prevents global temperature increases for future generations.</li>
                        <li>Green buildings can reduce water consumption by 40% every year.</li>
                        <li>Green buildings reduce waste and pollution in their construction and demolition and use renewable energy and local resources instead of fuel.</li>
                    </ul>

                    <h2 style={styles.subHeading}>Economic</h2>
                    <ul style={styles.list}>
                        <li>According to the lifecycle planning and financial calculations, green buildings offer a more economic solution compared to conventional buildings in the long run. The main reason for this is the savings from energy use.</li>
                        <li>Green buildings are capable of increasing the asset value by 7%.</li>
                        <li>The materials used for sustainable building construction have a longer time span and can also reduce the maintenance requirements through the collaboration of architects and engineers.</li>
                    </ul>

                    <h2 style={styles.subHeading}>Social</h2>
                    <ul style={styles.list}>
                        <li>Green buildings increase living standards as they provide better natural light and thermal performance. In fact, it is reported a significant increase in occupant health in green buildings.</li>
                        <li>The indoor air quality increases as green buildings are designed with ventilation solutions, and this enhances employee productivity and the working environment in the offices.</li>
                        <li>The increase of asset value and indoor life standards can also contribute to the local GDP.</li>
                        <li>A sustainable building respects the aesthetics and architectural quality, the buildings can look remarkably different, more resilient, and greener.</li>
                    </ul>
                </div>
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
    list: {
        paddingLeft: '20px',
    },
};

export default SustainableBuildings;
