import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ArrowImg from '../images/arrow-img.png'
import TechImg from '../images/about-edge-tech-img.jpg'
import ResultImg from '../images/about-parallel-result-img.jpg'
import Testimonials from '../components/Testimonials'

const AboutPage = () => (
<Layout innerPage={true}>
<SEO title="About Us" />
<div className="page-section" id="portfolio-info">			
        <div className="container">
            <div className="row">
                <div className="col-md-1 removeInMobile"></div>
                <div className="col-md-10">
                    <div className="box-info">
                        <div className="box-info-inner">
                            <h2 className="text-center">Our Story</h2>
                            <p className="text-center">Based in North London, UK, we are one of London's best professional website 
design companies. Whether you need a basic website design or a custom e-commerce website, the chances are excellent that MLA Web Designs can help you increase your company's visibility and improve its graphic image. MLA Web Designs is a full service provider of custom website design and website development including lead generating and 
e-commerce website development.</p>

<p className="text-center">With an award-winning staff of professional web designers, we can assist 
you with everything from your logo design to your custom website design and development, including graphic design, video development, blogs, and much more. So whether you need your first website developed, or would like to redesign 
and improve your current website.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-1 removeInMobile"></div>
                <div className="col-md-12">
                    <p className="text-center"><img src={ArrowImg} alt="" /></p>
                </div>
            </div>
        </div>
    </div>

    <div class="page-section" id="tech-section">
        <div class="container">
            <div class="row">
                <div class="col-md-1 removeInMobile"></div>
                <div class="col-md-5">
                    <div class="tech-inner-box">
                        <img src={ResultImg} alt="" class="img-fluid" />
                        <h3>Un Parallel Result</h3>
                        <p>We have huge experience in the online marketing 
field having spent 10’s of thousands of pounds on ads and years of experience in affiliate marketing. This is what sets us apart from other digital marketing agencies because we have actually done it before and tested all types of landing pages and seen 
what does and doesn’t convert.</p>

<p>This experience has guided us to where we are today, 
and we are always learning and moving with the times, as google and the other major search engines are always changing. That said since the beginning of the net the search engines have always been looking for the basic fundamentals of you being able to make your site an authority in your set niche, and just creating a site that will 
best provide your visitors what they are looking for.</p>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="tech-inner-box">
                        <img src={TechImg} alt="" class="img-fluid" />
                        <h3>Leading Edge Technology</h3>
                        <p>We help our clients connect with their target audience on a deeper level, creating compelling content that inspires opinions and encourages interaction. Effective design does more than just present information, it shapes the way we identify with it – usually with no thought at all. We believe design makes the difference. Our work reflects it and our client’s testimonials confirm it.</p>

<p>If you have any questions,please feel free to get in touch by contacting us here.</p>

<p>Alternatively you can see some of our recent works by checking out our portfolio by clicking below.</p>
                    </div>
                </div>
                <div class="col-md-1 removeInMobile"></div>
                <div class="col-md-12" style={{paddingTop: `45px`}}>
                    <p class="text-center"><Link to="/portfolio" class="brown-btn">Portfolio</Link></p>
                </div>
            </div>
        </div>
    </div>
<Testimonials />
</Layout>
)

export default AboutPage
