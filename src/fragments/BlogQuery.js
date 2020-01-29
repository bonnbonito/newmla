import { graphql } from 'gatsby';

export const BlogQuery = graphql`
    fragment BlogQuery on Query {
        edges {
            node {
                id
                title
                date(formatString: "MMMM d, Y")
                featured_media {                            
                    localFile {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 350) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    }
                link
            }
        }
        pageInfo {
        hasNextPage
        }
    }
`;