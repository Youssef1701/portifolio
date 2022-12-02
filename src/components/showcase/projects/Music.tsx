import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/Fly me to the moon.mp3';
// @ts-ignore
import edge from '../../../assets/audio/La Vie.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/Call Out My Name .mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/Call Out My Name.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music & Sounds</h1>
            <h3>Ventures</h3>
            <br />
            <div className="text-block">
                <p>
                    Music has been a passion of mine for my whole life. When I
                    was young, I downloaded logic pro and started to learn how
                    to make music. I found a wonderful community on reddit
                    called r/edmproduction and by time I was able to choose the
                    right sound for every object in my projects..
                </p>
                <br />
                <p></p>
                <br />
                <p>
                    Below are some of my favorite songs and I was obsessed with
                    the beat and lyrics.
                </p>
            </div>
            <h2>Fly me to the moon</h2>
            <br />
            <p>
                Fly Me to the Moon", originally titled "In Other Words", is a
                song written in 1954 by Bart Howard. The first recording of the
                song was made in 1954 by Kaye Ballard. Frank Sinatra's 1964
                version was closely associated with the Apollo missions to the
                Moon
            </p>
            <br />
            <p></p>
            <br />

            <MusicPlayer
                src={house}
                title="Fly me to the moon"
                subtitle="Youssef Ehab- 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            {/* <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> A screenshot of the project file of
                        Timeless. 64 tracks in total.
                    </sub>
                </p>
            </div> */}
            {/* <p>
                I love so much about this track. I'm particularly very proud of
                the composition and the trichotomy of the happy upbeat energy in
                the intro and first drop, into the rich and euphoric bridge,
                before delving into the darkness of the final build and drop. I
                had an absolute blast making this back in the fall of 2020, and
                every time I revisit it to tweak it just a little more, I have
                so much fun.
            </p>
            <br />
            <p>
                After making this track around fall 2020, my interest for house
                overall was tapering off. Around this time I was starting to go
                to the gym more consistently and ended up listening to a lot
                more hard bass music, specifically drum & bass, mid tempo and of
                course dubstep.
            </p>
            <br /> */}
            <h2>la vie en rose</h2>
            <br />
            <p>
                Directly translated to "life in pink", "La vie en rose"
                essentially means seeing life through rose-coloured glasses.
                Living with an attitude or outlook of positivity, trying to see
                beauty in the everyday; like you do when you first fall in Love
            </p>
            <br />
            <MusicPlayer
                src={edge}
                title="La vie en rose"
                subtitle="Youssef Ehab- 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            {/* <p>
                This track is so dark and I love it! The bass and percussion are
                the obvious stars of the piece, and I had a blast designing each
                of them. The bass in this song is layered with a lot of textures
                and they really give it a lot of the character it needs to be
                the driving force of the track. The percussion on the other hand
                gives the track a lot of depth in the high end so when
                juxtaposed with the bass it radiates this dark and mysterious
                vibe.
            </p> */}
            <br />
            <h2>Call out my name</h2>
            <br />
            <p>
                Call Out My Name" is a song recorded by Canadian singer the
                Weeknd, taken from his first EP, My Dear Melancholy, released on
                March 30, 2018. The Weeknd co-wrote the song with his producer
                Frank Dukes, with Nicolas Jaar receiving writing credits for the
                sampling of his 2016 song "Killing Time". The song was sent to
                rhythmic contemporary radio on April 10, 2018, as the EP's first
                single in the United States.
            </p>
            <br />
            <p>
                Also I like Save your tears The Weeknd wrote and produced the
                song with Max Martin and Oscar Holter, with Belly and DaHeala
                receiving additional writing credits. The record was met with
                universal acclaim, with praise for The Weeknd's vocals. The song
                was also used for the theme song for WWE WrestleMania 37 for
                their tagline: Back In Business.
            </p>
            <br />
            <MusicPlayer
                src={dnb}
                title="Call out my name"
                subtitle="Youssef Ehab- 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Like I said, I decided to come back to this track because I
                absolutely loved so much about it. When I picked up work on it
                again I decided to totally remix the drums and I'm super proud
                with how they turned out. So proud in fact, I wanted to show
                them off some more on their own! Below are the drums in the
                above track, but isolated. I have also included the sub bass
                because it is drum and bass after all!
            </p>
            <br />
            <MusicPlayer
                src={dnbDrums}
                title="Save your tears"
                subtitle="Youssef Ehab- 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            {/* <div className="captioned-image">
                <img src={dnbDrumsProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Drums and sub for the track Break. See
                        if you can follow along in the image as the audio above
                        plays!
                    </sub>
                </p>
            </div> */}
            <br />
            {/* <p>
                There are a lot of layers to DnB drums, and I honestly find them
                the hardest to mix and get right since the sound design of DnB
                so often wants to fight in the same frequency range as the
                drums. Because of this I use very aggressive sidechain to keep
                the drums clear while giving me the freedom to not have to
                overly eq the bass and general sound design. I also find that
                parallel compression on drums in DnB can be an absolute life
                saver to keep the drums controlled but still hard hitting.
            </p> */}
            <br />
            {/* <h2>Save your tears</h2>
            <br />
            <p>
                I love to make music and will continue to make music as long as
                I can. I think soon enough I will be releasing music publicly
                since I feel like my personal style has slowly developed into
                something I am proud of over these last few years. I also want
                to one day make an album, but that is a long ways away.
            </p>
            <br />
            <p>
                I am aware this section of my portfolio is rather short, but
                it's because I am very selective with what I want to show off to
                the world. I've been producing for over 6 years and have made
                hundreds maybe even a thousand tracks/loops in that time. I only
                recently have been feeling very content with the stuff I've made
                and I'm very excited to see what I can do for the future. Thanks
                for listening I hope you enjoyed!
            </p>
            <br /> */}
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
