import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PorfolioImg from "../images/portfolio-big-img.png"
import PortfolioItems from "../components/PortfolioItems"

const Portfolio = () => (
  <Layout innerPage={true}>
    <SEO title="Portfolio" />
    <div className="portfolio-big-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 portfolio-info-text">
            <h2>
              Web Design &amp; <br /> Development Agency <br /> London
            </h2>
            <p>
              Welcome to our portfolio page, please see some of our works below.
              Every site is unique to itself and many sites we have built have
              had many different functionalities from custom quotation systems,
              booking systems to fully made education systems. Every site we
              build is completely custom designed and bespoke built creating
              people a much more professional and easy to manage website.
            </p>
            <p>
              <Link
                to="/contact-us"
                style={{
                  color: `#000`,
                  paddingRight: `20px`,
                }}
              >
                Contact
              </Link>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </div>
          <div className="col-md-6 removePaddingRightLeft">
            <img src={PorfolioImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <PortfolioItems />
  </Layout>
)

export default Portfolio
