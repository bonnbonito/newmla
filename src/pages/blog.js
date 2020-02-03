import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
            slug
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
  const [blogs, setBlogs] = useState(data.allWordpressPost.edges.slice(0, 4))

  const onClickHandler = e => {
    e.preventDefault()
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.scrollTo(0, document.body.scrollHeight)
    }
    setPage(page + 1)
    setBlogs(data.allWordpressPost.edges.slice(0, 4 * page))

    if (data.allWordpressPost.edges.length / 4 > page) {
      setHasNextPage(true)
    } else {
      setHasNextPage(false)
    }
  }

  return (
    <>
      <Layout innerPage={true}>
        <SEO title="Blog" />
        <div className="page-title-container">
          <h1 className="text-center">Blog</h1>
        </div>
        <div className="page-section" id="blog-section">
          <div className="container">
            <div className="row" id="blog-wrap">
              {blogs.map(({ node }) => {
                return (
                  <div className="col-md-3" key={node.id}>
                    <Link to={node.slug}>
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
                      <a
                        href={`mailto:?&subject=${node.title}&body=${node.link}`}
                      >
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
      </Layout>
    </>
  )
}

export default BlogSection
