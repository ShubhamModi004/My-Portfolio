import React from 'react';
import { Link } from 'gatsby';


import Case from '../../common/Case'
import Fade from 'react-reveal/Fade';

import SohailWork from '../../common/casestudy/Sohail/SohailWork';
import EducrateWork from '../../common/casestudy/Educrate/EducrateWork';

const index = props => {
    return (
        <div
            className="container boxcontainer"
            style={{
                position: 'relative'
            }}
        >
            <div className="py-4 mb-5">
                <div className="home-work-section">
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
                                        <p>UI/UX designer from Bangalore.Specialized in User Interface & User Experience Design</p>
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
                </div>
            </div>
        </div>
    )
}


export default index;
