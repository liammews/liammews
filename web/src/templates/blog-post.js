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
            <SEO title={post.title || 'Untitled'} />
            <BlogPost {...post} />
              </Layout>
            )
          }
          
          export default BlogPostTemplate