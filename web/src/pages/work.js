import React from "react";
import Layout from "../components/constants/worklayout";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
        <Seo title={'Work'} description={'My Online Portfolio.'} image={'https://cdn.sanity.io/images/hdetr6ej/production/7bf363db800c48f6cfcab9c430e193d733312aad-770x420.jpg?w=2000&h=2000&fit=max'}></Seo>
        

        <div className="flex lg:hidden">
        <h1 className="text-base">Liam Mews - Designer</h1>
        </div>

      <div className="transform -rotate-90 w-48 relative -left-32 top-52">
        <h1 className="-mr-24 text-base text-right">Liam Mews - Designer</h1>
      </div>

    <div className="w-full mb-12 md:grid md:grid-cols-2 gap-4 flex flex-col space-y-4 md:space-y-0">

    <div className="col-span-2">
    <a href="#" className="no-underline">
    <div className="p-4 flex flex-row items-end shadow hover:shadow-lg h-80 bg-image-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70">
    <div className="flex flex-col pl-4 module-inside">
    <div><p className="text-2xl font-bold text-white no-underline m-0">Coming Soon</p></div>
    <div><p className="text-base text-white no-underline m-0">Move - Art inspired by rave culture</p></div>
    </div>
    </div>
    </a>
    </div>

    <a href="/arsenal-formula1" className="no-underline">
    <div className="p-4 flex flex-row items-end shadow hover:shadow-lg h-80 bg-image-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70">
    <div className="flex flex-col pl-4 module-inside">
    <div><p className="text-2xl font-bold text-white no-underline m-0">Arsenal X Formula 1</p></div>
    <div><p className="text-base text-white no-underline m-0">Motorsport livery conceptualised in 3D</p></div>
    </div>
    </div>
    </a>

    <div className="/photgraphy">
    <a href="#" className="no-underline">
    <div className="p-4 flex flex-row items-end shadow hover:shadow-lg h-80 bg-image-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70">
    <div className="flex flex-col pl-4 module-inside">
    <div><p className="text-2xl font-bold text-white no-underline m-0">Coming Soon</p></div>
    <div><p className="text-base text-white no-underline m-0">A collection of my photography</p></div>
    </div>
    </div>
    </a>
    </div>

    <a href="/liammews" className="no-underline">
    <div className="p-4 flex flex-row items-end shadow hover:shadow-lg h-80 bg-image-7 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70 overflow-hidden">
    <div className="flex flex-col pl-4 module-inside">

    <div><p className="text-2xl font-bold text-white no-underline m-0">liammews.com</p></div>
    <div><p className="text-base text-white no-underline m-0">Building my own personal website</p></div>
    <div className="relative bg-black h-120 w-120"></div>

    </div>
    </div>
    </a>

    <a href="/cameraless-photography" className="no-underline">
    <div className="p-4 flex flex-row items-end shadow hover:shadow-lg h-80 bg-image-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70">
    <div className="flex flex-col pl-4 module-inside">
    <div><p className="text-2xl font-bold text-white no-underline m-0">Cameraless Photography</p></div>
    <div><p className="text-base text-white no-underline m-0">A photographic exploration</p></div>

    </div>
    </div>
    </a>

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

export default IndexPage
