import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Logo
