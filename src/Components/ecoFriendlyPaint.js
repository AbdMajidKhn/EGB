import React from 'react';

function EcoFriendlyPaint() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h1 style={styles.heading}>Eco-Friendly Paint vs. Traditional Paint</h1>
                <p style={styles.paragraph}>
                    One of the biggest and last jobs when fixing up a new building is the painting part. Both for the interior and exterior, there are a few things to consider when choosing the paint. The durability and ecological aspects are as important as the color and aesthetics, and they have a long-term impact both on the owner and the environment. For this reason, it is necessary to compare and choose wisely when deciding on paint varieties.
                </p>
                <p style={styles.paragraph}>
                    All paints are comprised of three main elements: pigments that give color to the paint, the binder that keeps the compounds together, and the carrier that helps distribute the paint homogeneously. What changes is the amount of hazardous chemicals that are added into the solvents.
                </p>
                <p style={styles.paragraph}>
                    A simple labeling system helps buyers understand the level of VOC in the paint. These are classified into 5 categories:
                </p>
                <ul style={styles.list}>
                    <li>Minimal</li>
                    <li>Low</li>
                    <li>Medium</li>
                    <li>High</li>
                    <li>Very High</li>
                </ul>
                <p style={styles.paragraph}>
                    <strong>Conventional Paints:</strong> Traditional paints are composed of a mix of organic compounds and chemicals. These are adhesives, hardeners, solvents, pigments, and more. In conventional paints, the solvents are usually Volatile Organic Compounds (VOC). This helps keep the ingredients blended while the paint is still liquid. It may not be unhealthy at this state, however when the paint is applied on the surfaces, the chemicals escape to the air creating a toxic environment.
                </p>
                <p style={styles.paragraph}>
                    VOCs combine with other airborne pollutants and create smog when it is applied on the façades. Moreover, in the interior environment, VOCs and other plasticizers decrease the air quality and may contribute to respiratory tract diseases in the long run, such as asthma and lung cancer.
                </p>
                <p style={styles.paragraph}>
                    <strong>Eco-Friendly Paints:</strong> Eco-friendly paints can be divided into 2 categories: Certified Green Paints and Natural Paints.
                </p>
                <p style={styles.paragraph}>
                    <strong>Certified Green Paints:</strong> Certified Green Paints have a lower environmental impact and can be free of plasticizers and toxic biocides. These are as durable as conventional paints and allow airflow through the building. They can prevent mold and discoloration for longer periods.
                </p>
                <p style={styles.paragraph}>
                    <strong>Natural Paints:</strong> Natural paints, on the other hand, are primarily made of milk proteins, vegetable oils, natural minerals, and non-toxic pigments. The primary binders are linseed oil, and the pigments are made from lime and milk paint. VOC-free paints are odorless and tend to use water as a carrier instead of petrochemical solvents.
                </p>
                <p style={styles.paragraph}>
                    These are less durable than the modern coatings and color choices are mostly limited. Also, since they contain natural oils, it takes more time to dry. However, the benefits are numerous when considering human health.
                </p>
                <p style={styles.paragraph}>
                    Natural paints are microporous, meaning that they are the perfect choice for older houses that need to breathe. If applied correctly, their durability can be extended, and the pigment-loading can be maximized to avoid fading.
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

export default EcoFriendlyPaint;
