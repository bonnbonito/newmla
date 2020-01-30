import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/Banner'
import OurWork from '../components/OurWork'
import AboutUs from '../components/AboutUs'
import PortfolioInfo from '../components/PortfolioInfo'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import BlogSection from '../components/BlogSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <OurWork />
    <AboutUs />
    <PortfolioInfo />
    <Testimonials />
    <BlogSection />
    <CallToAction />
  </Layout>
)

export default IndexPage
