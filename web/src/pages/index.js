import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import ArticlesComponent from "../components/articles";
import Layout from "../components/constants/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <div>
      <Seo></Seo>
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
  allSanityBlogPost {
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

export default IndexPage
