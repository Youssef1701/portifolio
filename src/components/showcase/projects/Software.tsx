import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.jpg';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>youssefehab.com</h2>
                <br />
                <p>
                    youssefehab.com is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2022, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early February and began
                    development early March. I've been developing it alongside
                    my last semester at university and if you are reading this,
                    it's pretty much done!
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://portifolio-gold-theta.vercel.app/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://profile-phi-rust.vercel.app/"
                        >
                            <p>
                                <b>[3D Site]</b> - youssefehab.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://portifolio-gold-theta.vercel.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - myportifolio.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Youssef1701"
                        >
                            <p>
                                <b>[GitHub]</b> - Github account
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Youssef1701?tab=repositories"
                        >
                            <p>
                                <b>[GitHub]</b> - Github Repos
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on Facebook{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/youssef.ehab.35728"
                    >
                        @youssefehab
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>3D Bruno Simon's portifolio</h2>
                <br />
                <p>
                    I successfully built a portifolio that was identical to
                    Bruno Simon's profile which was challenging for me when I
                    was a beginner in that major but I tried day after day
                    untill I successfully built a similar portifolio
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Bruno simon's portifolio demo,
                                featuring the main car with the 3D world and
                                objects.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    This portifolio was a really fun project to work on and had
                    a multitude of challenges. An interesting challenge that you
                    may not even notice was the movement of objects such as the
                    letters and walls. Making blender 3D objects be interactive
                    was also very callenging thing to do because in the world of
                    movement you are dealing with such a little amount of
                    information. Even a single misplaced line can cause a sprite
                    to read in a totally different and unintended way. To deal
                    with this we developed an algorithm to prioritize outlines,
                    while rotating the insides with a simple Nearest Neighbor
                    algorithm. Doing so resulted in a relatively readable
                    profile. It was a surprisingly difficult challenge as it
                    intersected both art and programming, but was fun to work on
                    overall.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://bruno-simon.com/"
                        >
                            <p>
                                <b>[GitHub]</b> - Bruno's Portifolio
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/brunosimon"
                        >
                            <p>
                                <b>[GitHub]</b> - Bruno Simon's GitHub
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately, I can't publish the cloned version due to the
                    copyrights and other stuff.
                </p>
            </div>
            <div className="text-block">
                <h2>Farah's Room</h2>
                <br />
                <p>
                    Farah Mokbel is considered a very well known marketer as she
                    has achieved many marketing targets in her career and it was
                    an honor for me to be asked to make her profile. I enjoyed
                    this website as I was choosing colors and the shape of the
                    chair and all of that as to show the personality of the
                    person whish the profile is made for him.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> 3D room in the profile
                        </sub>
                    </p>
                </div>
                <p>
                    The web is currently released on the Chrome web but it's
                    still under construction as not the full infromation has
                    been added to the profile.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://farah-mokbel.vercel.app/"
                        >
                            <p>
                                <b>[Chrome Web app]</b> - Farah's Portifolio
                            </p>
                        </a>
                    </li>
                </ul>
                <p></p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
