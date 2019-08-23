import React from 'react';


import Case from '../../common/Case'
import Fade from 'react-reveal/Fade';



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
                    <div className="row" style={{
                        paddingTop: '3rem'
                    }}>
                        <div className="col-md-6" style={{ padding: 0 }}>
                            <div className="work_image">
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="home_work_info first">
                                <Fade cascade bottom>
                                    <div>
                                        <h1>Project Info</h1>
                                        <p>Some random description giving details about the project</p>
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
                    <div className="row col-reverse" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                        <div className="col-md-6">
                            <div className="home_work_info second">
                                <Fade cascade bottom>
                                    <div>
                                        <h1>Project Info</h1>
                                        <p>Some random description giving details about the project</p>
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
                        <div className="col-md-6" style={{ padding: 0 }}>
                            <div className="work_image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default index;
