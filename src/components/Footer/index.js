import React from 'react'

// import css
import './Footer.css';

// import images
import Case from '../common/Case';
import Contact from '../common/Contact';
import Resume from '../common/Resume';

const index = props => {
    return (
        <div className="boxcontainer" style={{
            backgroundColor: '#F7F6F9',
            paddingTop: '3rem',
            paddingBottom: '3rem',
            borderTopLeftRadius: '4rem',
            borderTopRightRadius: '4rem',
        }}>
            <h1 className="footer-header">Get to know me better</h1>
            <div className="footer-buttons">
                <div className="button-area">
                    <div className="button-fill-yellow">
                        <div className="case">
                            <Resume />
                        </div>
                        <h2>Download my Resume</h2>
                    </div>
                </div>

                <div className="button-area">
                    <div className="button-fill-blue">
                        <div className="case" style={{ width: '1.5rem' }}>
                            <Contact />
                        </div>
                        <h2>Get in touch</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default index
