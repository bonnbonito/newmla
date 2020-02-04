import React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"

const PortfolioContent = styled.article`
  margin: 20px 0 0 0;
`

const portfolioTemplate = ({ data: { portfolio } }) => (
  <Layout>
    <SEO
      title={portfolio.yoast_title}
      description={
        portfolio.acf.social_tags
          ? portfolio.acf.social_tags.og_twitter_description
          : portfolio.content
              .split(/\s+/)
              .slice(0, 45)
              .join(" ")
      }
      social={portfolio.acf.social_tags}
      path={portfolio.path}
      front={false}
    />
    <PortfolioContent className="container">
      <div className="row" style={{ marginBottom: "40px" }}>
        <div className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: portfolio.title }} />
          <div dangerouslySetInnerHTML={{ __html: portfolio.content }} />
        </div>
      </div>
    </PortfolioContent>
  </Layout>
)

portfolioTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default portfolioTemplate

export const pageQuery = graphql`
  query($id: String!) {
    portfolio: wordpressWpPortfolio(id: { eq: $id }) {
      id
      slug
      service
      title
      content
      path
      yoast_title
      acf {
        creative_director
        client
        json1
        gallery {
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
