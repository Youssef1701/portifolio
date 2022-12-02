import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/102912.jpeg';
import gsts from '../../../assets/pictures/projects/art/10305.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Lego</h1>
            <h3>Art & Design</h3>
            <br />
            <div className="text-block">
                <p>
                    While I love programming and software development, Art,
                    Design, and Animation will always hold a special place in my
                    heart.
                </p>
                <br />
                <p>
                    To make a good web or app you always must add some art and
                    creative design in it to attract the eye of the visitor to
                    make him curious to scroll more and more throw your project.
                </p>
            </div>
            <div className="text-block">
                <h2>Pixel Art and Animation</h2>
                <br />
                <p>
                    Lego always has the ability to make any person love to think
                    and how to build things and enjoy every moment in order to
                    complete project successfully all well done.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Lego home.
                        </sub>
                    </p>
                </div>
                <p>
                    I really started enjoying the work I was doing, and felt I
                    was improving a lot. Around 2017, I started to upload videos
                    of my work flow and animation process to YouTube just for
                    fun. I was really surprised however when my first video took
                    off and got a few views!
                </p>
                <br />
                <h3>Video Links:</h3>
                <br />

                <br />
                <div className="captioned-image">
                    <img src={gsts} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Full city lego published it on
                            their website.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    This page is currently a work in progress. I've recently
                    found myself wanting to make more pixel art recently and I
                    have some project plans and ideas in the works. Expect
                    updates to this page as I dive back into the world of pixel
                    art!
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
