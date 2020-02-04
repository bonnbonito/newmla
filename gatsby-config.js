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
        name: "MLA Web Designs",
        short_name: "MLA",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/logo-icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
