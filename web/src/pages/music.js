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
        <Seo title={'Music'} description={'A collection of my favourite albums and singles.'}></Seo>
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
