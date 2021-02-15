import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/constants/layout"
import AboutHero from "../components/about/heroabout"
import AboutInfo from "../components/about/aboutinfo"
import Seo from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(query);

  return(
    <Layout>
            <Seo></Seo>
      <div>
        <AboutHero></AboutHero>
        <AboutInfo articles={data.allSanityAbout.edges} />
      </div>
    </Layout>
    );
};

export const query = graphql`
{
  allSanityAbout {
    edges {
      node {
        description
        title
      }
    }
  }
}
`


export default AboutPage
