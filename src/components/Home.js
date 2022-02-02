/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Typing from 'react-typing-animation';
import bgimg from '../images/bgyuvi.jpg';

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
                                    Hello, I’m <strong>Yuvraj Upadhyay</strong> MERN Stack Developer At Yudiz Solutions.
                                </h1>
                                <div className="h-subtitle typing-subtitle">
                                    <Typing loop={true} hideCursor={true}>
                                        <h1 style={{ color: '#fff' }} >I code cool <strong>websites.</strong></h1>
                                        <Typing.Delay ms={4000} />
                                        <Typing.Backspace count={30} />
                                        <h1 style={{ color: '#fff' }}>I develop <strong>Backend apps.</strong></h1>
                                        <Typing.Delay ms={4000} />
                                        <Typing.Backspace count={30} />
                                        <h1 style={{ color: '#fff' }}>I love <strong>NodeJS.</strong></h1>
                                        <Typing.Delay ms={4000} />
                                        <Typing.Backspace count={15} />
                                    </Typing>
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