import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// import sections
import Landing from '../components/Home/Landing';
import Tech from '../components/Home/Tech';
import Work from '../components/Home/Work';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Shubham Modi" />
    <Landing />
    <Tech />
    <Work />
    <Footer />
  </Layout>
)

export default IndexPage