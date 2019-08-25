import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SohailWork = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "casestudy/Sohail/SohailWork.png" }) {
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




export default SohailWork
