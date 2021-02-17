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
            <Seo title={'About'}></Seo>
      <div>
        <AboutHero></AboutHero>
        <AboutInfo articles={data.allSanityAbout.edges} />

        <hr className="mb-12" />

        <div className="flex flex-row space-x-12 mb-12">

          <div>
          <p className="font-bold mb-4">Connect with me!</p>
          <a href="https://twitter.com/liammews"><p className="text-sm mb-2">Follow me on Twitter</p></a>
          <a href="mailto:hi@lium.uk"><p className="text-sm mb-2">Let's chat via email</p></a>
          <a href="https://github.com/liammews"><p className="text-sm mb-2">See what I'm up to on GitHub</p></a>
          <a href="https://www.behance.net/liammews"><p className="text-sm mb-2">See my work on Behance</p></a>
          </div>

          <div>
          <p className="font-bold mb-4">Learn more about me!</p>
          <a href="/music"><p className="text-sm mb-2">View my favourite albums</p></a>
          <a href="/my-workspace"><p className="text-sm mb-2">View my workspace</p></a>
          <a href="/apps"><p className="text-sm mb-2">Find out what apps I'm using</p></a>
          <a href="/"><p className="text-sm mb-2">View my latest blog posts</p></a>
          </div>

        </div>

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
