/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import innertext from "innertext"

const SEO = ({ description, lang, meta, title, path, social, front }) => {
  console.log(social)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            url
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription =
    innertext(description) || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title

  let schema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "MLA Web Design & Development London",
    url: site.siteMetadata.url,
    image: "https://www.mlawebdesigns.co.uk/wp-content/themes/mla/img/logo.png",
    description:
      "MLA Web Designs is a unique firm, that offers high end custom web design, web development and SEO services at affordable prices across all areas of London",
    email: "admin@mlawebdesigns.co.uk",
    priceRange: "$$",
    telephone: "+44 (0)203 823 9033",
    hasMap:
      "https://www.google.co.uk/maps/place/Barnet+EN5+5YL/@51.6548302,-0.2017436,17z/data=!3m1!4b1!4m5!3m4!1s0x4876178e4c1ccee1:0x7244570dd69059cc!8m2!3d51.6547833!4d-0.1995648",
    sameAs: [
      "https://uk.linkedin.com/company/mla-web-designs",
      "https://www.facebook.com/mlawebdesigns",
      "https://www.instagram.com/mlawebdesigns/",
      "https://twitter.com/mlawebdesigns",
    ],
    logo: {
      "@type": "ImageObject",
      url: "https://www.mlawebdesigns.co.uk/wp-content/themes/mla/img/logo.png",
      width: 600,
      height: 60,
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "4 Galley House",
        addressLocality: "Moon Lane,Barnet",
        addressRegion: "London",
        postalCode: "EN5 5YL",
        addressCountry: "UK",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+44 (0)203 823 9033",
        contactType: "customer service",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "5",
      ratingCount: "23",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.654821",
      longitude: "-0.199494",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  }

  let schemaWebpage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: site.siteMetadata.url + path,
    name: metaTitle,
    description: social ? social.og_fb_description : metaDescription,
    publisher: "MLA Web Design London",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.mlawebdesigns.co.uk/?s={search_term}",
      "query-input": "required name=search_term",
    },
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: social ? social.og_fb_description : metaDescription,
          },
          {
            property: `og:title`,
            content: social ? social.og_fb_title : metaTitle,
          },
          {
            property: `og:description`,
            content: social ? social.og_fb_description : metaDescription,
          },
          {
            property: `og:image`,
            content:
              social && social.og_fb_image
                ? social.og_fb_image.localFile.childImageSharp.fluid.srcWebp
                : null,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author || metaDescription,
          },
          {
            name: `twitter:title`,
            content: social ? social.og_twitter_title : metaTitle,
          },
          {
            name: `twitter:description`,
            content: social ? social.og_twitter_description : metaDescription,
          },
        ].concat(meta)}
      >
        <script type="application/ld+json">
          {!front ? JSON.stringify(schemaWebpage) : null}
        </script>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
