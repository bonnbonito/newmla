import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';

const PageTemplate = ({ data }) => {
    console.log(data);
    return (
        <Layout>
        <SEO title="Data" />   
        <div dangerouslySetInnerHTML={{__html: data.currentPage.content}}>            
        </div> 
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
`;