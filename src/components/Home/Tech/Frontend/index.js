import React from 'react';

import Reactjs from '../../../common/Reactjs';
import Redux from '../../../common/Redux';
import Gatsby from '../../../common/Gatsby';
import Html5 from '../../../common/Html5';
import Css3 from '../../../common/Css3';
import Js from '../../../common/Js';
import Swift from '../../../common/Swift';


const index = props => {
    return (
        <div className="row">
            <div className="col">
                <div className="cardStack">
                    <Reactjs />
                </div>
            </div>
            <div className="col">
                <div className="cardStack">
                    <Redux />
                </div>
            </div>
            <div className="col">
                <div className="cardStack">
                    <Gatsby />
                </div>
            </div>
            <div className="col">
                <div className="cardStack">
                    <Html5 />
                </div>
            </div>
            <div className="col">
                <div className="cardStack">
                    <Css3 />
                </div>
            </div>
            <div className="col">
                <div className="cardStack">
                    <Js />
                </div>
            </div>
            <div className="col">
                <div className="cardStack">
                    <Swift />
                </div>
            </div>
        </div>
    )
}


export default index
