import { Link } from "gatsby"
import React from "react"
import FooterLogo from '../images/footer-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF,faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-7 footer-menu">
						<div className="logo-menu">
							<div className="container">
								<div className="row">
									<div className="col-md-2">
										<Link to="/"><img src={FooterLogo} alt="" /></Link>
									</div>
									<div className="col-md-10">
										<ul className="footer-menu">
											<li><Link to="/">About</Link></li>
											<li><Link to="/">Areas</Link></li>
											<li><Link to="/">Blog</Link></li>
											<li><Link to="/">Portfolio</Link></li>
											<li><Link to="/">Contact Us</Link></li>
											<li><Link to="/">Terms</Link></li>
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
							<li><a href="tel:4402038239033"><FontAwesomeIcon icon={faPhoneAlt} /> +44 (0)203 823 9033</a></li>
							<li><a href="mailto:admin@mlawebdesigns.co.uk"><FontAwesomeIcon icon={faEnvelope} /> admin@mlawebdesigns.co.uk</a></li>
						</ul>
						<div className="footer-social-media">
							<a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
							<a href="https://facebook.com"><FontAwesomeIcon icon={faTwitter} /></a>
							<a href="https://facebook.com"><FontAwesomeIcon icon={faGooglePlusG} /></a>
							<a href="https://facebook.com"><FontAwesomeIcon icon={faEnvelope} /></a>
						</div>
					</div>
				</div>
			</div>
		</div>
)

export default Footer