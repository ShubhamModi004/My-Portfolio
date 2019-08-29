import React from 'react'
import { Link } from "gatsby"
// import css
import './Footer.css';

// import images
import Case from '../common/Case';
import Contact from '../common/Contact';
import Resume from '../common/Resume';
import Fade from 'react-reveal/Fade';


const index = props => {
    return (
        <div>
            <div className="boxcontainer" style={{
                backgroundColor: '#F7F6F9',
                paddingTop: '3rem',
                paddingBottom: '3rem',
                borderTopLeftRadius: '4rem',
                borderTopRightRadius: '4rem',
            }}>
                <h1 className="footer-header">Get to know me better</h1>
                <div className="footer-buttons">
                    <Fade cascade>
                        <a href="https://drive.google.com/open?id=1NrZi1OV4e_DTz3ql8Z8Fnyoi5A13HfW9" target="_blank">
                            <div className="button-area">
                                <div className="button-fill-yellow">
                                    <div className="case">
                                        <Resume />
                                    </div>
                                    <h2>Download my Resume</h2>
                                </div>
                            </div>
                        </a>
                    </Fade>
                    <Fade cascade>
                        <Link to={'/Contact'}>
                            <div className="button-area">
                                <div className="button-fill-blue">
                                    <div className="case" style={{ width: '1.5rem' }}>
                                        <Contact />
                                    </div>
                                    <h2>Get in touch</h2>
                                </div>
                            </div>
                        </Link>
                    </Fade>
                </div>

            </div>
            <div className="footer-end">
                <h7>Designed by <a href="https://sohailminimalist.com">Sohail Mohammad</a></h7>
            </div>
        </div>
    )
}


export default index
