import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Youssef Ehab</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a student in Arab Academy for Science and Technology! I
                    also took the programming and desgining as my hobby as I am
                    now having a three years experince in this field.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:yehab1805@hmail.com">yehab1805@hmail.com</a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things
                    worked. This naturally led me to become absolutely obsessed
                    with Lego and I fell in love with building things. In
                    elementary school, I joined the engineering activities at my
                    local middle school, which was my first real exposure to
                    programming. In 2019, I joined AAST BIS major to learn more
                    about programming and to learn how the huge businesses
                    operates so to have both the degrees in my CV.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in university,
                    initially learning how to scrape and interact with websites.
                    I went on to do a ton of passion projects, many of them with
                    one of my closest friends,{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/farah-mokbel-07638524a/"
                    >
                        Farah Mokbel
                    </a>
                    . We worked on many projects together, including marketing
                    projects, multiple game projects, apps, and more. One of
                    these projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2021, I got the opportunity to make the website of BOSCH
                    Center Egypt to have a great push and a great experience for
                    me. It was my first huge project and I was absolutely
                    ecstatic to be doing such a great project like this. At the
                    end the CEO asked if I could meet him personnally and that
                    was an honour for me and I was full of happiness and joy, I
                    got an internship at Europe education, primarily focusing on
                    frontend work and being creative. I continued to work at
                    Hover on and off for about a year and a half, until the
                    start of my senior year when I decided to focus on other
                    opportunities.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="/projects/music">
                                Reading Books of scientific researches
                            </Link>{' '}
                            and creating{' '}
                            <Link to="/projects/art">Digital Art</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing Lego.
                        </p>
                        <br />
                        <p>
                            In college, I was an active member in the Enactus
                            and SU and held multiple positions in Enactus as
                            Head of Design. I met a lot of amazing people
                            through my fraternity and thoroughly enjoyed both
                            communitites.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on Facebbok{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/youssef.ehab.35728"
                    >
                        @youssefehab
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:yehab1805@gmail.com">yehab1805@gmail.com</a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
