require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://kikitheapp.com/#/`,
  },
  plugins: [
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
        icon: `src/assets/images/kikilogo1.png`
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: "patWNHsR1yEEdi1XD.a7b2ca1a3e203a920bb5d916adb2396e043958ae3d952e18d1df493fa84fb1d9",
        tables: [
          {
            baseId: `appztisEji0oKqoqN`,
            tableName: `states`,
          },
          {
            baseId: `appztisEji0oKqoqN`,
            tableName: `resources`
          }
        ]
      }
    }
  ]
}

