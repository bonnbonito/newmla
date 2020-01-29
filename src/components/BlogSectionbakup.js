import React, {useState} from "react"
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF,faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

const BlogBoxStyle = styled.div`
    max-width: 350px;
    height: 228px;
    background-size: cover;
    background-position: center;
`;

const BlogSection = ( {data} ) => {

    // const [page, setPage] = useState(1);    
    // const [hasNextPage, setHasNextPage] = useState(true);

    const onClickHandler = (e) => {
        e.preventDefault();        
        setPage(page+1);        
    };
    return (
    <div className="page-section" id="blog-section">
		<div className="container">
			<div className="row">
                {data.allWordpressPost.edges.map( ({node}) => {                        
                    return (
                    <div className="col-md-4" key={node.id}>
                        <Link to={node.link} >
                            <BlogBoxStyle style={{
                                backgroundImage: `url(${node.featured_media.localFile.childImageSharp.fluid.srcWebp})`
                            }} >                                                    
                            </BlogBoxStyle>
                        </Link>    
                        <div className="blog-title" style={{
                            paddingBottom: `52px`
                        }}>{node.title}</div>
                        <div className="blog-date">{node.date}</div>
                        <div className="social-icon-container">                        
                            <Link to={node.link}><FontAwesomeIcon icon={faFacebookF} /></Link>
                            <Link to={node.link}><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to={node.link}><FontAwesomeIcon icon={faGooglePlusG} /></Link>
                            <Link to={node.link}><FontAwesomeIcon icon={faEnvelope} /></Link>						
                        </div>
                        <div className="thin-line"></div>
                        <p><Link to={node.link} className="brown-btn">Read More &nbsp; &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link></p>
                        <div className="thin-line"></div>
                    </div>                        
                )
                }                   
                )}		
                {data.allWordpressPost.pageInfo.hasNextPage ? (
                    <div className="col-md-12" style={{
                        paddingTop: `45px`
                        }}>                        
                        <p className="text-center"><button className="linkbtn" onClick={onClickHandler} ><u>Load More</u></button></p>
                    </div>
                ) : null}		
                
			</div>
		</div>
	</div>
    );
};

export default BlogSection

export const data = graphql`
    query {
        allWordpressPost(sort: {fields: date, order: DESC}) {
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
    }
`;