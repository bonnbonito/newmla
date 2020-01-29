import React from "react"
import TestimonialBg from '../images/testimonials-bg.jpg'

const Testimonials = () => (
    <>
    <div className="page-section" id="testimonials-section" style={{
        backgroundImage: `url(${TestimonialBg})`
    }}>
		<div className="container">
			<div className="row">
				<div className="col-md-2 removeInMobile"></div>
				<div className="col-md-8">
					<h3 className="text-center">" MLA created me a stunning and greatly developed website. </h3>
					<p className="text-center">I have an interior design business and the look and feel of the website
						was<br />
						so important to be right.?</p>
					<p className="testi-author text-center"><em>- Kathryn, Kathryn Mazure Hudson, UK</em></p>
				</div>
				<div className="col-md-2 removeInMobile"></div>
			</div>
		</div>

	</div>
    </>
)

export default Testimonials