import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CallInActionImg from "../images/call-in-action-img.png"
import styled from "styled-components"
import axios from "axios"

const ContactFormStyle = styled.div`
  position: relative;
  .loader-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.25);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input[type="submit"] {
    background-color: #ba9d80;
    color: #fff;
    padding: 10px 65px;
    border: none;
  }
  textarea {
    padding-left: 20px;
    height: 150px;
    width: 100%;
    border: 1px solid #c0c0c0;
    margin-bottom: 20px;
  }
  input[type="text"],
  input[type="email"] {
    width: 100%;
    height: 45px;
    border: 1px solid #c0c0c0;
    margin-bottom: 20px;
    padding-left: 20px;
  }
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const ContactPage = ({ data }) => {
  const [form, setState] = useState({
    sending: false,
    name: "",
    phone: "",
    email: "",
    services: "",
    inqury: "",
  })

  const page = data.currentPage

  const onSubmitHandler = e => {
    e.preventDefault()
    setState({
      ...form,
      sending: true,
    })

    const bodyFormData = new FormData()
    bodyFormData.set("fname", form.name)
    bodyFormData.set("email", form.email)
    bodyFormData.set("phone", form.phone)
    bodyFormData.set("service", form.service)
    bodyFormData.set("inquiry", form.inquiry)

    console.log(bodyFormData)

    axios({
      method: "post",
      url:
        "https://www.mlawebdesigns.co.uk/wp-json/contact-form-7/v1/contact-forms/34/feedback",
      data: bodyFormData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function(response) {
        console.log(response)
        setState({
          ...form,
          sending: false,
        })
      })
      .catch(function(response) {
        console.log(response)
      })
  }

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Layout innerPage={true}>
      <SEO
        title={page.yoast_title}
        description={
          page.acf.social_tags
            ? page.acf.social_tags.og_twitter_description
            : page.excerpt
        }
        social={page.acf.social_tags}
        front={false}
      />
      <div className="page-container">
        <div className="page-section" id="contact-info-container">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Get In Touch</h3>
                <p>
                  To get in touch with us, you can either call us on 0203 823
                  9033 or simply fill out the form below and we'll get in touch
                  with you promptly.
                </p>
                <img src={CallInActionImg} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <ContactFormStyle className="form-container">
                  <div
                    className="loader-wrap"
                    style={{ display: form.sending ? `flex` : `none` }}
                  >
                    <div className="lds-dual-ring"></div>
                  </div>
                  <form onSubmit={onSubmitHandler}>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          value={form.name}
                          onChange={updateField}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required
                          value={form.phone}
                          onChange={updateField}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={form.email}
                          onChange={updateField}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="services"
                          placeholder="Services"
                          required
                          value={form.services}
                          onChange={updateField}
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          name="inquiry"
                          required
                          value={form.inquiry}
                          onChange={updateField}
                        ></textarea>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="submit"
                          name="send"
                          value={form.sending ? "Submitting..." : "Submit"}
                        />
                      </div>
                      <div className="col-md-6"></div>
                    </div>
                  </form>
                </ContactFormStyle>
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
            <div className="col-md-6 text-center">
              4 Galley House, Moon Lane, Barnet, London, EN5 5YL
            </div>
            <div className="col-md-6 text-center">
              2B Redbourne Avenue, Finchley Central, London, N3 2BS
            </div>
            <div className="col-md-6 text-center">0203 823 9033</div>
            <div className="col-md-6 text-center">
              admin@mlawebdesigns.co.uk
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query {
    currentPage: wordpressPage(wordpress_id: { eq: 27 }) {
      id
      title
      content
      yoast_title
      excerpt
      acf {
        quote
        social_tags {
          og_fb_description
          og_fb_title
          og_twitter_description
          og_twitter_title
        }
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
