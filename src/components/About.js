/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Proimg from '../images/yuvi.jpg';
import { faCheck, faBaseballBall, faCampground, faHeadphones, faHorseHead } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/App.css';
class About extends Component {
    render() {
        return (
            <div>
                <div className="section about" id="section-about">

                    {/* <!-- title --> */}
                    <div className="title">
                        <div className="title_inner">About</div>
                    </div>

                    <div className="content content-box">

                        {/* <!-- image --> */}
                        <div className="image">
                            <img src={Proimg} alt="Yuvraj Upadhyay" />
                        </div>

                        {/* <!-- desc --> */}
                        <div className="desc">
                            <p>Hello! I’m Yuvraj Upadhyay. I have rich experience in web site building, also I am good at backend app. I would love talk with you and we can share our unique ideas with each other.</p>
                            <div className="info-list">
                                <ul>
                                    <li><strong>Age:</strong> 25</li>
                                    <li><strong>Residence:</strong> INDIA</li>
                                    <li><strong>Address:</strong> Ahmedabad</li>
                                    <li><strong>Phone:</strong> <a href="tel:+917600104483">+91 7600104483</a></li>
                                    <li><strong>E-mail:</strong> <a href="mailto:upadhyayyuvi@gmail.com">updhyayyuvi@gmail.com</a></li>
                                </ul>
                            </div>

                            <div className="bts">
                                <a className="btn hover-animated">
                                    <span className="lnk">Download CV</span>
                                </a>
                            </div>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>

                <div className="section resume" id="section-history">
                    <div className="content">
                        <div className="cols">

                            <div className="col col-md">

                                {/* <!-- title --> */}
                                <div className="title">
                                    <div className="title_inner">Education</div>
                                </div>

                                {/* <!-- resume items --> */}
                                <div className="resume-items">

                                    <div className="resume-item content-box">
                                        <div className="date">2016 - 2019</div>
                                        <div className="name">Nirma University - Ahmedabad</div>
                                        <div className="text">Master of Computer Application.</div>
                                    </div>

                                    <div className="resume-item content-box">
                                        <div className="date">2013 - 2016</div>
                                        <div className="name">CPICA - Ahmedabad</div>
                                        <div className="text">Bachelors of Computer Application.</div>
                                    </div>

                                    <div className="resume-item content-box">
                                        <div className="date">2000 - 2012</div>
                                        <div className="name">SVM - Ahmedabad</div>
                                        <div className="text">Schooling.</div>
                                    </div>

                                </div>
                            </div>

                            <div className="col col-md">

                                {/* <!-- title --> */}
                                <div className="title">
                                    <div className="title_inner">Experience</div>
                                </div>

                                {/* <!-- resume items --> */}
                                <div className="resume-items">

                                    <div className="resume-item content-box active">
                                        <div className="date">2021 - Present</div>
                                        <div className="name">MERN Stack Developer - Yudiz.</div>
                                        <div className="text"></div>
                                    </div>

                                    <div className="resume-item content-box active">
                                        <div className="date">2019 - 2021</div>
                                        <div className="name">Blockchain Developer - Yudiz.</div>
                                        <div className="text">Collaborate with creative and development teams on the execution of ideas.</div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- Section Design Skills --> */}
                <div className="section skills" id="section-skills">
                    <div className="content">

                        {/* <!-- title --> */}
                        <div className="title">
                            <div className="title_inner">Design Skills</div>
                        </div>

                        {/* <!-- skills items --> */}
                        <div className="skills percent content-box">
                            <ul>
                                <li>
                                    <div className="name">Web Design</div>
                                    <div className="progress ">
                                        <div className="percentage" style={{ width: '75%' }}>
                                            <span className="percent">75%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="name">Photoshop</div>
                                    <div className="progress ">
                                        <div className="percentage" style={{ width: '70%' }}>
                                            <span className="percent">70%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* <!-- Section Coding Skills --> */}
                <div className="section skills" id="section-skills-code">
                    <div className="content">

                        {/* <!-- title --> */}
                        <div className="title">
                            <div className="title_inner">Coding Skills</div>
                        </div>

