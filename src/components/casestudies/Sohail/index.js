import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


import '../casestudies.css'
import Fade from 'react-reveal/Fade';

// importing images

import SohailHeader from '../../common/casestudy/Sohail/SohailHeader';
import SohailLogo from '../../common/casestudy/Sohail/SohailLogo';
import SohailHome from '../../common/casestudy/Sohail/SohailHome';
import SohailAbout from '../../common/casestudy/Sohail/SohailAbout';
import SohailProcess from '../../common/casestudy/Sohail/SohailProcess';

// importing tech stack
import Bootstrap from '../../common/Bootstrap';
import Html5 from '../../common/Html5';
import Css3 from '../../common/Css3';
import Reactjs from '../../common/Reactjs';
import Gatsby from '../../common/Gatsby';
import Contentful from '../../common/Contentful';

const index = props => {
    return (
        <div>
            <div
                className="container boxcontainer"
                style={{ marginBottom: '7rem' }}>
                <div className="casestudy-Landing">
                    <div className="header-image" >
                        <Fade><SohailHeader /></Fade>
                    </div>
                    <Fade>
                        <div className="description">
                            <div className="">
                                <h1>Sohail Minimalist</h1>
                                <p>UI/UX designer from Bangalore.Specialized in User Interface & User Experience Design</p>
                            </div>
                            <div className="text-right">
                                <h1>Client: <span>Sohail Mohammad</span></h1>
                                <p>Role: <span> Frontend and Backend development(Website)</span></p>
                            </div>
                        </div>
                    </Fade>
                    <Fade>
                        <div className="casestudy-visit">
                            <a href="https://sohailminimalist.com"><h3>Visit the Website</h3></a>
                            <div className="case-study-logo">
                                <a href="https://sohailminimalist.com"><SohailLogo /></a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="casestudy-problem">
                <div className="container boxcontainer">
                    <Fade><h1>What was required</h1></Fade>
                    <Fade><p>
                        Development of a minimalist designed personal portfolio, to write blogs and share work experiences.
                        design language to be followed precisely based on the ui and ux designed, with minimal load times between pages
                        and animations.
                    </p></Fade>
                    <Fade><h1>Problem Statement - Target Audience - My Solution</h1></Fade>
                    <Fade><p>
                        Deadline was strict as the site had to be done in a weeks time for my client's interview.
                        Site had be developed with perfection in mind managing the design language without outlawing the development rules.<br />
                        Target audience were tech companies and businesses looking for branding and aesthetic design language.<br />
                        I used to Gatsby Js a react library for development of the website, made use of service workers to reduce the load times to achieve smooth transitions and animations.
                        For styling the site I opted for writing css code from scratch and with minimal use of css framework to achieve perfection in design language.
                        For easy management of blogs and work experiences made use of Contentful a content infrastructure.
                    </p></Fade>
                    <Fade><h1>What was used to do this</h1></Fade>
                    <div className="row py-5" >
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack" style={{ width: '5rem', padding: 0 }}>
                                    <Bootstrap />
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack">
                                    <Reactjs />
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack">
                                    <Gatsby />
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack">
                                    <Html5 />
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack">
                                    <Css3 />
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack">
                                    <Contentful />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container boxcontainer" style={{ marginBottom: '7rem' }}>
                <div className="p-5 case-ScreenShots">
                    <div className="screenshot-container">
                        <Fade><SohailHome /></Fade>
                    </div>
                    <div className="d-flex p-5" style={{ justifyContent: "space-between" }}>
                        <div>
                            <Fade cascade>
                                <h4>Sohail Mohammad</h4>
                                <p>Page giving a brief description about Sohail,<br /> blogs and work experiences.</p>
                            </Fade>
                        </div>
                        <Fade><p>Portfolio Home Page</p></Fade>
                    </div>
                </div>

                <div className="p-5 my-5">
                    <div className="row">
                        <div className="col-md-6 case-study-image" >
                            <Fade><SohailAbout /></Fade>
                        </div>
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div>
                                <Fade cascade>
                                    <h4>Sohail Mohammad | About Page</h4>
                                    <p>Page giving a detailed description about Sohail,<br /> his interests and achievements</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 my-5">
                    <div className="row">
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div>
                                <Fade cascade>
                                    <h4>Sohail Mohammad | About Page</h4>
                                    <p>Page giving a detailed description about Sohail,<br /> his interests and achievements</p>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6 case-study-image" >
                            <Fade><SohailProcess /></Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="casestudy-problem">
                <div className="container boxcontainer">
                    <h1>Conclusion</h1>
                    <p>Website was succesfully developed meeting all the requirements.</p>
                    <div className="casestudy-visit" style={{ background: 'rgba(255,255,255, 0.14)' }}>
                        <a href="https://sohailminimalist.com"><h3 style={{ color: '#fff' }}>Visit the Website</h3></a>
                        <div className="case-study-logo">
                            <a href="https://sohailminimalist.com"><SohailLogo /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container boxcontainer" style={{ marginBottom: '7rem' }}>
                <div className="home-work">
                    <h1 className="text-center">Other projects done by me</h1>
                    <div className="home-work-section">
                        <div className="row" style={{
                            paddingTop: '3rem'
                        }}>
                            <div className="col-md-6">
                                <div className="work_image">
                                </div>
                                <div className="py-3">
                                    <Fade cascade bottom>
                                        <div>
                                            <h1 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Project Info</h1>
                                            <p style={{ marginBottom: '0rem', fontWeight: '100' }}>Some random description giving details about the project</p>
                                        </div>
                                        <div className="read_case">
                                            <div class="concept concept-five">
                                                <h1 class="word"><span class="char">R</span><span class="char">E</span><span class="char">A</span><span class="char">D</span><span class="char" style={{ paddingLeft: '5px' }}></span><span class="char">C</span><span class="char">A</span><span class="char">S</span><span class="char">E</span></h1>
                                            </div>
                                            <div className="read_line" />
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <div className="col-md-6" >
                                <div className="work_image">
                                </div>
                                <div className="py-3">
                                    <Fade cascade bottom>
                                        <div>
                                            <h1 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Project Info</h1>
                                            <p style={{ marginBottom: '0rem', fontWeight: '100' }}>Some random description giving details about the project</p>
                                        </div>
                                        <div className="read_case">
                                            <div class="concept concept-five">
                                                <h1 class="word"><span class="char">R</span><span class="char">E</span><span class="char">A</span><span class="char">D</span><span class="char" style={{ paddingLeft: '5px' }}></span><span class="char">C</span><span class="char">A</span><span class="char">S</span><span class="char">E</span></h1>
                                            </div>
                                            <div className="read_line" />
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default index

