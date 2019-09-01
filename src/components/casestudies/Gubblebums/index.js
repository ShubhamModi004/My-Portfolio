import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


import '../casestudies.css'
import Fade from 'react-reveal/Fade';

// importing images
import SohailWork from '../../common/casestudy/Sohail/SohailWork';
import EducrateWork from '../../common/casestudy/Educrate/EducrateWork';
import NbaHeader from '../../common/casestudy/Nba/NbaHeader';


import GBHeader from '../../common/casestudy/Gubblebums/GBHeader';
import GBLogo from '../../common/casestudy/Gubblebums/GBLogo';
import GBHome from '../../common/casestudy/Gubblebums/GBHome';
import GBServices from '../../common/casestudy/Gubblebums/GBServices';
import GBWork from '../../common/casestudy/Gubblebums/GBWork';


// importing tech stack
import Bootstrap from '../../common/Bootstrap';
import Html5 from '../../common/Html5';
import Css3 from '../../common/Css3';
import JQuery from '../../common/JQuery';
import Laravel from '../../common/Laravel';
import Octobercms from '../../common/Octobercms';


const index = props => {
    return (
        <div>
            <div
                className="container boxcontainer"
                style={{ marginBottom: '7rem' }}>
                <div className="casestudy-Landing">
                    <div className="header-image" >
                        <GBHeader />
                    </div>
                    <Fade>
                        <div className="description">
                            <div class="details">
                                <h1>Gubblebums The Design Studio</h1>
                                <p>Marketing and branding agency based in Panjim Goa.</p>
                            </div>
                            <div className="details-right">
                                <h1>Client: <span>Gubblebums</span></h1>
                                <p>Role: <span>Frontend and Backend development(Website)</span></p>
                            </div>
                        </div>
                    </Fade>
                    <Fade>
                        <a href="http://gubblebums.com/">
                            <div className="casestudy-visit">
                                <a href="http://gubblebums.com/"><h3>Visit the Website</h3></a>
                                <div className="case-study-logo" style={{ marginTop: '1.8rem', width: '7.5rem' }}>
                                    <a href="http://gubblebums.com/"><GBLogo /></a>
                                </div>
                            </div>
                        </a>
                    </Fade>
                </div>
            </div>
            <div className="casestudy-problem">
                <div className="container boxcontainer">
                    <Fade><h1>What was required</h1></Fade>
                    <Fade><p>
                        Design and development of a website for a marketing and branding agency based on the color schemes provided
                        by the Gubblebums studio. Webpages highlighting their work , blog posts and call to actions.
                    </p></Fade>
                    <Fade><h1>Problem Statement - Target Audience - My Solution</h1></Fade>
                    <Fade><p>
                        Expected ui design was hard to develop and animations asked were difficult to achieve, the site was done with lots of iterations in design and functionalities.
                        <br /><br />
                        Target Audience were clients looking for marketing agencies to brand, promote, market their products and design a business plan.
                        <br /><br />
                        I used HTML5, CSS3, Javascript , Jquery for development of the frontend of the website and Laravel on OctoberCMS platfrom for the backend of the website.
                        For styling I used Bootstrap framework. Animations were achieved using Javascript.
                        For easy management of content OctoberCMS platform was used where user can write blog posts and edit work sections.
                    </p></Fade>
                    <Fade><h1>What was used to do this</h1></Fade>
                    <div className="row py-5" >
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack" style={{ width: '5rem' }}>
                                    <Bootstrap />
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
                                    <Laravel />
                                </div>
                            </Fade>
                        </div>

                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack" style={{ width: '8rem' }}>
                                    <Octobercms />
                                </div>
                            </Fade>
                        </div>
                        <div className="col">
                            <Fade delay={100}>
                                <div className="cardStack" style={{ width: '8rem' }}>
                                    <JQuery />
                                </div>
                            </Fade>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container boxcontainer" style={{ marginBottom: '7rem' }}>
                <div className="p-4 case-ScreenShots">
                    <div className="screenshot-container">
                        <GBHome />
                    </div>
                    <div className="casetudy-homepage" style={{ justifyContent: "space-between" }}>
                        <div>
                            <Fade cascade>
                                <h4>Gubblebums | Home Page</h4>
                                <p>Page giving a brief description about Gubblebums , their services, their work and ways to contact them.</p>
                            </Fade>
                        </div>

                    </div>
                </div>

                <div className="p-4">
                    <div className="row">
                        <div className="col-md-6 case-study-image" >
                            <Fade><GBServices /></Fade>
                        </div>
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Gubblebums | Services Page</h4>
                                    <p>Page giving a detailed description about services,<br />, provided by Gubblebums</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <div className="row reverse">
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Gubblebums | Work Page</h4>
                                    <p>Page displaying their work and categories of the work.</p>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6 case-study-image" >
                            <Fade><GBWork /></Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="casestudy-problem">
                <div className="container boxcontainer">
                    <h1>Conclusion</h1>
                    <p>Website was successfully developed meeting all the requirements.</p>
                    <a href="http://gubblebums.com/">
                        <div className="casestudy-visit" style={{ background: 'rgba(255,255,255, 0.14)' }}>
                            <a href="http://gubblebums.com/"><h3 style={{ color: '#fff' }}>Visit the Website</h3></a>
                            <div className="case-study-logo" style={{ width: '7.5rem', marginTop: '1.8rem' }}>
                                <a href="http://gubblebums.com/"><GBLogo /></a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="container boxcontainer" style={{ marginBottom: '7rem' }}>
                <div className="home-work">
                    <h1 className="text-center">Other projects done by me</h1>
                    <div className="home-work-section">
                        <div className="row" style={{ paddingTop: '3rem' }}>
                            <div className="col-md-6">
                                <div className="work_image">
                                    <Link to={'/casestudy/Sohail'}><SohailWork /></Link>
                                </div>
                                <div className="py-3">
                                    <Fade cascade bottom>
                                        <div>
                                            <h1 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Sohail Mohammad | Personal Portfolio</h1>
                                            <p style={{ marginBottom: '0rem', fontWeight: '100' }}>UI/UX designer from Bangalore. Specialized in User Interface & User Experience Design</p>
                                        </div>
                                        <div className="read_case">
                                            <Link to={'/casestudy/Sohail'}>
                                                <div class="concept concept-five">
                                                    <h1 class="word"><span class="char">R</span><span class="char">E</span><span class="char">A</span><span class="char">D</span><span class="char" style={{ paddingLeft: '5px' }}></span><span class="char">C</span><span class="char">A</span><span class="char">S</span><span class="char">E</span></h1>
                                                </div>
                                            </Link>
                                            <div className="read_line" />
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <div className="col-md-6" >
                                <div className="work_image">
                                    <Link to={'/casestudy/Nba'}><NbaHeader /></Link>
                                </div>
                                <div className="py-3">
                                    <Fade cascade bottom>
                                        <div>
                                            <h1 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Nba App | Demo App</h1>
                                            <p style={{ marginBottom: '0rem', fontWeight: '100' }}>Personal demo mobile app showing Nba players, matches, highlights, latest news and videos.</p>
                                        </div>
                                        <div className="read_case">
                                            <Link to={'/casestudy/Nba'}>
                                                <div class="concept concept-five">
                                                    <h1 class="word"><span class="char">R</span><span class="char">E</span><span class="char">A</span><span class="char">D</span><span class="char" style={{ paddingLeft: '5px' }}></span><span class="char">C</span><span class="char">A</span><span class="char">S</span><span class="char">E</span></h1>
                                                </div>
                                            </Link>
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

