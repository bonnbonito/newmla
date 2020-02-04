import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Logo from "../images/logo-img.jpg"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HeaderStyles } from "./styles/HeaderStyles"

const Header = ({ siteTitle, isInnerPage }) => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query MenuQuery {
      menu: allWordpressMenusMenusItems(filter: { wordpress_id: { eq: 2 } }) {
        totalCount
        edges {
          node {
            items {
              title
              url
              wordpress_id
              slug
              child_items {
                url
                title
                wordpress_id
                slug
              }
            }
            name
          }
        }
      }
    }
  `)
  return (
    <HeaderStyles id="header" className={isInnerPage ? "inner-header" : ""}>
      <div className="container">
        <div className="row">
          <div className="col-md-2" id="logo-container">
            <Link to="/">
              <img src={Logo} alt={siteTitle} />
            </Link>
          </div>
          <div className="col-md-10" id="menu-container">
            <div className="contact-info-section">
              <ul>
                <li>
                  <a href="tel:4402038239033">
                    <FontAwesomeIcon icon="phone-alt" /> +44 (0)203 823 9033
                  </a>
                </li>
                <li>
                  <a href="mailto:admin@mlawebdesigns.co.uk">
                    <FontAwesomeIcon icon="envelope" />
                    admin@mlawebdesigns.co.uk
                  </a>
                </li>
              </ul>
            </div>

            <Navbar
              bg="light"
              expand="lg"
              className="darkBlueMobile justify-content-end"
            >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  {menu.items.map((item, index) =>
                    item.child_items ? (
                      <NavDropdown
                        title={item.title}
                        id={item.wordpress_id}
                        key={index}
                      >
                        {item.child_items.map(child => (
                          <React.Fragment key={child.wordpress_id}>
                            <NavDropdown.Item href={`/${child.slug}`}>
                              {child.title}
                            </NavDropdown.Item>
                            <div className="dropdown-divider"></div>
                          </React.Fragment>
                        ))}
                      </NavDropdown>
                    ) : (
                      <Nav.Link href={`/${item.slug}`} key={index}>
                        {item.title}
                      </Nav.Link>
                    )
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </HeaderStyles>
  )
}

export default Header
