import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const PortfolioItemsStyle = styled.div`
  .hide {
    display: none;
  }
`

const PortfolioItems = () => {
  const [filter, setFilter] = useState(0)

  const data = useStaticQuery(graphql`
    query {
      allWordpressWpPortfolio {
        edges {
          node {
            featured_media {
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            link
            id
            service
            slug
            path
          }
        }
      }
      allWordpressWpService {
        edges {
          node {
            slug
            name
            wordpress_id
          }
        }
      }
    }
  `)

  const onClickFilter = e => {
    e.preventDefault()
    return setFilter(parseInt(e.target.getAttribute("data-filter")))
  }

  return (
    <>
      <div className="filter-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <a
                    href="/"
                    onClick={onClickFilter}
                    data-filter="0"
                    className={filter === 0 ? "selected" : ""}
                  >
                    All
                  </a>
                </li>
                {data.allWordpressWpService.edges.map(({ node }) => {
                  return (
                    <li key={node.id}>
                      <a
                        href="/"
                        onClick={onClickFilter}
                        data-filter={node.wordpress_id}
                        className={
                          filter === node.wordpress_id ? "selected" : ""
                        }
                      >
                        {node.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PortfolioItemsStyle id="porfolio-section">
        <div className="container">
          <div className="row">
            {data.allWordpressWpPortfolio.edges.map(({ node }) => {
              console.log(node.service.indexOf(filter))
              return (
                <div
                  className={`col-md-4 text-center ${
                    filter === 0 || node.service.indexOf(filter) !== -1
                      ? ""
                      : "hide"
                  }`}
                  style={{ marginBottom: `40px` }}
                  key={node.id}
                >
                  <Link to={node.path}>
                    <div
                      style={{
                        width: `330px`,
                        height: `206px`,
                        backgroundImage: `url(${node.featured_media.localFile.childImageSharp.fluid.srcWebp})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        border: `2px solid #000`,
                        borderRadius: `10px`,
                      }}
                    ></div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </PortfolioItemsStyle>
    </>
  )
}

export default PortfolioItems
