import React from 'react';

import Express from '../../../common/Express';
import Sails from '../../../common/Sails';
import Bootstrap from '../../../common/Bootstrap';
import Materialize from '../../../common/Materialize';

import './Framework.css';


import Fade from 'react-reveal/Fade';
const index = props => {
    return (
        <div className="row">

            {/* <div className="col">
                <div className="cardStack" style={{ width: '6rem', padding: 0 }}>
                    <Sails />
                </div>
            </div> */}
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack" style={{ width: '6rem', padding: 0 }}>
                        <Bootstrap />
                    </div>
                </Fade>
            </div>
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack" style={{ width: '8rem', padding: 0 }}>
                        <Materialize />
                    </div>
                </Fade>
            </div>
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack" style={{ width: '8.5rem', padding: 0 }}>
                        <Express />
                    </div>
                </Fade>
            </div>
        </div>
    )
}


export default index
