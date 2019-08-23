module.exports = {
  siteMetadata: {
    title: `Full Stack Developer`,
    description: `Personal portfolio showing my passion for tiny bits of code`,
    author: `@ShubhamModi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `full-stack-developer`,
        short_name: `fullStack`,
        start_url: `/`,
        background_color: `#200D44`,
        theme_color: `#200D44`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
