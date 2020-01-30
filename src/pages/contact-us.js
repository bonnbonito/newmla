import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CallInActionImg from '../images/call-in-action-img.png'

const ContactPage = () => (
    <Layout innerPage={true}>
    <SEO title="About Us" />

        <div class="page-container">
            <div class="page-section" id="contact-info-container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h3>Get In Touch</h3>
                            <p>To get in touch with us, you can either call us
on 0203 823 9033 or simply fill out the form below
and we'll get in touch with you promptly.</p>
                            <img src={CallInActionImg} alt="" class="img-fluid" />
                        </div>
                        <div class="col-md-6">
                            <div class="form-container">
                                <div class="container">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="page-section" id="contact-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">Our Contact Details</h2>
                    </div>
                    <div className="col-md-6 text-center">4 Galley House, Moon Lane, Barnet, London, EN5 5YL</div>
                    <div className="col-md-6 text-center">2B Redbourne Avenue, Finchley Central, London, N3 2BS</div>
                    <div className="col-md-6 text-center">0203 823 9033</div>
                    <div className="col-md-6 text-center">admin@mlawebdesigns.co.uk</div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
