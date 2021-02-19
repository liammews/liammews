import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import MusicComponent from "../components/apps/apps";
import Layout from "../components/constants/layout"
import Hero from "../components/apps/appshero";
import Seo from "../components/seo"

const Music = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
        <Seo title={'Apps'} description={'A collection of my favourite apps and software.'} image={'https://cdn.sanity.io/images/hdetr6ej/production/7bf363db800c48f6cfcab9c430e193d733312aad-770x420.jpg?w=2000&h=2000&fit=max'}></Seo>
        <Hero></Hero>
      <div>
        <MusicComponent articles={data.allSanityApps.edges} />
      </div>
    </Layout>
  );
};


export const query = graphql`
{
  allSanityApps(sort: {fields: device, order: ASC}) {
    edges {
      node {
        description
        device
        icon {
          asset {
            fluid {
              src
            }
            description
          }
        }
        link
        name
        slug {
          current
        }
      }
    }
  }
}
`

export default Music
