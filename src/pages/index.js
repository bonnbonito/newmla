import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import OurWork from "../components/OurWork"
import AboutUs from "../components/AboutUs"
import PortfolioInfo from "../components/PortfolioInfo"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"
import BlogSection from "../components/BlogSection"

const IndexPage = ({ data }) => {
  const page = data.wordpressPage
  console.log(data)
  return (
    <Layout>
      <SEO
        title={page.yoast_title}
        description={page.acf.social_tags.og_twitter_description}
        social={page.acf.social_tags}
        front={true}
      />
      <Banner />
      <OurWork />
      <AboutUs />
      <PortfolioInfo />
      <Testimonials />
      <BlogSection />
      <CallToAction />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 43 }) {
      id
      title
      yoast_title
      yoast_json_ld {
        wordpress__context
        wordpress__graph {
          wordpress__type
          wordpress__id
          name
          description
          width
          height
          caption
          inLanguage
          datePublished
          dateModified
        }
      }
      acf {
        json1
        social_tags {
          og_fb_description
          og_fb_title
          og_twitter_title
          og_twitter_description
          og_fb_image {
            localFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          og_twitter_image {
            localFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
          }
        }
      }
      content
    }
  }
`
