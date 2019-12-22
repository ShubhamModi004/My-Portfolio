import React from 'react';
import './Work.css';
import Case from '../../common/Case';
import { Link } from "gatsby"


import Fade from 'react-reveal/Fade';

// importing case study headers
import SohailWork from '../../common/casestudy/Sohail/SohailWork';
import EducrateWork from '../../common/casestudy/Educrate/EducrateWork';
import NbaHeader from '../../common/casestudy/Nba/NbaHeader';
import GBHeader from '../../common/casestudy/Gubblebums/GBHeader';

const Work = props => {
    return (
        <div
            className="container boxcontainer"
            style={{
                position: 'relative'
            }}
        >
            <div className="home-work">
                <h1 className="text-center">Recent Work that I have done</h1>
                <div className="home-work-section">
                    {/* sohail */}
                    <div className="row" style={{ paddingTop: '3rem' }}>
                        <div className="col-md-6" style={{ padding: 0 }}>
                            <div className="work_image">
                                <Link to={'/casestudy/Sohail'}><SohailWork /></Link>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="home_work_info first">
                                <Fade cascade bottom>
                                    <div>
                                        <h1>Sohail Mohammad | Personal Portfolio</h1>
                                        <p>UI/UX designer from Bangalore. Specialized in User Interface & User Experience Design</p>
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
                    </div>
                    {/* educrate */}
                    <div className="row col-reverse" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                        <div className="col-md-6">
                            <div className="home_work_info second">
                                <Fade cascade bottom>
                                    <div>
                                        <h1>Educrate India | Website development</h1>
                                        <p>Smart classroom projectors.</p>
                                    </div>
                                    <div className="read_case">
                                        <Link to={'/casestudy/Educrate'}>
                                            <div class="concept concept-five">
                                                <h1 class="word"><span class="char">R</span><span class="char">E</span><span class="char">A</span><span class="char">D</span><span class="char" style={{ paddingLeft: '5px' }}></span><span class="char">C</span><span class="char">A</span><span class="char">S</span><span class="char">E</span></h1>
                                            </div>
                                        </Link>
                                        <div className="read_line" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ padding: 0 }}>
                            <div className="work_image">
                                <Link to={'/casestudy/Educrate'}><EducrateWork /></Link>
                            </div>
                        </div>
                    </div>
                    {/* nba */}
                    <div className="row" style={{ paddingTop: '3rem' }}>
                        <div className="col-md-6" style={{ padding: 0 }}>
                            <div className="work_image">
                                <Link to={'/casestudy/Nba'}><NbaHeader /></Link>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="home_work_info first">
                                <Fade cascade bottom>
                                    <div>
                                        <h1>Nba App | Demo App</h1>
                                        <p>Personal demo mobile app showing Nba players, matches, highlights, latest news and videos.</p>
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
                    {/* Gubblebums */}
                    <div className="row col-reverse" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                        <div className="col-md-6">
                            <div className="home_work_info second">
                                <Fade cascade bottom>
                                    <div>
                                        <h1>Gubblebums | Website development</h1>
                                        <p>The Design Agency</p>
                                    </div>
                                    <div className="read_case">
                                        <Link to={'/casestudy/Gubblebums'}>
                                            <div class="concept concept-five">
                                                <h1 class="word"><span class="char">R</span><span class="char">E</span><span class="char">A</span><span class="char">D</span><span class="char" style={{ paddingLeft: '5px' }}></span><span class="char">C</span><span class="char">A</span><span class="char">S</span><span class="char">E</span></h1>
                                            </div>
                                        </Link>
                                        <div className="read_line" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ padding: 0 }}>
                            <div className="work_image">
                                <Link to={'/casestudy/Gubblebums'}><GBHeader /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Fade cascade>
                    <Link to={'/CaseStudy'}>
                        <div className="button-area">
                            <div className="button-fill-pink">
                                <div className="case">
                                    <Case />
                                </div>
                                <h2>View all my Case Studies</h2>
                            </div>
                        </div>
                    </Link>
                </Fade>
            </div>
        </div>
    )
}


export default Work;
