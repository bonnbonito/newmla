import React from "react"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const PortfolioInfo = () => (
    <>
    <div className="page-section" id="portfolio-info">
		<div className="container">
			<div className="row">
				<div className="col-md-1 removeInMobile"></div>
				<div className="col-md-10">
					<div className="box-info">
						<div className="box-info-inner">
							<h2 className="text-center">Bestspoke Web Design London</h2>
							<p className="text-center"><strong>Do you know that most internet users consider web design as
									the number one influence in determining a site's quality?</strong></p>
							<p className="text-center">

								That means that if your website is lacking that wow factor, and not created with simple
								and easy use, there is a
								great chance that most of your visitors will just navigate away because they judge the
								site is not credible enough. At MLA Web Designs we want to make your website look great
								right from the start as we give you a high-functioning website that can help you sell
								products and generate leads. We will provide you with the right framework and use the
								best platform for your site needs. All of our web designs we create are fully custom and
								worked together with you to get them as you want. Naturally, since users are now using
								mobiles as much or more than desktops, we will also make sure that your website will be
								device ready
								and fully responsive once it's done.</p>

						</div>
					</div>
				</div>
				<div className="col-md-1 removeInMobile"></div>
				<div className="col-md-12">
					<p className="text-center"><img src={faArrowRight} alt="" /></p>
				</div>
			</div>
		</div>
	</div>
    </>
)

export default PortfolioInfo