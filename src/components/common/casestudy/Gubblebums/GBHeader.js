
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GBHeader = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "casestudy/Gubblebums/GBHeader.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}




export default GBHeader
