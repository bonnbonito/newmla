import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Testimonials from '../components/Testimonials'
import ContentMarketingBanner from '../images/content-marketing-banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TechImg from '../images/about-edge-tech-img.jpg'
import ResultImg from '../images/about-parallel-result-img.jpg'
import StrategyIcon1 from '../images/startegy-icon-1.jpg'
import StrategyIcon2 from '../images/startegy-icon-2.jpg'
import StrategyIcon3 from '../images/startegy-icon-3.jpg'
import StrategyIcon4 from '../images/startegy-icon-4.jpg'
import StrategyIcon5 from '../images/startegy-icon-5.jpg'

const ContentMarketing = () => (
<Layout innerPage={true}>
<SEO title="Content Marketing" />
<div className="inner-page-banner">
			<img src={ContentMarketingBanner} alt=""  className="img-fluid" />
		</div>

		<div className="page-section" id="portfolio-info">
			
			<div className="container">
				<div className="row">
					<div className="col-md-1 removeInMobile"></div>
					<div className="col-md-10">
						<div className="box-info">
							<div className="box-info-inner">
								<h2 className="text-center">Content Marketing London</h2>
								<p className="text-center">Creating a strategy in content marketing is really not that difficult, unlike what others might think. To help you develop a plan of action for your website, we’ve gathered some of the most important things you need to remember when building your content marketing.</p>
								
							</div>
						</div>
					</div>
					<div className="col-md-1 removeInMobile"></div>
					
				</div>
			</div>
		</div>

		<div className="page-section" id="create-strategy">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h2>You need to <br/>create a strategy</h2>
						<p>Not only do you need to have a strategy, but you also need to properly document it. Those businesses with a documented strategy in content marketing:</p>
					</div>
					<div className="col-md-7">
						<ul>
							<li>Are more likely to view themselves as adept at content marketing</li>
							<li>Feel substantially less challenged with each part of content marketing</li>
							<li>Normally consider themselves more efficient in their use of all social media channels and numerous content marketing strategies</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="brown-line"></div>
				</div>
			</div>
		</div>

		<div className="page-section" id="include-strategy">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="text-center">What to include in your strategy</h2>
						<p className="text-center">Think of the "content marketing strategy" as the structure of your business and your client's requests, as well as <br/>
an all-inclusive plan on how you will utilize each content to properly address your client's needs. While there are no absolute <br/> guides for crating a proper content marketing strategy; each feature should be exclusive to the business that created it. Here<br/> are some examples of the components that they commonly consist of:</p>
					</div>
				</div>
			</div>
			<div className="container" id="strategy-table">
				<div className="row">
					<div className="col-md-4">
						<div className="icon-container"><img src={StrategyIcon1} alt="" /></div>
						<div className="startegy-title"><h4>The business strategy</h4></div>
						<div className="strategy-desc">
							<p>This includes the vital objectives you have for your content program, the unique value you are considering to offer through your content, as well as the specifics of your business model. It should also sum up the opportunities, together with the the obstacles you may come across as you enforce your plan.</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="icon-container"><img src={StrategyIcon2} alt="" /></div>
						<div className="startegy-title"><h4>The innovation</h4></div>
						<div className="strategy-desc">
							<p>This includes the vital objectives you have for your content program, the unique value you are considering to offer through your content, as well as the specifics of your business model. It should also sum up the opportunities, together with the the obstacles you may come across as you enforce your plan.</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="icon-container"><img src={StrategyIcon3} alt="" />></div>
						<div className="startegy-title"><h4>The audience and content plans</h4></div>
						<div className="strategy-desc">
							<p>This is the part where you determine the target audiences for whom you will create the necessary content, as you should be able to outline their needs.

 </p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="icon-container"><img src={StrategyIcon4} alt="" /></div>
						<div className="startegy-title"><h4>The brand story</h4></div>
						<div className="strategy-desc">
							<p> During this phase, you should identify your content marketing in terms of the specific ideas and messages that you want to convey, how those messages differ from the competition, and how you perceive the development once you have shared them with your target audience.</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="icon-container"><img src={StrategyIcon5} alt="" /></div>
						<div className="startegy-title"><h4>The channel plan</h4></div>
						<div className="strategy-desc">
							<p>This must consist of the platforms you will sooner or later utilize in order to voice out your story; the objectives, conditions, as well as the methods for each one and how you will associate them so that they’ll produce an interconnected concept.</p>
						</div>
					</div>
					<div className="col-md-4">
						<h2>Get Started Today!</h2>
						<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. </p>
						<p><Link to="/contact" className="brown-btn">Contact Us &nbsp; &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link> </p>
					</div>
				</div>
			</div>
		</div>

		<div className="page-section" id="tech-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="tech-inner-box">
							<img src={ResultImg} alt="" className="img-fluid" />
							<h3>Convey the strategy with the other departments</h3>
							<p>It may be wise to inform everyone in your organization with a simple glimpse regarding the content marketing strategy that you have in mind, even for those who may not be directly involved to the process of the said content marketing. This is mainly crucial to big organizations, as it helps reduce replicated efforts, keep various departments on the same page, and guarantee that everyone is operating toward the same content goals.</p>

	
						</div>
					</div>
					<div className="col-md-6">
						<div className="tech-inner-box">
							<img src={TechImg} alt="" className="img-fluid" />
							<h3>Consider these factors</h3>
							<p>What do the people care about the most? How to utilize the values of content marketing in order to “sell” the content marketing through the entire organization? These factors should help you determine which element of your strategy are most suitable to share with each department. How often should you update the content marketing strategy? Some aspects of your strategy may remain while some may need editing and revisions so as to attain your goal in mind.</p>

<p>Ultimately, other parts of your content marketing strategy will profit from being periodically revised and updated. To make sure that your content marketing program remains on track, think about revisiting your core subjects and channel strategy on a yearly basis if your program is still in progress. May these content marketing tips help you along the way into reaching your business goals.</p>
						</div>
					</div>
					
					<div className="col-md-12" style={{paddingTop: `45px`}}>
						<p className="text-center"><Link to="/contact" className="brown-btn">Contact Us &nbsp; &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link></p>
					</div>
				</div>
			</div>
		</div>
<Testimonials />
</Layout>
)

export default ContentMarketing
