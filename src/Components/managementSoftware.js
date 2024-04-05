import React from 'react';

function ManagementSoftware() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h1 style={styles.heading}>Construction Project Management Software</h1>
                <p style={styles.paragraph}>
                    Today, the world’s largest economy derives from the construction sector, with about 13% of the world’s GDP every year. However, if we look at this sector closely, we can see that the industry’s productivity growth has only increased 1% over the past 20 years.
                </p>
                <p style={styles.paragraph}>
                    To increase the sector’s productivity, new tools have been designed to improve several areas such as regulations, contracts, procurement, supply chain, technology, and innovation. With the increasing need for project management in the construction field, digital software became more and more crucial to organize tasks, collect data, and connect the necessary activities.
                </p>
                <h2 style={styles.subHeading}>What is a Construction Management Software?</h2>
                <p style={styles.paragraph}>
                    Construction management software solutions are tools designed to streamline construction processes by handling everything from organizing tasks, scheduling events, evaluating the project’s scope, and assigning resources. They can also track business expenses, create purchase orders, and invoices according to the budget.
                </p>
                <h2 style={styles.subHeading}>Benefits of Construction Management Software</h2>
                <ol style={styles.list}>
                    <li>Simplifies the management process</li>
                    <li>Increases efficiency and control</li>
                    <li>Remote access</li>
                    <li>Document control and archiving</li>
                    <li>Integration with other software</li>
                    <li>Simplifies everything</li>
                </ol>
                <h2 style={styles.subHeading}>Examples of Construction Management Software</h2>
                <p style={styles.paragraph}>
                    Archdesk is the most preferred software both by the architects and construction managers. It is a cloud-based software designed for providing service to manufacturing and construction enterprises by invoicing, quoting, production control, and project management.
                </p>
                <p style={styles.paragraph}>
                    Smartsheet is another solution designed to serve many of the world’s largest construction companies. Regardless of the size of the project, it provides a real-time view of the tasks from the entire project. It works like a spreadsheet tool that tracks team projects, combining similar sheets for a better work management experience.
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

export default ManagementSoftware;
