import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AboutUsImg from '../images/about-us-img.jpg'
import ArrowImg from '../images/arrow-img.png'

const AboutUs = () => (

    <div className="page-section" id="about-us">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<img src={AboutUsImg} alt="" className="img-fluid" />
					</div>
					<div className="col-md-5">

						<img src={ArrowImg} alt="" />
							
						<h2>About Us</h2>
						<p>As a team of highly skilled online marketers we serve to execute the highest standards in web design whilst providing our clients with development & e-commerce solutions, that are skillfully tailored to our consumers needs.</p>

<p>With years of experience and expertise in the web design industry, we offer a multitude of services. Our team are here to help, advise & implement the very highest standards and principles in web design.</p>
 						
						<p><Link to="/portfolio" className="brown-btn">Portfolio &nbsp; &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link></p>
					</div>
					
				</div>
			</div>
		</div>

)
export default AboutUs