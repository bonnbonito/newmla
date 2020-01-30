import React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import styled from 'styled-components';

const PortfolioContent = styled.article`
  margin: 20px 0 0 0;
`;

const portfolioTemplate = ({ data: { portfolio } }) => (
  <Layout>    
    <SEO title="Data" />   
    <PortfolioContent className="container">
      <div className="row" style={{ marginBottom: '40px' }}>        
        <div className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: portfolio.title }} />
          <div dangerouslySetInnerHTML={{ __html: portfolio.content }} />
        </div>
      </div>
    </PortfolioContent>
  </Layout>
);

portfolioTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default portfolioTemplate;

export const pageQuery = graphql`
    query($id: String!) {
        portfolio: wordpressWpPortfolio(id: {eq: $id}) {
        id
        slug
        service
        title
        content
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
`;
