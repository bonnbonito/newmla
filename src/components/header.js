import { Link, useStaticQuery, graphql } from 'gatsby'
import React from "react"
import Logo from '../images/logo-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { HeaderStyles } from './styles/HeaderStyles'

import Navigation from './Navigation'

const Header = ( {siteTitle, isInnerPage} ) => {
  const {    
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query MenuQuery {
      menu: allWordpressMenusMenusItems(filter: {wordpress_id: {eq: 2}}) {
        totalCount
        edges {
          node {
            items {
              title
              url
              wordpress_id
              child_items {
                url
                title
                wordpress_id
              }
            }
            name
          }
        }
      }
    }
  `);
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
              <li><a href="tel:4402038239033"><FontAwesomeIcon icon={faPhoneAlt} style={{fontSize:`14px`}} /> +44 (0)203 823 9033</a></li>
              <li><a href="mailto:admin@mlawebdesigns.co.uk"><FontAwesomeIcon icon={faEnvelope} style={{fontSize:`14px`}} /> admin@mlawebdesigns.co.uk</a></li>
            </ul>
          </div>

              <nav className="navbar navbar-expand-lg navbar-light bg-light darkBlueMobile">
                  <button className="navbar-brand linkbtn">Menu</button>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">                			
                      <Navigation menu={menu} />                			             
                    </div>
              </nav>            
              </div>				
        </div>
      </div>     
    </HeaderStyles>
  )
}

export default Header
