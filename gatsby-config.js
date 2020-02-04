module.exports = {
  siteMetadata: {
    url: "https://www.mlawebdesigns.co.uk",
    title: `Web Design London | Seo Services | Web Development | MLA`,
    description: `MLA Web Designs is a unique firm, that offers high end custom web design, web development and SEO services at affordable prices across all areas of London`,
    author: `@MLAWebDesigns`,
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
    "gatsby-plugin-styled-components",
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        excludedRoutes: [
          "/wp/v2/users/**",
          "/wp/v2/settings*",
          "/wp/v2/themes*",
        ],
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus",
          "**/portfolio",
          "**/service",
        ],
        baseUrl: "mlawebdesigns.co.uk",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        concurrentRequests: 20,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MLA Web Design`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/favicon.ico`, // This path is relative to the root of the site.
        icons: [
          {
            src: `${__dirname}/src/images/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `${__dirname}/src/images/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ], // Add or remove icon sizes as desired
      },
    },
    `gatsby-plugin-offline`,
  ],
}
