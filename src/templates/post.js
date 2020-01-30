import React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import styled from 'styled-components';

const PostContent = styled.article`
  margin: 20px 0 0 0;
`;

const postTemplate = ({ data: { post } }) => (
  <Layout>    
    <SEO title="Data" />   
    <PostContent className="container">
      <div className="row" style={{ marginBottom: '40px' }}>        
        <div className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </PostContent>
  </Layout>
);

postTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default postTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      title
      content
      author {
        name
      }
      date(formatString: "DD, MMM, YYYY")
      categories {
        id
        name
        slug
      }
    }
  }
`;
