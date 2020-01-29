const path = require('path')
const slash = require('slash')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const PageTemplate = path.resolve('./src/templates/page.js')

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
        }
    `);

    if ( result.errors ) {
        throw new Error(result.errors)
    }

    const { allWordpressPage } = result.data

    allWordpressPage.edges.forEach(edge => {
        if (edge.node.status === 'publish') {
            createPage({
                path: edge.node.slug,
                component: slash(PageTemplate),
                context: {
                    id: edge.node.id,                    
                    wpID: edge.node.wordpress_id
                }
            })
        }
    });
}