                        {/* <!-- skills items --> */}
                        <div className="skills circles content-box">
                            <ul>
                                <li>
                                    <div className="name">NodeJS</div>
                                    <div className="progress p80 ">
                                        <div className="slice"><div className="bar"></div><div className="fill"></div></div>
                                        <div className="percentage">
                                            <span className="percent">80%</span>
                                        </div>
                                        <span>80%</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="name">ReactJS</div>
                                    <div className="progress p75">
                                        <div className="slice"><div className="bar"></div><div className="fill"></div></div>
                                        <div className="percentage">
                                            <span className="percent">75%</span>
                                        </div>
                                        <span>75%</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="name">JavaScript</div>
                                    <div className="progress p85">
                                        <div className="slice"><div className="bar"></div><div className="fill"></div></div>
                                        <div className="percentage">
                                            <span className="percent">85%</span>
                                        </div>
                                        <span>85%</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="name">HTML / CSS</div>
                                    <div className="progress p90">
                                        <div className="slice"><div className="bar"></div><div className="fill"></div></div>
                                        <div className="percentage">
                                            <span className="percent">90%</span>
                                        </div>
                                        <span>90%</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* <!-- Section Knowladge Skills --> */}
                <div className="section skills" id="section-skills-know">
                    <div className="content">

                        {/* <!-- title --> */}
                        <div className="title">
                            <div className="title_inner">Knowledge</div>
                        </div>

                        {/* <!-- skills --> */}
                        <div className="skills list content-box">
                            <ul>
                                <li>
                                    <div className="name"><FontAwesomeIcon icon={faCheck} style={{ color: '#72ff4b' }} />&nbsp;&nbsp;MongoDB</div>
                                </li>
                                <li>
                                    <div className="name"><FontAwesomeIcon icon={faCheck} style={{ color: '#72ff4b' }} />&nbsp;&nbsp;Web Development</div>
                                </li>
                                <li>
                                    <div className="name"><FontAwesomeIcon icon={faCheck} style={{ color: '#72ff4b' }} />&nbsp;&nbsp;Website hosting</div>
                                </li>
                                <li>
                                    <div className="name"><FontAwesomeIcon icon={faCheck} style={{ color: '#72ff4b' }} />&nbsp;&nbsp;Blockchain</div>
                                </li>
                                <li>
                                    <div className="name"><FontAwesomeIcon icon={faCheck} style={{ color: '#72ff4b' }} />&nbsp;&nbsp;Ethereum</div>
                                </li>
                                <li>
                                    <div className="name"><FontAwesomeIcon icon={faCheck} style={{ color: '#72ff4b' }} />&nbsp;&nbsp;Solidity</div>
                                </li>
                                <li>
                                    <div className="name"><FontAwesomeIcon icon={faCheck} style={{ color: '#72ff4b' }} />&nbsp;&nbsp;Smart Contract</div>
                                </li>
                                <li>
                                    <div className="name"><FontAwesomeIcon icon={faCheck} style={{ color: '#72ff4b' }} />&nbsp;&nbsp;Cryptography</div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* <!-- Section Languages Skills --> */}
                <div className="section skills" id="section-skills-lang">
                    <div className="content">

                        {/* <!-- title --> */}
                        <div className="title">
                            <div className="title_inner">Languages Skills</div>
                        </div>

                        {/* <!-- skills items --> */}
                        <div className="skills percent content-box">
                            <ul>
                                <li>
                                    <div className="name">Gujarati</div>
                                    <div className="progress ">
                                        <div className="percentage" style={{ width: '95%' }}>
                                            <span className="percent">95%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="name">Hindi</div>
                                    <div className="progress ">
                                        <div className="percentage" style={{ width: '90%' }}>
                                            <span className="percent">90%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="name">English</div>
                                    <div className="progress ">
                                        <div className="percentage" style={{ width: '85%' }}>
                                            <span className="percent">85%</span>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                {/* <!-- Section Interests --> */}
                <div className="section service" id="section-interests">
                    <div className="content">

                        {/* <!-- title --> */}
                        <div className="title">
                            <div className="title_inner">Interests</div>
                        </div>

                        {/* <!-- interests items --> */}
                        <div className="service-items">

                            <div className="service-col">
                                <div className="service-item content-box">
                                    <div className="icon"><FontAwesomeIcon icon={faBaseballBall} /></div>
                                    <div className="name">Cricket</div>
                                    <div className="text">Cricket matches are not about losing and winning, it is about enjoying.</div>
                                </div>
                            </div>

                            <div className="service-col">
                                <div className="service-item content-box">
                                    <div className="icon"><FontAwesomeIcon icon={faCampground} /></div>
                                    <div className="name">Camping</div>
                                    <div className="text">Life Is Best When You’re Camping.</div>
                                </div>
                            </div>

                            <div className="service-col">
                                <div className="service-item content-box">
                                    <div className="icon"><FontAwesomeIcon icon={faHorseHead} /></div>
                                    <div className="name">Horse Riding</div>
                                    <div className="text">A horse doesn’t care how much you know until he knows how much you care. Put your hand on your horse and your heart in your hand.</div>
                                </div>
                            </div>

                            <div className="service-col">
                                <div className="service-item content-box">
                                    <div className="icon"><FontAwesomeIcon icon={faHeadphones} /></div>
                                    <div className="name">Music</div>
                                    <div className="text">Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.</div>
                                </div>
                            </div>

                        </div>

                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;