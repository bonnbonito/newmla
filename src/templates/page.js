import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const PageTemplate = ({ data }) => {
  const page = data.currentPage
  console.log(data)
  return (
    <Layout>
      <SEO
        title={page.yoast_title}
        description={
          page.acf.social_tags
            ? page.acf.social_tags.og_twitter_description
            : page.excerpt
        }
        social={page.acf.social_tags}
        front={false}
      />
      <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }}></div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      id
      title
      content
      yoast_title
      excerpt
      acf {
        quote
        schema
        social_tags {
          og_fb_description
          og_fb_title
          og_twitter_description
          og_twitter_title
        }
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
