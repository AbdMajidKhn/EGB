import React from 'react';

function WoodGreen() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h1 style={styles.heading}>Using Wood in Green Building Construction</h1>
                <p style={styles.paragraph}>
                    Using wood in green building construction has both ecological and economic advantages. Many studies that conduct analyses on life cycle performance and environmental impacts of buildings show that wood outperforms most materials in reducing energy use, greenhouse gases, air pollution, and solid waste.
                </p>
                <p style={styles.paragraph}>
                    By using wood, an environmentally friendly and resource-efficient material, in all stages of a construction project, we can reduce an estimated 21 million tons of CO₂ from the atmosphere annually. This accounts for nearly 40% of annual global CO₂ emissions in the world. For this reason, there is a growing need to design projects using sustainable resources that can grow naturally and use energy from the sun and are reusable and renewable.
                </p>
                <p style={styles.paragraph}>
                    Architects can incorporate sustainable and aesthetic features into their designs through the choice of wood as the main construction material. The advantages are numerous:
                </p>
                <ul style={styles.list}>
                    <li><strong>Acoustic Properties:</strong> Wood can prevent echo and noise by absorbing sound.</li>
                    <li><strong>Tensile Strength:</strong> Wood outperforms steel when it comes to self-support length, allowing for larger spaces with fewer supports.</li>
                    <li><strong>Thermal Performance:</strong> Wood does not expand against heat, gaining strength instead.</li>
                    <li><strong>Electrical Properties:</strong> Wood has a natural resistance to electrical conduction.</li>
                    <li><strong>Aesthetics:</strong> Wood presents an incredible range of aesthetic options available for construction.</li>
                    <li><strong>Oxidation Properties:</strong> Unlike metals, wood is resistant to oxidation.</li>
                    <li><strong>Working Properties:</strong> The maintenance and repair of wood are much easier and cost less than other materials.</li>
                    <li><strong>Health and Well-being:</strong> Wood is hypoallergenic and can improve air quality by absorbing extra moisture in the air.</li>
                </ul>
                <p style={styles.paragraph}>
                    Even though wood in the construction field has been moved away to prevent deforestation for ecological concerns, a closer look at other materials and their impact on greenhouse gases is necessary. Unlike concrete or metal structures, wood is a renewable and reusable material that grows through natural processes that can be supported by forestry management.
                </p>
                <p style={styles.paragraph}>
                    Finally, as wood is more readily processed for use, it allows the production process to move faster, with less energy and water. This allows the construction project to maximize efficiency and produce less waste.
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
        padding: '20px',
    },
    heading: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#000', // Change heading color to black
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        textAlign: 'left',
        marginBottom: '20px',
    },
    list: {
        paddingLeft: '20px',
        textAlign: 'left',
    },
};

export default WoodGreen;
