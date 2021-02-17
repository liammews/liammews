import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/constants/layout'
import AboutHero from '.././components/about/heroabout'
import AboutInfo from '../components/about/aboutinfo'

//Eq to temp/blog-posts.js
export const query = graphql`
{
    post: sanityAbout{
      id
      _rawBody
    }
  }
`
    

        const About = props => {
            const { data } = props
            const post = data && data.post

            return (
              <Layout>
            <SEO  />
            <AboutHero  />
            <AboutInfo {...post} />
              </Layout>
            )
          }
          
          export default About