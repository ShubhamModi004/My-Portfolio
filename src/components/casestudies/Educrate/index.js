import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


import '../casestudies.css'
import Fade from 'react-reveal/Fade';

// importing images
import SohailWork from '../../common/casestudy/Sohail/SohailWork';
import EducrateWork from '../../common/casestudy/Educrate/EducrateWork';


import EducrateHeader from '../../common/casestudy/Educrate/EducrateHeader';
import EducrateLogo from '../../common/casestudy/Educrate/EducrateLogo';
import EducrateHome from '../../common/casestudy/Educrate/EducrateHome';
import EducrateAbout from '../../common/casestudy/Educrate/EducrateAbout';
import EducrateProduct from '../../common/casestudy/Educrate/EducrateProduct';
import EducratePurchase from '../../common/casestudy/Educrate/EducratePurchase';
import EducrateSkill from '../../common/casestudy/Educrate/EducrateSkill';
import EducrateKnowledge from '../../common/casestudy/Educrate/EducrateKnowledge';
import EducrateContact from '../../common/casestudy/Educrate/EducrateContact';

// importing tech stack
import Bootstrap from '../../common/Bootstrap';
import Html5 from '../../common/Html5';
import Css3 from '../../common/Css3';
import Reactjs from '../../common/Reactjs';
import Gatsby from '../../common/Gatsby';


const index = props => {
    return (
        <div>
            <div
                className="container boxcontainer"
                style={{ marginBottom: '7rem' }}>
                <div className="casestudy-Landing">
                    <div className="header-image" >
                        <Fade><EducrateHeader /></Fade>
                    </div>
                    <Fade>
                        <div className="description">
                            <div class="details">
                                <h1>Educrate Smart Classroom Projectors</h1>
                                <p>Educrate is digital/smart classroom concept for students.Bringing in advancements in the field of education and moreover audio visual content should reach them, at minimal cost.</p>
                            </div>
                            <div className="details-right">
                                <h1>Client: <span>Educrate India</span></h1>
                                <p>Role: <span> Frontend and Backend development(Website)</span></p>
                            </div>
                        </div>
                    </Fade>
                    <Fade>
                        <div className="casestudy-visit">
                            <a href="https://educrateindia.com/en/"><h3>Visit the Website</h3></a>
                            <div className="case-study-logo" style={{ width: '6.5rem' }}>
                                <a href="https://educrateindia.com/en/"><EducrateLogo /></a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="casestudy-problem">
                <div className="container boxcontainer">
                    <Fade><h1>What was required</h1></Fade>
                    <Fade><p>
                        Development of a website with huge chunks of content about the product, product description, target audience being English / Hindi medium Schools,
                        ways to reach us, site with functionality to change the preferred language of viewing the content,
                        intergration google docs to get free content and management of the content.
                    </p></Fade>
                    <Fade><h1>Problem Statement - Target Audience - My Solution</h1></Fade>
                    <Fade><p>
                        Management of the content in English and Hindi, Site will be visited in rural areas with low speed internet connections
                        Site had to be developed with perfection in mind managing all the content wihtout throwing all the content at once on the screen<br /><br />
                        Target audience were hindi/english medium schools and students.<br /><br />
                        I used React Js a javascript library for development of the website, made use of service workers to reduce the load times and made a web app version of the site that can be downloaded and viewed with or without internet.
                        For styling I used Bootstrap framework.
                        For Hindi version of the site a tab to switch between hindi and english version of the site was integrated, made use fo react/intl to change the langage reference of the site without reloading the entire content.
                        For easy management of content each page was divided into various sections and tabs to view the sections.
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
                    </div>
                </div>
            </div>
            <div className="container boxcontainer" style={{ marginBottom: '7rem' }}>
                <div className="p-4 case-ScreenShots">
                    <div className="screenshot-container">
                        <Fade><EducrateHome /></Fade>
                    </div>
                    <div className="casetudy-homepage" style={{ justifyContent: "space-between" }}>
                        <div>
                            <Fade cascade>
                                <h4>Educrate India | Home Page</h4>
                                <p>Page giving a brief description about Educrate and how it works.</p>
                            </Fade>
                        </div>

                    </div>
                </div>

                <div className="p-4">
                    <div className="row">
                        <div className="col-md-6 case-study-image" >
                            <Fade><EducrateAbout /></Fade>
                        </div>
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Educrate India | About Page</h4>
                                    <p>Page giving a detailed description about Educrate,<br />, its vision, mission and aim</p>
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
                                    <h4>Educrate India | Product Page</h4>
                                    <p>Page giving a detailed description about Educrate hardware,<br /> how it works, and hardware requirementst to run the projector</p>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6 case-study-image" >
                            <Fade><EducrateProduct /></Fade>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="row">
                        <div className="col-md-6 case-study-image" >
                            <Fade><EducratePurchase /></Fade>
                        </div>
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Educrate India| Purchase Page</h4>
                                    <p>Purchase page describes steps to raise quotation,<br />and order Educrate projector online.</p>
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
                                    <h4>Educrate India | Skills Certificate Page</h4>
                                    <p>Page giving a detailed description about Skills developed,<br />and detailed description about Skills ceritificate model.</p>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6 case-study-image" >
                            <Fade><EducrateSkill /></Fade>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="row">
                        <div className="col-md-6 case-study-image" >
                            <Fade><EducrateKnowledge /></Fade>
                        </div>
                        <div className="col-md-6 d-flex" style={{ alignItems: 'center' }}>
                            <div className="casestudy-ss-description">
                                <Fade cascade>
                                    <h4>Educrate India | Knowledge Bank Page</h4>
                                    <p>Educrate Knowledge bank lets user to resgister to the google docs<br />where user can view all the study material.</p>
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
                                    <h4>Educrate India | Contact Page</h4>
                                    <p>Educrate contact page<br /></p>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6 case-study-image" >
                            <Fade><EducrateContact /></Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="casestudy-problem">
                <div className="container boxcontainer">
                    <h1>Conclusion</h1>
                    <p>Website was successfully developed meeting all the requirements.</p>
                    <div className="casestudy-visit" style={{ background: 'rgba(255,255,255, 0.14)' }}>
                        <a href="https://educrateindia.com/en/"><h3 style={{ color: '#fff' }}>Visit the Website</h3></a>
                        <div className="case-study-logo" style={{ width: '6.5rem' }}>
                            <a href="https://educrateindia.com/en/"><EducrateLogo /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container boxcontainer" style={{ marginBottom: '7rem' }}>
                <div className="home-work">
                    <h1 className="text-center">Other projects done by me</h1>
                    <div className="home-work-section">
                        <div className="row" style={{ paddingTop: '3rem' }}>
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

