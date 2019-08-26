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
                        <div style={{ width: '2rem' }}>
                            <Case />
                        </div>
                        <p className="Link" style={{ fontSize: '1.3rem' }}>Case Studies</p>
                    </Link>
                    <a href="./cv/Cv.pdf" download className="d-flex">
                        <div style={{ width: '2.3rem' }}>
                            <Resume />
                        </div>
                        <p className="Link" style={{ fontSize: '1.3rem' }}>Download Resume</p>
                    </a>
                    <Link to={'/Contact'} className="d-flex">
                        <div style={{ width: '1.9rem', marginTop: '3px' }}>
                            <Contact />
                        </div>
                        <p className="Link" style={{ fontSize: '1.3rem' }}>Contact me</p>
                    </Link>
                </div>

            </span>
        </div>
    )
}

Popover.propTypes = {

}

export default Popover
