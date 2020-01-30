import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Testimonials from '../components/Testimonials'
import EcommerceBanner from '../images/e-commerce-website-banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import EcommerceIcon1 from '../images/e-commerce-icon-1.jpg'
import EcommerceIcon2 from '../images/e-commerce-icon-2.jpg'
import EcommerceIcon3 from '../images/e-commerce-icon-3.jpg'
import EcommerceIcon4 from '../images/e-commerce-icon-4.jpg'
import Faqs from '../components/Faqs'


const ContentMarketing = () => (
<Layout innerPage={true}>
<SEO title="Content Marketing" />
    <div className="inner-page-banner">
		<img src={EcommerceBanner} alt=""  className="img-fluid" />
	</div>

    <div className="page-section" id="portfolio-info">
        
        <div className="container">
            <div className="row">
                <div className="col-md-1 removeInMobile"></div>
                <div className="col-md-10">
                    <div className="box-info">
                        <div className="box-info-inner">
                            <h2 className="text-center">E-Commerce-Website</h2>
                            <p className="text-center">We create value and trust through our designs. Every customer is important to us, regardless of whether you want a large e-commerce site or you just want a small custom designed site.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-1 removeInMobile"></div>
                
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
        
        <div className="container" id="strategy-table">
            <div className="row">
                <div className="col-md-6 inner-table-box">
                    <div className="icon-container"><img src={EcommerceIcon1} alt="" /></div>
                    <div className="startegy-title"><h4>Electronic Commerce</h4></div>
                    <div className="strategy-desc">
                        <p>Electronic commerce or most commonly known as “e-commerce”, is a term for any type of commercial transaction or business that relates to the transfer of information across the Internet. It covers a scope of numerous types of businesses: from consumer-based selling sites, through online music stores, online auctions, to business exchanges trading services and goods between corporations. It is currently one of the most essential aspects of the Internet to come up .</p>

<p>E-commerce allows people to electronically purchase services and goods without the barriers of distance and time. Electronic commerce has rapidly expanded over the past years and is expected to go along at this rate, or maybe even further accelerate. In the near future, the bounds between “electronic” and “conventional” commerce will progressively blur as more and more businesses move sections of their transactions onto the world of Internet.</p>p>
                    </div>
                </div>
                <div className="col-md-6 inner-table-box">
                    <div className="icon-container"><img src={EcommerceIcon2} alt="" /></div>
                    <div className="startegy-title"><h4>Business to Business</h4></div>
                    <div className="strategy-desc">
                        <p>Another branch of e-commerce refers to Business to Business (B2B). It pertains to electronic commerce between businesses instead of the usual transaction between a consumer and a business. B2B often deals with hundreds and maybe even thousands of other businesses, either as suppliers or customers. Carrying out these transactions electronically caters huge competitive benefits over the traditional methods. When enforced properly, e-commerce is often cheaper, faster, and more accessible than the traditional methods of trading services and goods.</p>

<p>The road to building a prosperous online store can be quite difficult if unaware of the e-commerce principles and what e-commerce is likely to do for your online business. Understanding and proper research are also required in order to decently utilize an e-business plan. This is a critical step to becoming successful in building an online store.</p>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-6 inner-table-box">
                    <div className="icon-container"><img src={EcommerceIcon3} alt="" /></div>
                    <div className="startegy-title"><h4>The Shopping Cart</h4></div>
                    <div className="strategy-desc">
                        <p>The shopping cart software is an operating system put-upon to allow your customers to purchase services or goods, track consumers, and tie together all aspects of e-commerce into one united whole. While there are numerous types of software that you can utilize, custom-built turnkey solutions are proved to be a cost-efficient method to create, modify and maintain an online store. Online shopping carts works like this: you enter an online store, you see a product that you want to purchase, and then you place it into your virtual shopping basket. After you finish browsing, you click checkout and complete the transaction by providing or placing your payment information.</p>

<p>To start your very own online business, it is best to put up different products that people may have difficulty finding in department stores and malls. Moreover, take the shipping into consideration, it is important to research the shipping fees that your goods would cost. Then, you need an e-commerce enabled website. This can either be a new site created from scratch, or an existing site to which you can then add e-commerce shopping cart capabilities.</p>
                    </div>
                </div>
                <div className="col-md-6 inner-table-box">
                    <div className="icon-container"><img src={EcommerceIcon4} alt="" /></div>
                    <div className="startegy-title"><h4>The Payment</h4></div>
                    <div className="strategy-desc">
                        <p>You also need a way of accepting online payments from your customers. This normally implies acquiring a merchant account and accepting credit card payments through an online gateway. Though some smaller sites want to stay with easier methods of acquiring payments such as PayPal. Finally, you will need a marketing strategy for drawing in targeted traffic to your website and a means of alluring old customers. If you are new to e-commerce business, just keep things simple and know your boundaries.</p>

<p>E-commerce can be a really gratifying business, but you must understand that you can’t instantly make a lot of money after building your site. It is essential to ask questions, do a lot of research, work hard, and make business decisions based on facts learned from researching e-commerce.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div className="page-section" id="faq-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">                
                    <h2 className="text-center">Frequently Asking Questions</h2>
                    <Faqs />
                </div>
            </div>
        </div>
    </div>

    <div className="page-section" id="get-started-today" style={{paddingTop: `65px`, paddingBottom: `65px`}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Get Started Today</h2>
                    <p className="text-center">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, </p>
                    <p className="text-center"><Link to="/contact" className="brown-btn">Contact Us &nbsp; &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link> </p>
                </div>
            </div>
        </div>
    </div>
<Testimonials />
</Layout>
)

export default ContentMarketing
