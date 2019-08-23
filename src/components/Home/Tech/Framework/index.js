import React from 'react';

import Express from '../../../common/Express';
import Sails from '../../../common/Sails';
import Bootstrap from '../../../common/Bootstrap';
import Materialize from '../../../common/Materialize';

import './Framework.css';

const index = props => {
    return (
        <div className="row">
            <div className="col">
                <div className="cardStack" style={{ width: '8rem', padding: 0 }}>
                    <Express />
                </div>
            </div>
            {/* <div className="col">
                <div className="cardStack" style={{ width: '6rem', padding: 0 }}>
                    <Sails />
                </div>
            </div> */}
            <div className="col">
                <div className="cardStack" style={{ width: '6rem', padding: 0 }}>
                    <Bootstrap />
                </div>
            </div>
            <div className="col">
                <div className="cardStack" style={{ width: '7rem', padding: 0 }}>
                    <Materialize />
                </div>
            </div>
        </div>
    )
}


export default index
