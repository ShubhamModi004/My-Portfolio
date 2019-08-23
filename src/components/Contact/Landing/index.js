import React from 'react'
import Code from '../../common/Code';
import Warning from '../../common/Warning';
import Biceps from '../../common/Biceps';
import Mail from '../../common/Mail';
import Mobile from '../../common/Mobile';
import Fade from 'react-reveal/Fade';

import './Contact.css';

import Enter from '../../common/Enter';
const index = props => {
    return (
        <div
            className="container boxcontainer"
            style={{ marginBottom: '7rem' }}
        >
            <Fade delay={800}><h1 style={styles.header}>Get in touch</h1></Fade>
            <h1 style={styles.subHeader}>
                Let's get connected. Please fill out this<br />
                simple form.
            </h1>
            <div className="form">
                <form action="https://formspree.io/shubhammodi004@gmail.com" method="POST" class="ContactUsForm">
                    <div class="form-groups">
                        <div class="form-group">
                            <input type="text" class="form-control" name="name" placeholder="Name / Company" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="email" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="body" placeholder="Leave me a Message" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" class="button-submit d-flex"><p>SUBMIT</p><div style={{ width: '1rem', marginLeft: '0.5rem', marginTop: '0.35rem' }}><Enter /></div></button>
                    </div>
                </form>
            </div>
            <div className="contact-box mobile">
                <div className="contact-box-section">
                    <div className="mail" style={{ width: '2rem', marginBottom: '0.5rem' }}>
                        <Mail />
                    </div>
                    <a>shubhammodi004@gmail.com</a>
                </div>
                <div className="contact-box-section">
                    <div className="mobile" style={{ width: '2rem', marginBottom: '0.5rem' }}>
                        <Mobile />
                    </div>
                    <a>8975685906</a>
                </div>
            </div>

            <div className="contact-box-desktop">
                <div>
                    <div className="contact-box-desktop-section">
                        <div className="mail" style={{ width: '2rem', paddingTop: '1rem', marginRight: '0.5rem' }}>
                            <Mail />
                        </div>
                        <a href="mailto:shubhammodi04@gmail.com">shubhammodi004@gmail.com</a>
                    </div>
                    <div className="contact-box-desktop-section">
                        <div className="mobile-in" style={{ width: '1.5rem', paddingTop: '1rem', marginRight: '0.5rem' }}>
                            <Mobile />
                        </div>
                        <a href="tel:+918975685906">8975685906</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = ({
    header: {
        fontSize: '1.3rem',
        fontWeight: '300',
        marginTop: '4rem',
        marginBottom: '2rem',
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
