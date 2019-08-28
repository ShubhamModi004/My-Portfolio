import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Loader from "../components/Loader/Loader"


// import sections
import Landing from '../components/Contact/Landing';
import Work from '../components/CaseStudy/Work';
import Footer from '../components/Footer';

// For the fade in effect;
import Fade from 'react-reveal/Fade';

class IndexPage extends Component {
    state = {
        render: false
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                render: true
            })
        }, 1800);
    }
    render() {
        const { render } = this.state;
        return (
            (!render ?
                <Loader>
                    <SEO title="Contact Full Stack Developer | Shubham Modi"
                        keywords={[`Shubham Modi`, `Full Stack Developer`, `React Js Developer`,
                            `Mobile App Developer goa`, `Frontend Designers Goa`, `Website makers in goa`,
                            `website develoepers in goa`, `software developers in goa`, `Websites`, `Webapps`,
                            `Android App`, `Ios App`]} />
                </Loader>
                :
                <Fade delay={100}>
                    <Layout>
                        <SEO title="Contact Full Stack Developer | Shubham Modi"
                            keywords={[`Shubham Modi`, `Full Stack Developer`, `React Js Developer`,
                                `Mobile App Developer goa`, `Frontend Designers Goa`, `Website makers in goa`,
                                `website develoepers in goa`, `software developers in goa`, `Websites`, `Webapps`,
                                `Android App`, `Ios App`]} />
                        <Landing />
                    </Layout>
                </Fade>

            )
        )
    }
}

export default IndexPage
