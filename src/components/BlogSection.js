import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const BlogBoxStyle = styled.div`
  max-width: 350px;
  height: 228px;
  background-size: cover;
  background-position: center;
`

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            slug
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
  `)

  const [page, setPage] = useState(2)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [blogs, setBlogs] = useState(data.allWordpressPost.edges.slice(0, 3))

  const onClickHandler = e => {
    e.preventDefault()
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.scrollBy(0, 1000)
    }
    setPage(page + 1)
    setBlogs(data.allWordpressPost.edges.slice(0, 3 * page))

    if (data.allWordpressPost.edges.length / 3 > page) {
      setHasNextPage(true)
    } else {
      setHasNextPage(false)
    }
  }

  return (
    <div className="page-section" id="blog-section">
      <div className="container">
        <div className="row" id="blog-wrap">
          {blogs.map(({ node }) => {
            return (
              <div className="col-md-4" key={node.id}>
                <Link to={node.link}>
                  <BlogBoxStyle
                    style={{
                      backgroundImage: `url(${node.featured_media.localFile.childImageSharp.fluid.srcWebp})`,
                    }}
                  ></BlogBoxStyle>
                </Link>
                <div
                  className="blog-title"
                  style={{
                    paddingBottom: `52px`,
                  }}
                >
                  {node.title}
                </div>
                <div className="blog-date">{node.date}</div>
                <div className="social-icon-container">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${node.link}&text=Title${node.title}`}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${node.link}`}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href={node.link}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
                <div className="thin-line"></div>
                <p>
                  <Link to={node.slug} className="brown-btn">
                    Read More &nbsp; &nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </p>
                <div className="thin-line"></div>
              </div>
            )
          })}
          {hasNextPage ? (
            <div
              className="col-md-12"
              style={{
                paddingTop: `45px`,
              }}
            >
              <p className="text-center">
                <button className="linkbtn" onClick={onClickHandler}>
                  <u>Load More</u>
                </button>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
