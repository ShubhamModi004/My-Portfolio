import React from 'react';

import Androidstudio from '../../../common/Androidstudio';
import XCode from '../../../common/XCode';
import Wordpress from '../../../common/Wordpress';
import Octobercms from '../../../common/Octobercms';


const index = props => {
    return (
        <div className="row">
            <div className="col">
                <div className="cardStack">
                    <Androidstudio />
                </div>
            </div>
            <div className="col">
                <div className="cardStack">
                    <XCode />
                </div>
            </div>
            <div className="col">
                <div className="cardStack">
                    <Wordpress />
                </div>
            </div>
            <div className="col">
                <div className="cardStack" style={{ width: '7rem' }}>
                    <Octobercms />
                </div>
            </div>
        </div>
    )
}


export default index
