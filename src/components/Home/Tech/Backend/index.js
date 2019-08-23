import React from 'react';

import Nodejs from '../../../common/Nodejs';
import PHP from '../../../common/PHP';


const index = props => {
    return (
        <div className="row">
            <div className="col">
                <div className="cardStack" style={{ width: '5rem' }}>
                    <Nodejs />
                </div>
            </div>
            <div className="col">
                <div className="cardStack" style={{ width: '5rem' }}>
                    <PHP />
                </div>
            </div>
        </div>
    )
}


export default index
