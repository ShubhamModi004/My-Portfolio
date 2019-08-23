import React from 'react';

import Mongodb from '../../../common/Mongodb';
import MySql from '../../../common/MySql';




import Fade from 'react-reveal/Fade';
const index = props => {
    return (
        <div className="row">
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack" style={{ width: '9rem', padding: 0 }}>
                        <Mongodb />
                    </div>
                </Fade>
            </div>
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack" style={{ width: '7rem', padding: 0 }}>
                        <MySql />
                    </div>
                </Fade>
            </div>

        </div>
    )
}


export default index
