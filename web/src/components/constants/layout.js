/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"
import Footer from "./footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Helmet>
    <script async defer data-domain="liammews.com" src="https://plausible.io/js/plausible.js"></script>
    </Helmet>
    
    <div className="bg-white dark:bg-gray-900 min-h-screen">

            <Nav></Nav>
      <div className="px-4 pt-24 lg:pt-12 lg:max-w-2xl lg:ml-auto lg:mr-auto">
        <main>{children}</main>
        <Footer  />
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
