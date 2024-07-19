require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `Kiki For The Future`,
      description: `Kiki For The Future. Get a fresh take on what you didn't learn in sex-ed.`,
      image: `/card.png`,
      siteUrl: `https://kikitheapp.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-K4VQNJR8R6" // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Do not track users that have "Do Not Track" enabled
          respectDNT: true,
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0
        },
      },
    },
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
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         */
        url: process.env.KIKI_CMS,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         */
        url: process.env.KIKI_CMS,
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
