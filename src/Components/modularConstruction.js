import React from 'react';

function ModularConstruction() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h2 style={styles.heading}>
                    Modular Construction: A Cost-Effective Solution
                </h2>

                <p style={styles.paragraph}>
                    Modular construction is rapidly rising in popularity due to its cost-effective and bespoke nature. But what exactly is it, and why is it becoming so popular?
                </p>

                <h3 style={styles.subHeading}>What Is Modular Construction?</h3>
                <p style={styles.paragraph}>
                    Modular construction is a building technique that involves the construction of building modules off-site. These modules are then transported to the construction site, where they are assembled into the final structure.
                </p>

                <h3 style={styles.subHeading}>A Brief History</h3>
                <p style={styles.paragraph}>
                    The very first modular building was designed and created in 1837 by a carpenter from London called Henry Manning. His son was emigrating to Australia, and he needed to create a building that could be transported by sea in parts and then reconstructed on arrival.
                </p>
                <p style={styles.paragraph}>
                    After that, modular construction became very popular in Australia and had a surge in popularity in 1853. Between 1848 to 1855, during the Gold Rush in California, modular kit homes were needed for the prospectors who moved around regularly but still needed shelter.
                </p>
                <p style={styles.paragraph}>
                    During the second world war, modular construction saw another surge in popularity due to front-line soldiers needing shelter. These buildings were known as Bellman Hangars and Nissen huts. Prefabricated buildings were also used to house people who lost their homes during the Blitz.
                </p>
                <p style={styles.paragraph}>
                    The first modular building to appear in the UK was in 1903, created by engineer John Alexander Brodie. He created the UK’s first modular apartment blocks in Liverpool. After that, modular buildings took off in Europe but weren’t as popular in the UK.
                </p>
                <p style={styles.paragraph}>
                    This has changed recently in the UK with a sudden surge of popularity as more people are understanding the array of benefits that this type of construction offers.
                </p>

                <h3 style={styles.subHeading}>The 6 Key Benefits of Modular Construction</h3>
                <p style={styles.paragraph}>
                    <strong>Time:</strong> It’s a faster process than traditional on-site construction. Projects made using the modular construction process can be achieved 30 – 50% quicker.
                </p>
                <p style={styles.paragraph}>
                    <strong>Cost-Effective:</strong> A lot of modular construction companies offer flexible payment options and shorter time frames for completion, making it a very cost-effective choice.
                </p>
                <p style={styles.paragraph}>
                    <strong>Bespoke Design:</strong> Modular construction can be tailored to your exact requirements. The buildings are custom-made to match the space you have and your budget.
                </p>
                <p style={styles.paragraph}>
                    <strong>Eco-Friendly:</strong> Modular construction produces far less waste than traditional on-site building methods. The finished building can also be dismantled again and reused on another site, meaning less use of new materials.
                </p>
                <p style={styles.paragraph}>
                    <strong>Not Limited By Weather:</strong> Between 60 – 90% of the construction happens inside a building, meaning delays due to bad weather are a thing of the past.
                </p>
                <p style={styles.paragraph}>
                    <strong>Stronger Structures:</strong> Every element of a modular building is designed to withstand transportation, making each section incredibly strong. When combined together, the building will be stronger than one created on-site.
                </p>

                <p style={styles.paragraph}>
                    Modular construction is not a new concept and due to improvements in technology, there has been a steep rise in demand. It’s certainly a choice worth considering for your next building project.
                </p>
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
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    heading: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#000',
        transition: 'color 0.3s',
    },
    subHeading: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#007bff',
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        textAlign: 'left',
        marginBottom: '20px',
        width: '80%',
        margin: '0 auto',
    },
};

export default ModularConstruction;
