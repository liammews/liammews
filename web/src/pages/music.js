import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import MusicComponent from "../components/music/albums";
import Layout from "../components/constants/layout"
import Hero from "../components/music/heromusic";
import Seo from "../components/seo"

const Music = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
        <Seo title={'Music'} description={'A collection of my favourite albums and singles.'} image={'https://cdn.sanity.io/images/hdetr6ej/production/7bf363db800c48f6cfcab9c430e193d733312aad-770x420.jpg?w=2000&h=2000&fit=max'}></Seo>
        <Hero></Hero>
      <div>
        <MusicComponent articles={data.allSanityMusic.edges} />
      </div>
    </Layout>
  );
};


export const query = graphql`
{
  allSanityMusic(sort: {fields: date, order: DESC}) {
      edges {
        node {
          date
          id
          link
          artist
          category
          featured
          title
          slug {
            current
          }
          coverImage {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }

`

export default Music
