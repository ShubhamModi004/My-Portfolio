import React from 'react'
import PropTypes from 'prop-types'

import Case from './common/Case';
import Contact from './common/Contact';
import Resume from './common/Resume';

import { Link } from 'gatsby';

import './Popover.css';

const Popover = props => {
    return (
        <div className="dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <span class="popover above">
                <div className="Link-popover">
                    <Link to={'/CaseStudy'} className="d-flex">
                        <div style={{ width: '1.3rem' }}>
                            <Case />
                        </div>
                        <p className="Link">Case Studies</p>
                    </Link>
                    <Link className="d-flex">
                        <div style={{ width: '1.6rem' }}>
                            <Resume />
                        </div>
                        <p className="Link">Download Resume</p>
                    </Link>
                    <Link to={'/Contact'} className="d-flex">
                        <div style={{ width: '1.2rem', marginTop: '3px' }}>
                            <Contact />
                        </div>
                        <p className="Link">Contact me</p>
                    </Link>
                </div>

            </span>
        </div>
    )
}

Popover.propTypes = {

}

export default Popover
