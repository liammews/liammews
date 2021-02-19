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
            <SEO title={'About'} description={'Find out some more about me.'} image={'https://cdn.sanity.io/images/hdetr6ej/production/7bf363db800c48f6cfcab9c430e193d733312aad-770x420.jpg?w=2000&h=2000&fit=max'}  />
            <AboutHero  />
            <AboutInfo {...post} />
              </Layout>
            )
          }
          
          export default About