import React from 'react'
import Code from '../../common/Code';
import Warning from '../../common/Warning';
import Biceps from '../../common/Biceps';

import Fade from 'react-reveal/Fade';

const index = props => {
    return (
        <div
            className="container boxcontainer"
            style={{ marginBottom: '7rem' }}>
            <Fade bottom duration={120}><h1 style={styles.header}>Case Studies</h1></Fade>
            <Fade delay={150}>
                <h1 style={styles.subHeader}>
                    <div className="d-flex">Find out what I've worked on,<div style={{ width: '1.2rem', height: '2rem', marginTop: '0.6rem', marginLeft: '0.3rem' }}><Code /></div><br /></div>
                    <div className="d-flex">what were the problems faced,<div style={{ width: '1.5rem', height: '2rem', marginTop: '0.6rem', marginLeft: '0.3rem' }}><Warning /></div><br /></div>
                    <div className="d-flex">and how I tackled them.<div style={{ width: '1.5rem', height: '2rem', marginTop: '0.6rem', marginLeft: '0.3rem' }}><Biceps /></div></div>
                </h1>
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
