import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
          <SEO title="About Ui Ux Designer | Bangalore" keywords={[`Sohail`, `UI/UX`, `BEST UX DEVELOPER`, `BEST UI DESIGNER`, `UI DESIGNERS IN GOA`, `UI DESIGNERS IN BANGALORE`]} />
        </Loader>
        :
        <Fade delay={100}>
          <Layout>
            <SEO title="Shubham Modi" />
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
