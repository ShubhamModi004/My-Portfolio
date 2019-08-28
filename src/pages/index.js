import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loader from "../components/Loader/Loader"

// import sections
import Landing from '../components/Home/Landing';
import Tech from '../components/Home/Tech';
import Work from '../components/Home/Work';
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
          <SEO title="Home Full Stack Developer | Shubham Modi"
            keywords={[`Shubham Modi`, `Full Stack Developer`, `React Js Developer`,
              `Mobile App Developer goa`, `Frontend Designers Goa`, `Website makers in goa`,
              `website develoepers in goa`, `software developers in goa`, `Websites`, `Webapps`,
              `Android App`, `Ios App`]} />
        </Loader>
        :
        <Fade delay={100}>
          <Layout>
            <SEO title="Home Full Stack Developer | Shubham Modi"
              keywords={[`Shubham Modi`, `Full Stack Developer`, `React Js Developer`,
                `Mobile App Developer goa`, `Frontend Designers Goa`, `Website makers in goa`,
                `website develoepers in goa`, `software developers in goa`, `Websites`, `Webapps`,
                `Android App`, `Ios App`]} />
            <Landing />
            <Tech />
            <Work />
            <Footer />
          </Layout>
        </Fade>
      )
    )
  }
}

export default IndexPage
