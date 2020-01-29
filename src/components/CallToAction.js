import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import CallInActionImg from '../images/call-in-action-img.png'
import CallInActionBg from '../images/bottom-bg.jpg'

const CallToAction = () => (
    <>
    <div className="page-section" id="call-to-action" style={{
        backgroundImage: `url(${CallInActionBg})`,
    }}>
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <h3>Please feel free to get in touch
    and discuss any enquiries you have,
    just click the button below</h3>
                    <p><Link to="/" className="brown-btn">Contact Us &nbsp; &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link></p>
                </div>
                <div className="col-md-5">
                    <img src={CallInActionImg} alt="" className="img-fluid" />
                </div>
                <div className="col-md-1 removeInMobile"></div>
            </div>
        </div>
    </div>
    </>
)

export default CallToAction