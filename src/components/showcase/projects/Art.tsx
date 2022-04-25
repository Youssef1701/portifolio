import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import fxGif from '../../../assets/pictures/projects/art/fx.gif';
import grunt from '../../../assets/pictures/projects/art/grunt.gif';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Art & Design</h1>
            <h3>Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                    While I love programming and software development, Art,
                    Design, and Animation will always hold a special place in my
                    heart.
                </p>
                <br />
                <p>
                    Here are a few projects/things I've done over the years to
                    keep the artistic side of me alive. I'm always looking to
                    push myself creatively and learn new things.
                </p>
            </div>
            <div className="text-block">
                <h2>Pixel Art and Animation</h2>
                <br />
                <p>
                    In high school, I started learning how to draw and animate
                    pixel art after becoming interested in video game
                    development. As I worked on making games over the years, I
                    learned so much about pixel art and fell in love with
                    animation.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Eight Frame Run cycle animated by
                            myself, original sprite by kevink
                        </sub>
                    </p>
                </div>
                <p>
                    I really started enjoying the work I was doing, and felt I
                    was improving a lot. Around 2017, I started to upload videos
                    of my work flow and animation process to YouTube just for
                    fun. I was really surprised however when my first video took
                    off and got a few thousand views! Below are the video links
                    to the work I uploaded to youtube.
                </p>
                <br />
                <h3>Video Links:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=pDtUX3ZVHJ0"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Walk Cycle Time-lapse
                                and Tutorial
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=xXEDKQ3wSfM"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art "Bag Up" Animation
                                Time-lapse
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=leZzb-Y0SKQ"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Bipedal Creature Run
                                Cycle Time-lapse
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                {/* <p>
                    I fell off doing pixel art once I got to college and started
                    to really focus on my work and education, but I will forever
                    be thankful to have been a part of the pixel art community
                    for the few years I was involved. I also learned a lot of
                    invaluable lessons of animation and design that apply all
                    the time to the work I do now.
                    
                    nah not this ^^
                    
                    Still doing it today! Not as active as I was in highschool,
                    but I'm still learning and growing.
                </p> */}
                <div className="captioned-image">
                    <img src={grunt} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Grunt from my game Guntattchment -
                            Saga run cycle, attack and death animation.
                        </sub>
                    </p>
                </div>

                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        width: '100%',
    },
};

export default ArtProjects;