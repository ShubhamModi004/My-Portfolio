import React from 'react';

import Nodejs from '../../../common/Nodejs';
import PHP from '../../../common/PHP';
import Fade from 'react-reveal/Fade';


const index = props => {
    return (
        <div className="row">
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack" style={{ width: '5rem' }}>
                        <Nodejs />
                    </div>
                </Fade>
            </div>
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack" style={{ width: '5rem' }}>
                        <PHP />
                    </div>
                </Fade>
            </div>
        </div>
    )
}


export default index
