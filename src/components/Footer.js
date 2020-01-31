import { Link } from "gatsby"
import React from "react"
import FooterLogo from "../images/footer-logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-7 footer-menu">
          <div className="logo-menu">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <Link to="/">
                    <img src={FooterLogo} alt="" />
                  </Link>
                </div>
                <div className="col-md-10">
                  <ul className="footer-menu">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/areas">Areas</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/terms">Terms</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright">
              MLA Web Designs © 2017 All Rights Reserved
            </div>
          </div>
        </div>
        <div className="col-md-5 footer-info text-right">
          <ul className="email-section">
            <li>
              <a href="tel:4402038239033">
                <FontAwesomeIcon icon="phone-alt" /> +44 (0)203 823 9033
              </a>
            </li>
            <li>
              <a href="mailto:admin@mlawebdesigns.co.uk">
                <FontAwesomeIcon icon="envelope" /> admin@mlawebdesigns.co.uk
              </a>
            </li>
          </ul>
          <div className="footer-social-media">
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
            </a>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon="envelope" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
