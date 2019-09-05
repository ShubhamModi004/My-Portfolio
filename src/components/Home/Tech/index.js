import React, { useState } from 'react'
import './Tech.css';

import Computer from '../../common/Computer';
import Website from '../../common/Website';
import Webapps from '../../common/Webapps';
import Ios from '../../common/Ios';
import Android from '../../common/Android';

import Fade from 'react-reveal/Fade';

// importing stack
import Framework from './Framework';
import Frontend from './Frontend';
import Backend from './Backend';
import Platform from './Platform';
import DBMS from './DBMS';

const index = props => {
    const [framework, setFramework] = useState(false);
    const [frontend, setFrontend] = useState(true);
    const [backend, setBackend] = useState(false);
    const [platform, setPlatform] = useState(false);
    const [dbms, setDbms] = useState(false);


    const selectStack = (item) => {
        if (item === 'framework') {
            setFramework(true);
            setFrontend(false);
            setBackend(false);
            setPlatform(false);
        } else if (item === 'frontend') {
            setFramework(false);
            setFrontend(true);
            setBackend(false);
            setPlatform(false);
            setDbms(false);
        } else if (item === 'backend') {
            setFramework(false);
            setFrontend(false);
            setBackend(true);
            setPlatform(false);
            setDbms(false);
        } else if (item === 'platform') {
            setFramework(false);
            setFrontend(false);
            setBackend(false);
            setPlatform(true);
            setDbms(false);
        }
        else if (item === 'dbms') {
            setFramework(false);
            setFrontend(false);
            setBackend(false);
            setPlatform(false);
            setDbms(true);
        }

    }



    const renderStack = () => {
        if (framework) {
            return (
                <div><Framework /></div>
            )
        } else if (frontend) {
            return (
                <div><Frontend /></div>
            )
        } else if (backend) {
            return (
                <div><Backend /></div>
            )
        } else if (platform) {
            return (
                <div><Platform /></div>
            )
        } else if (dbms) {
            return (
                <div><DBMS /></div>
            )
        }
    }



    return (
        <div style={{ position: 'relative', backgroundColor: '#200e44' }}>
            <div
                className="container boxcontainer"
                style={{
                    position: 'relative'
                }}
            >
                <div className="container box">
                    <Fade bottom delay={800}>
                        <p>
                            I have an OCD for tidy lines of codes,<br />
                            obsession towards making interfaces look and function well,<br />
                            and a willingness to always deliver more than asked.
                        </p>
                    </Fade>
                    <div className="mobile" style={styles.Computer}>
                        <Computer />
                    </div>
                </div>
                <div className="tech-inner">
                    <Fade delay={900}><h2>What I Love to make</h2></Fade>
                    <div className="Make">
                        <Fade delay={1000}>
                            <div className="makeIcons">
                                <div style={{ width: '7rem' }}>
                                    <Website />
                                </div>
                                <h1>Website</h1>
                            </div>
                        </Fade>
                        <Fade delay={1000}>
                            <div className="makeIcons">
                                <div style={{ width: '6rem' }}>
                                    <Webapps />
                                </div>
                                <h1>Web Apps</h1>
                            </div>
                        </Fade>
                        <Fade delay={1000}>
                            <div className="makeIcons">
                                <div style={{ width: '6rem' }}>
                                    <Ios />
                                </div>
                                <h1>Ios Apps</h1>
                            </div>
                        </Fade>
                        <Fade delay={1000}>
                            <div className="adjust" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <div style={{ width: '5.7rem' }}>
                                    <Android />
                                </div>
                                <h1>Android Apps</h1>
                            </div>
                        </Fade>
                    </div>
                </div>
                <Fade delay={1000}>
                    <div className="tech-stack">
                        <h2>My Stack of Tech</h2>
                        <div className="stack">
                            <h1 onClick={() => selectStack('frontend')} className={frontend && 'active'}>Front-End</h1>
                            <h1 onClick={() => selectStack('backend')} className={backend && 'active'}>Back-End</h1>
                            <h1 onClick={() => selectStack('framework')} className={framework && 'active'}>Framework</h1>
                            <h1 onClick={() => selectStack('platform')} className={platform && 'active'}>Platform</h1>
                            <h1 onClick={() => selectStack('dbms')} className={dbms && 'active'}>DBMS</h1>
                        </div>
                        {renderStack()}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

const styles = ({

    Computer: {
        width: '10rem',
        position: 'absolute',
        right: '-2rem',
        top: '2.5rem'
    }
})


export default index
