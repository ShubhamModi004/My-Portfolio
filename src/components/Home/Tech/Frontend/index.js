import React from 'react';

import Reactjs from '../../../common/Reactjs';
import Redux from '../../../common/Redux';
import Gatsby from '../../../common/Gatsby';
import Html5 from '../../../common/Html5';
import Css3 from '../../../common/Css3';
import Js from '../../../common/Js';
import Swift from '../../../common/Swift';


import Fade from 'react-reveal/Fade';

const index = props => {
    return (
        <div className="row">
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
                        <Redux />
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
                        <Js />
                    </div>
                </Fade>
            </div>
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack">
                        <Swift />
                    </div>
                </Fade>
            </div>
        </div>
    )
}


export default index
