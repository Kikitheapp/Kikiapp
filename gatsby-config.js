require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `Kiki For The Future`,
      description: `Kiki For The Future. Get a fresh take on what you didn't learn in sex-ed.`,
      image: `/card.png`,
      siteUrl: `https://kikitheapp.com`,
      blogUrl: `https://medium.com/kiki-app`
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to none to allow builds to continue on image errors
        failOn: `none`,
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: { 
        name: `Kiki for the Future`,
        short_name: `Kiki`,
        start_url: `/`,
        background_color: `#30C3CD`,
        theme_color: `#30C3CD`,
        display: `standalone`,
        icon: `src/assets/images/kiki-splash.png`
      }
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@kikiapp`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_AIR,
        tables: [
          {
            baseId: `appztisEji0oKqoqN`,
            tableName: `resources`,
            separateNodeType: true,
            queryName: `Resources`,
            tableLinks: ['resource_states', 'state_fullname']
          },
          {
            baseId: `appztisEji0oKqoqN`,
            tableName: `states`,
          },          
        ]
      }
    }
  ]
}
