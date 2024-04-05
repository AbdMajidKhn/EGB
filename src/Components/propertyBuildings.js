import React from 'react';

function PropertyBuilding() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h2 style={styles.heading}>
                    How Sustainable Construction Impacts Property Value
                </h2>

                <p style={styles.paragraph}>
                    Sustainable buildings are environmentally friendly buildings that save energy and reduce running costs.
                </p>

                <p style={styles.paragraph}>
                    Knowing that eco-friendly green buildings decrease operation costs by about 10%, maintenance costs by 20%, water consumption by 10%, energy consumption by 25%, and CO2 emissions by about 35%, real-estate developers and investors are still leaning toward conventional buildings, aiming for short term returns and quick financial rewards. Could their assumptions of which investment decision is best be wrong? Even when disregarding the environmental benefits?
                </p>

                <p style={styles.paragraph}>
                    A recent study by RAMBOLL titled ‘SUSTAINABLE BUILDINGS MARKET STUDY 2019’ helps us answer part of questions.
                </p>

                <h3 style={styles.subHeading}>
                    Could a sustainable commercial building be worth more than a conventional one?
                </h3>

                <p style={styles.paragraph}>
                    A recent study showed increased property value of sustainable buildings. Out of the respondents, 30% of the property owners or investors report an actual increase in property value of up to 3%, 25% report an increased property value of 4-10% and 9% report an increased property value of more than 10%.
                </p>

                <p style={styles.paragraph}>
                    In addition, there were other key factors the respondents consider when deciding on whether to build sustainable or conventional buildings. In terms of perceived added value, this is the most popular item associated with sustainable buildings in the survey (48%), followed by healthier and more comfortable spaces (38%) and higher quality (30%).
                </p>

                <h3 style={styles.subHeading}>
                    Higher initial costs of sustainable buildings are just based on assumptions
                </h3>

                <p style={styles.paragraph}>
                    On the other hand, most of the participants believed that sustainable buildings are more expensive. Two thirds of respondents believe it’s more expensive to build a sustainable building, whilst 15% indicate they don’t know if costs are increased. They also mentioned that the higher costs, whether perceived or actual, are also the biggest barrier preventing sustainability measures (64%), followed by lack of market demand (38%) and lack of faith in the profitability of green buildings (36%).
                </p>

                <h3 style={styles.subHeading}>
                    Lack of knowledge keeps us away from achieving our goals
                </h3>

                <p style={styles.paragraph}>
                    The biggest problem facing a complete shift to sustainable buildings is the lack of knowledge of decision makers. The same study showed that 37% of the property owners didn’t know if sustainability features increase the property value of their building. 56% of the property owners have no knowledge of the impact on vacancy rates. 41% have no knowledge of the impact on rent level. 31% of them have no knowledge of the operating costs of sustainable versus non-sustainable buildings.
                </p>

                <h3 style={styles.subHeading}>
                    Conclusion
                </h3>

                <p style={styles.paragraph}>
                    Surprisingly, most real-estate developers and investors take their decisions based on assumptions rather actual facts. While it’s crucial to consider the environmental impact for a better future of our society, the long term financial rewards can help convince investors invest in the right place.
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
        color: '#000', // Change heading color to black
        transition: 'color 0.3s',
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
        width: '80%',
        margin: '0 auto',
    },
};

export default PropertyBuilding;
