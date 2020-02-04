const path = require("path")
const slash = require("slash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const PageTemplate = path.resolve("./src/templates/page.js")
  const PostTemplate = path.resolve("./src/templates/post.js")
  const PortfolioTemplate = path.resolve("./src/templates/portfolio.js")

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            slug
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            link
            status
            slug
            categories {
              id
            }
          }
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressWpPortfolio,
  } = result.data

  allWordpressPage.edges.forEach(edge => {
    if (
      edge.node.status === "publish" &&
      edge.node.slug.indexOf([
        "our-story",
        "content-marketing",
        "e-commerce-websites",
        "portfolio",
        "contact-us",
      ]) === -1
    ) {
      createPage({
        path: edge.node.slug,
        component: slash(PageTemplate),
        context: {
          id: edge.node.id,
          wpID: edge.node.wordpress_id,
        },
      })
    }
  })

  allWordpressPost.edges.forEach(edge => {
    if (edge.node.status === "publish") {
      createPage({
        path: edge.node.slug,
        component: slash(PostTemplate),
        context: {
          id: edge.node.id,
        },
      })
    }
  })
  allWordpressWpPortfolio.edges.forEach(edge => {
    if (edge.node.status === "publish") {
      createPage({
        path: `/portfolio/${edge.node.slug}/`,
        component: slash(PortfolioTemplate),
        context: {
          id: edge.node.id,
        },
      })
    }
  })
}
