import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EducrateSkill = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "casestudy/Educrate/EducrateSkill.png" }) {
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




export default EducrateSkill
