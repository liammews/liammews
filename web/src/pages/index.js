import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import ArticlesComponent from "../components/articles";
import Layout from "../components/constants/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <div>
      <Seo image={'https://cdn.sanity.io/images/hdetr6ej/production/7bf363db800c48f6cfcab9c430e193d733312aad-770x420.jpg?w=2000&h=2000&fit=max'} ></Seo>
        <Hero></Hero>
        <div className="container">
          <ArticlesComponent articles={data.allSanityBlogPost.edges} />
        </div>
      </div>
    </Layout>
  );
};


export const query = graphql`
{
  allSanityBlogPost(sort: {fields: publishedAt, order: DESC}) {
    edges {
      node {
        title
        tag
        publishedAt(formatString: "DD.MM.YY")
        mainImage {
          asset {
            fluid {
              src
            }
          }
        }
        excerpt
        categories {
          title
        }
        slug {
          current
        }
      }
    }
  }
}



`

export default Blog
