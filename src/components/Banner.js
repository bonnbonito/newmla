import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { BannerStyles } from './styles/BannerStyles'
import BannerBackground from '../images/home-banner-img.jpg'

const Banner = () => (
    <>
    <BannerStyles id="banner-section" style={{
              backgroundImage: `url(${BannerBackground})`,
              marginTop: `10px`
            }}>
        <div className="container">
				<div className="row">
					<div className="col-md-4 banner-text-content">
						
						<h2 className="color-white">Web Design & Development Agency London</h2>
						<p>"At MLA Web Designs We Deliver High End Design And 
Development At Affordable Prices."</p>
						<p><Link to="#" className="default-btn">Contact &nbsp; &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link></p>

					</div>
					<div className="col-md-8"></div>
				</div>
			</div>
    </BannerStyles>
    <div id="secondary-menu">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3"><Link to="/web-design">Web Design</Link></div>
                <div className="col-md-3"><Link to="/web-design">SEO</Link></div>
                <div className="col-md-3"><Link to="/web-design">Web Security</Link></div>
                <div className="col-md-3"><Link to="/web-design">Portfolio</Link></div>
            </div>
        </div>
    </div>
    </>
)

export default Banner