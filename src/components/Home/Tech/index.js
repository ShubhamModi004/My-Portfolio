import React, { useState } from 'react'
import './Tech.css';

import Computer from '../../common/Computer';
import Website from '../../common/Website';
import Webapps from '../../common/Webapps';
import Ios from '../../common/Ios';
import Android from '../../common/Android';

const index = props => {
    const [framework, setFramework] = useState(true);
    const [frontend, setFrontend] = useState(false);
    const [backend, setBackend] = useState(false);
    const [platform, setPlatform] = useState(false);



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
        } else if (item === 'backend') {
            setFramework(false);
            setFrontend(false);
            setBackend(true);
            setPlatform(false);
        } else if (item === 'platform') {
            setFramework(false);
            setFrontend(false);
            setBackend(false);
            setPlatform(true);
        }

    }



    const renderStack = () => {
        if (framework) {
            return (
                <div><h1>framework</h1></div>
            )
        } else if (frontend) {
            return (
                <div><h1>frontend</h1></div>
            )
        } else if (backend) {
            return (
                <div><h1>backend</h1></div>
            )
        } else if (platform) {
            return (
                <div><h1>platform</h1></div>
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
                    <p>
                        I have an OCD for tidy lines of codes,<br />
                        obsession towards making interfaces look and function well,<br />
                        and a willingness to always deliver more than asked.
                    </p>
                    <div className="mobile" style={styles.Computer}>
                        <Computer />
                    </div>
                </div>
                <div className="tech-inner">
                    <h2>What I Love to make</h2>
                    <div className="Make">
                        <div className="makeIcons">
                            <div style={{ width: '7rem' }}>
                                <Website />
                            </div>
                            <h1>Website</h1>
                        </div>
                        <div className="makeIcons">
                            <div style={{ width: '6rem' }}>
                                <Webapps />
                            </div>
                            <h1>Web Apps</h1>
                        </div>
                        <div className="makeIcons">
                            <div style={{ width: '6rem' }}>
                                <Ios />
                            </div>
                            <h1>Ios Apps</h1>
                        </div>
                        <div className="adjust" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <div style={{ width: '5.7rem' }}>
                                <Android />
                            </div>
                            <h1>Android Apps</h1>
                        </div>
                    </div>
                </div>
                <div className="tech-stack">
                    <h2>My Stack of Tech</h2>
                    <div className="stack">
                        <h1 onClick={() => selectStack('framework')} className={framework && 'active'}>Framework</h1>
                        <h1 onClick={() => selectStack('frontend')} className={frontend && 'active'}>Front-End</h1>
                        <h1 onClick={() => selectStack('backend')} className={backend && 'active'}>Back-End</h1>
                        <h1 onClick={() => selectStack('platform')} className={platform && 'active'}>Platform</h1>
                    </div>
                    {renderStack()}
                </div>
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
