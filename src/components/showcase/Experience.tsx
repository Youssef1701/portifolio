import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>FSS</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'http://germanservicegroup.com/'}
                        >
                            <h4>www.fss.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full stack developer</h3>
                        <b>
                            <p>Summer 2020 - Fall 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Targeted towards online shipping content and making
                    integrations with all the shipping lines to have their rates
                    always up to date on the site. Also provided all the
                    information that could relate to the shipping process.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected and engineered the the whole website to
                            be akways easy to access all what you need without
                            going into many pages.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and implemented multiple features to
                            increase app usability and user experience while
                            ensuring the quality, maintainability and
                            scalability of the front end as the user base grew
                            by over 50,000.
                        </p>
                    </li>
                    <li>
                        <p>
                            Coordinated major refactors targeted towards app
                            optimization and performance resulting in a smoother
                            user experience and accomplished by eliminating
                            redundant re-renders and API calls by over 90%.
                        </p>
                    </li>
                    <li>
                        <p>
                            Directed and executed an internal migration of 3
                            individual repositories to a single monorepo,
                            greatly reducing overhead for developing new
                            features, fixing bugs, and managing dependencies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Rebuilt the website with React and shared mobile app
                            components allowing users to access a wide variety
                            of app interactions entirely on the web, resulting a
                            huge total site visits.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>BOSCH - EGYPT</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={
                                'http://germanservicegroup.com/art/index.html'
                            }
                        >
                            <h4>www.bosch.co</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Developer</h3>
                        <b>
                            <p>Fall 2021 - Spring 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Supervised and developed the front end of Bosch center, a
                    beautifully simple and effective show creation and showing
                    engine. Written in Javascript and deployed using Godaddy
                    panel.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Managed the project and team members by conducting
                            bi-weekly stand-ups.
                        </p>
                    </li>
                    <li>
                        <p>
                            Architected the UI using Adobe XD and custom lights
                            using Adobe Photoshop.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created a musically designed website to show the
                            power of innovation that Bosch center could give.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented the website in just 2 weeks bs making a
                            strict time management plan.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Extreme Zone</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={
                                'http://germanservicegroup.com/extreme/HouseOfSparta.html'
                            }
                        >
                            <h4>www.extremezone.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full stack developer</h3>
                        <b>
                            <p>Fall 2020, Summer 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Applied problem solving and disigning skills to operate a
                    website to be friendly for kids such as inserting 3D
                    caharcters, Loony tunes logo design, small face reactions
                    and providing an excitiment thow scrolling into website.
                </p>
                <br />
                <h3 style={styles.indent}>Other Projects:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Rubik's Cube solver using Python</p>
                        <p>
                            [{' '}
                            <a href="" target="_blank" rel="noreferrer">
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Stock Prediction using Machine learning</p>
                        <p>
                            [{' '}
                            <a href="" target="_blank" rel="noreferrer">
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Predicting employees turnover</p>
                        <p>
                            [{' '}
                            <a href="" target="_blank" rel="noreferrer">
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Certified Blockchain developer from IBM</p>
                        <p>
                            [{' '}
                            <a href="" target="_blank" rel="noreferrer">
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>
                            • Worked on small marketing campaigns to gain
                            experience.
                        </p>
                        <p>
                            <a href="" target="_blank" rel="noreferrer"></a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
