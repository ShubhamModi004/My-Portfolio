import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// import sections
import Landing from '../components/Contact/Landing';
import Work from '../components/CaseStudy/Work';
import Footer from '../components/Footer';

const IndexPage = () => (
    <Layout>
        <SEO title="Shubham Modi" />
        <Landing />
    </Layout>
)

export default IndexPage
