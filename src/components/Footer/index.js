import React from 'react'
import { Link } from "gatsby"
// import css
import './Footer.css';

// import images
import Case from '../common/Case';
import Contact from '../common/Contact';
import Resume from '../common/Resume';
import ContactKeeper from '../common/ContactKeeper';
import GithubFinder from '../common/GithubFinder';
import Socio from '../common/Socio';
import Fade from 'react-reveal/Fade';


const index = props => {
    return (
        <div>
            <div style={{ position: 'relative', backgroundColor: '#200e44' }}>
                <div
                    className="container boxcontainer"
                    style={{
                        position: 'relative'
                    }}
                >
                    <div className="mini-projects">
                        <Fade delay={900}><h2>My Practice Projects</h2></Fade>
                        <div className="row">
                            <div className="col">
                                <Fade delay={1000}>
                                    <div className="projectContainer">
                                        <div className="d-flex" style={{ justifyContent: 'center' }}>
                                            <div style={{ width: '2.5rem' }}>
                                                <Fade><GithubFinder /></Fade>
                                            </div>
                                            <Fade><h1 style={{ padding: '0.25rem 0.6rem' }}>Github-Finder</h1></Fade>
                                        </div>
                                        <Fade>
                                            <div className="text-center">
                                                <p>A MERN stack app to search the github profiles and view profile's info, username, list of recent projects, followers, following, forks, repos etc.
                                            </p>
                                            </div>
                                            <div className="read_case" style={{ margin: 'auto' }}>
                                                <a href="https://git-finderapp.netlify.com" target="_blank">
                                                    <div class="concept concept-five">
                                                        <h1 class="word"><span class="char">V</span><span class="char">i</span><span class="char">s</span><span class="char">i</span><span class="char">t</span></h1>
                                                    </div>
                                                </a>
                                                <div className="read_line" />
                                            </div>
                                        </Fade>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col">
                                <Fade delay={1000}>
                                    <div className="projectContainer">
                                        <div className="d-flex" style={{ justifyContent: 'center' }}>
                                            <div style={{ width: '2.5rem' }}>
                                                <Fade><ContactKeeper /></Fade>
                                            </div>
                                            <Fade><h1 style={{ padding: '0.25rem 0.6rem' }}>Contact-Keeper</h1></Fade>
                                        </div>
                                        <Fade>
                                            <div className="text-center">
                                                <p>Web app made with Reactjs for frontend and Nodejs backend that uses jwt tokens for secure login and lets you create a list of all your contacts online.
                                            </p>
                                            </div>
                                            <div className="read_case" style={{ margin: 'auto' }}>
                                                <a href="https://contact-kept.herokuapp.com/" target="_blank">
                                                    <div class="concept concept-five">
                                                        <h1 class="word"><span class="char">V</span><span class="char">i</span><span class="char">s</span><span class="char">i</span><span class="char">t</span></h1>
                                                    </div>
                                                </a>
                                                <div className="read_line" />
                                            </div>
                                        </Fade>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col">
                                <Fade delay={1000}>
                                    <div className="projectContainer">
                                        <div className="d-flex" style={{ justifyContent: 'center' }}>
                                            <div style={{ width: '2.5rem' }}>
                                                <Fade><Socio /></Fade>
                                            </div>
                                            <Fade><h1 style={{ padding: '0.25rem 0.6rem' }}>Socio-Media</h1></Fade>
                                        </div>
                                        <Fade>
                                            <div className="text-center">
                                                <p>A mini Social Media Web App made using Reactjs for frontend and Nodejs backend. Covering all the basic functionalities of any social media platform.
                                            </p>
                                            </div>
                                            <div className="read_case" style={{ margin: 'auto' }}>
                                                <a href="http://139.59.89.12/" target="_blank">
                                                    <div class="concept concept-five">
                                                        <h1 class="word"><span class="char">V</span><span class="char">i</span><span class="char">s</span><span class="char">i</span><span class="char">t</span></h1>
                                                    </div>
                                                </a>
                                                <div className="read_line" />
                                            </div>
                                        </Fade>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ backgroundColor: '#200e44' }}>
                <div className="boxcontainer" style={{
                    backgroundColor: '#F7F6F9',
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                    borderTopLeftRadius: '4rem',
                    borderTopRightRadius: '4rem',
                }}>
                    <h1 className="footer-header">Get to know me better</h1>
                    <div className="footer-buttons">
                        <Fade cascade>
                            <a href="https://drive.google.com/open?id=1NrZi1OV4e_DTz3ql8Z8Fnyoi5A13HfW9" target="_blank">
                                <div className="button-area">
                                    <div className="button-fill-yellow">
                                        <div className="case">
                                            <Resume />
                                        </div>
                                        <h2>Download my Resume</h2>
                                    </div>
                                </div>
                            </a>
                        </Fade>
                        <Fade cascade>
                            <Link to={'/Contact'}>
                                <div className="button-area">
                                    <div className="button-fill-blue">
                                        <div className="case" style={{ width: '1.5rem' }}>
                                            <Contact />
                                        </div>
                                        <h2>Get in touch</h2>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                    </div>

                </div>
            </div>
            <div className="footer-end">
                <h7>Designed by <a href="https://sohailminimalist.com">Sohail Mohammad</a></h7>
            </div>
        </div>
    )
}


export default index
