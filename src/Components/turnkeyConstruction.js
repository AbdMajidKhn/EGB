import React from 'react';

function TurnkeyConstruction() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h1 style={styles.heading}>Why Turnkey Construction</h1>
                <p style={styles.paragraph}>
                    The turnkey construction projects offer a lot of benefits and simplify things for the owner of the project. The owner only needs to wait for the project to be completed and when finished, he/she will be able to turn the key and start using the new building. The advantages are numerous:
                </p>
                <ul style={styles.list}>
                    <li><strong>ONE COMPANY FOR EVERYTHING:</strong> Having one company to contact facilitates your relationship with the project, all the necessary communications will be dealt with by the company’s skilled staff and keep you away from the stress of the workload.</li>
                    <li><strong>COMPANY PORTFOLIO:</strong> It is easier to check the company's success and previous achievements in the tendering process. The client can browse through past projects and learn about the reputation of the bidding company. This way the research and tendering process takes less time.</li>
                    <li><strong>HIGHLY SKILLED AND TRUSTWORTHY LABORING:</strong> The contracting company is responsible for resource assignment for all the activities of the project. This means they deal with finding the most skilled and experienced employees.</li>
                    <li><strong>REDUCED COSTS:</strong> The turnkey construction company has suppliers and staff all ready, this means they already have found the best solution on the market. There are lots of great offers for companies, however, it is not the same when a client decides to work things separately. Other than that, the company has its staff and labor for a fixed price.</li>
                    <li><strong>REDUCED TOTAL TIME AND ERROR MARGIN:</strong> The project manager schedules the activities and figures the slacks and tasks that can be established at the same time. These are tasks that are not linked to each other. The manager has a lot of experience and takes references from his/her past projects. This does not mean that the construction will take less but prevent delays in the total project as much as possible.</li>
                    <li><strong>CONTRACT AND INSURANCE FOR UNEXPECTED COSTS:</strong> When agreeing with a company, the contract type deals with several issues regarding unexpected events. These can be unexpected costs and delays in the project schedule. However, these situations can be solved from the beginning such as agreeing to pay the extra costs by both parties or, every delay occurring from the company can be paid by them.</li>
                    <li><strong>INVOICES ORGANIZED BY ONE COMPANY:</strong> Invoices are one of the hardest things to keep track of, especially when you have several companies working for you. Some may get lost or misplaced. In the case of a turnkey project, invoices are kept together and checked by one company.</li>
                    <li><strong>GUARANTEED QUALITY:</strong> A turnkey company can guarantee the same level of quality for each stage of the construction. All the steps including the design, manufacturing, and installation must have the same standards by the providing company.</li>
                </ul>
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

export default TurnkeyConstruction;
