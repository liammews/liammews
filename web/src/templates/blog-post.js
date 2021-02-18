import React from 'react'
import { graphql } from 'gatsby'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../components/constants/layout'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityBlogPost(id: { eq: $id }) {
              id
              publishedAt(formatString: "DD MMM YYYY")
              title
              tag
              link
              excerpt
              _rawBody
              slug {
                current
              }
            }
          }
        `

        const BlogPostTemplate = props => {
            const { data } = props
            const post = data && data.post
            return (
              <Layout>
            <SEO title={post.title || 'Untitled'} description={post.excerpt || 'A blog post from Liam Mews'}/>
            <BlogPost {...post} />
              </Layout>
            )
          }
          
          export default BlogPostTemplate