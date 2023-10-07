/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import bgimg from '../images/bgyuvi.jpg';
import { TypeAnimation } from 'react-type-animation';

import '../css/App.css';
class Home extends Component {
    render() {
        return (
            <div>
                <div className="section started" id="section-started">

                    {/* <!-- background --> */}
                    <div className="video-bg jarallax" style={{ backgroundImage: `url(${bgimg})` }} atl="Yuvraj Upadhyay">
                        <div className="video-bg-mask"></div>
                        <div className="video-bg-texture" id="grained_container"></div>
                    </div>

                    {/* <!-- started content --> */}
                    <div className="centrize full-width">
                        <div className="vertical-center">
                            <div className="started-content">
                                <h1 className="h-title">
                                    Hello, I’m <strong>Yuvraj Upadhyay</strong> Sr. MERN Stack Developer At Bytes Technolab.
                                </h1>
                                <div className="h-subtitle typing-subtitle">
                                    <TypeAnimation
                                        cursor={false}
                                        // Same String at the start will only be typed once, initially
                                        sequence={[
                                            'I code cool websites.',
                                            4000,
                                            'I develop Backend Apps.',
                                            4000,
                                            'I love NodeJS.',
                                            4000,
                                        ]}
                                        speed={40} // Custom Speed from 1-99 - Default Speed: 40
                                        style={{ color: '#fff' }}
                                        wrapper="h1" // Animation will be rendered as a <span>
                                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                                    />
                                </div>
                                <span className="typed-subtitle"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;