import React from 'react';

import Androidstudio from '../../../common/Androidstudio';
import XCode from '../../../common/XCode';
import Wordpress from '../../../common/Wordpress';
import Octobercms from '../../../common/Octobercms';


import Fade from 'react-reveal/Fade';

const index = props => {
    return (
        <div className="row">
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack">
                        <Androidstudio />
                    </div>
                </Fade>
            </div>
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack">
                        <XCode />
                    </div>
                </Fade>
            </div>
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack">
                        <Wordpress />
                    </div>
                </Fade>
            </div>
            <div className="col">
                <Fade delay={100}>
                    <div className="cardStack" style={{ width: '7rem' }}>
                        <Octobercms />
                    </div>
                </Fade>
            </div>
        </div>
    )
}


export default index
