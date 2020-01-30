import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import BeSpokeImg from '../images/dg-bespoke-img.jpg'
import ArrowImg from '../images/arrow-img.png'
import DgLogo from '../images/dg-logo-img.jpg'

const OurWork = () => (
    <div className="page-section" id="our-work">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center section-heading">Our Work</h2>
                </div>
                <div className="col-md-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <img src={DgLogo} alt="" />
                            </div>
                            <div className="col-md-6 text-right" style={{marginTop: `20px`}}><img src={ArrowImg} alt="" /></div>
                        </div>
                    </div>
                    <h2>DG Bespoke <br/>Jewellery</h2>
                    <p><em>Service | Web Design Services Web Development Services</em></p>
                    <p>Welcome to our portfolio page, please see some of our works below. 
Every site is unique to itself and many sites we have built have had many different functionalities from custom quotation systems, booking systems to fully made education systems. Every site we build is completely custom designed and bespoke built creating people a much more professional and
easy to manage website.</p>
                    <div className="thin-line"></div>
                    <p className="color-brown">Visit the live DG Bespoke Jewellery site below.<br/>
www.dgbespokejewellery.com/</p>
                    <p><Link to="/portfolio" className="brown-btn">Portfolio &nbsp; &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link></p>
                </div>
                <div className="col-md-7">
                    <img src={BeSpokeImg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
)

export default OurWork