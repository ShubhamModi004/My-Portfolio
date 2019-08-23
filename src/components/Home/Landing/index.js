import React from 'react'

import HireMe from '../../common/HireMe';
// For the fade in effect;
import Fade from 'react-reveal/Fade';

import { Link } from "gatsby"

import './Landing.css';

const index = props => {
    return (
        <div
            className="container boxcontainer"
            style={{
                marginBottom: '15rem'
            }}
        >
            <Fade bottom duration={120}><h1 style={styles.header}>Hey, I'm Shubham Modi</h1></Fade>
            <Fade delay={150}>
                <h1 style={styles.subHeader}>
                    A full-stack developer who focuses on developing<br />
                    intuitive and aesthetically pleasing interfaces<br />
                </h1>
            </Fade>
            <Fade delay={180}>
                <div id="container">
                    <Link to={'/Contact'}>
                        <button className="learn-more button">
                            <div className="circle">
                                <div style={{ width: '1.05rem' }} className="icon">
                                    <HireMe />
                                </div>
                            </div>
                            <p className="button-text">HIRE ME</p>
                        </button>
                    </Link>
                </div>
            </Fade>
        </div>
    )
}

const styles = ({
    header: {
        fontSize: '1.3rem',
        fontWeight: '300',
        marginTop: '4rem',
        marginBottom: '4rem',
        color: '#200E44'
    },
    subHeader: {
        fontSize: '2rem',
        fontWeight: '300',
        lineHeight: '2.6rem',
        color: '#200E44',
        marginBottom: '1.5rem'
    }
})


export default index
