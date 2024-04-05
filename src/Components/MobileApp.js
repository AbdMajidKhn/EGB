import React from 'react';

function BuildingInstruction() {
    return (
        <div style={styles.container}>
            <video autoPlay loop muted style={styles.video}>
                <source src="/Videos/Moving_Gradient_Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.content}>
                <h2 style={styles.heading}>
                    Building Information Modeling
                </h2>

                <p style={styles.paragraph}>
                    BIM (Building Information Modeling) solves the biggest problem facing the construction industry: collaboration. As the world grows smarter, so does our need for intelligent technology in construction. With BIM as the new standard in the industry, what was once a fantasy is now a reality.
                </p>

                <h3 style={styles.subHeading}>BIM in a nutshell</h3>
                <p style={styles.paragraph}>
                    BIM uses collaborative 3D modeling software to build an interactive, virtual super-blueprint. In terms of enhancing collaboration, this 3D model does far more than any two-dimensional model could ever dream of. This is BIM (Building Information Modeling) basics in 5 minutes or less.
                </p>

                <h3 style={styles.subHeading}>BIM, The problem solver</h3>
                <p style={styles.paragraph}>
                    No longer are architects, engineers, and builders at odds – about modeling anyway. With BIM, the conflicts of old are put to rest. In the past with previous modeling technology like blueprints, it was easy for conflicts to erupt because everyone involved was working on their own copy or version of a project. Then CAD prompted a swift evolution into 3D modeling and highlighted the greater need for collaboration.
                </p>

                <h3 style={styles.subHeading}>BIM In civil works</h3>
                <p style={styles.paragraph}>
                    Although BIM is primarily associated with the construction and building industry, we ought not to put a cap on its potential to work for us in other areas. Civil engineers, in particular, can benefit greatly from this collaborative tool.
                </p>
                <ul style={styles.list}>
                    <li>
                        <strong>Visualize the entire project:</strong> Civil engineers need to see the bigger picture of their projects, and BIM allows them to do so. With BIM, civil engineers can map out otherwise unseen areas, thus saving time, money, conflict, and manpower.
                    </li>
                    <li>
                        <strong>BIM levels:</strong> These levels go beyond 3D modeling. BIM software allows its users to map out up to four further dimensional elements such as the fourth dimension of time, a fifth for cost, a sixth for waste reduction, and even a seventh dimension of organization facilitation.
                    </li>
                    <li>
                        <strong>Realistic Modeling:</strong> BIM models incorporate and communicate real geospatial data, geometric infrastructure modeling, and limit the possibility for error.
                    </li>
                </ul>

                <h3 style={styles.subHeading}>BIM as a mainstay</h3>
                <p style={styles.paragraph}>
                    BIM is the present and foreseeable future of construction intelligent modeling. As the most comprehensive modeling technology to date, Business Information Modeling has changed the way builders, architects, and engineers work on projects. By removing longstanding causes of conflict and increasing knowledge, BIM saves the construction industry time, costs, and materials. Construction industry professionals, particularly in civil engineering, will continue to discover more ways that BIM is relevant to their work.
                </p>

                <h4 style={styles.subHeading}>Company Name</h4>
                <p style={styles.paragraph}>
                    LLC "Enter Construction" <br/>
                    Legal address / Actual address <br/>
                    115114, Moscow, Derbenevskaya embankment, house 11, floor 1 room 72, 72a, 72b, 72v <br/>
                    INN: 9725037942 <br/>
                    OGRN
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
        color: '#fff', // Changed font color to white
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
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#333', // Adjusted heading color for better visibility
    },
    subHeading: {
        fontSize: '1.8rem',
        marginBottom: '15px',
        color: '#007bff',
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        textAlign: 'left',
        marginBottom: '20px',
    },
    list: {
        textAlign: 'left',
        marginBottom: '20px',
        paddingLeft: '20px',
    },
};

export default BuildingInstruction;
