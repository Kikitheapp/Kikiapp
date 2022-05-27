module.exports = {
  siteMetadata: {
    siteUrl: `https://kikitheapp.com/#/`,
  },
  plugins: [
    'gatsby-plugin-sharp',
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
        icon: 'src/assets/images/kikilogo1.png',
        icons: [{src: `/favicons/android-chrome-32x32.png`, sizes: '32x32', type: 'image/png'}]
      }
    }
  ]
}

