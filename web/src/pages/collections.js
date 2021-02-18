import React from "react";
import Layout from "../components/constants/layout";
import Hero from "../components/collections/herocollections";
import Seo from "../components/seo";

const Music = () => {

  return (
    <Layout>
        <Seo title={'Collections'} description={'Collections of my favourite things.'}></Seo>
        <Hero></Hero>

        <a href="/music" className="no-underline">
        <div className="mb-12 p-4 flex flex-row items-end rounded-md shadow hover:shadow-lg h-80 bg-image-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70">
        <div className="flex flex-col pl-4 module-inside">
        <div><p className="text-2xl font-bold text-white no-underline m-0">Music</p></div>
        <div><p className="text-base text-white no-underline m-0">A collection of my favourite albums</p></div>
        </div>
        </div>
        </a>

        <a href="/apps" className="no-underline">
        <div className="mb-12 p-4 flex flex-row items-end rounded-md shadow hover:shadow-lg h-80 bg-image-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70">
        <div className="flex flex-col pl-4 module-inside">
        <div><p className="text-2xl font-bold text-white no-underline m-0">Apps and Software</p></div>
        <div><p className="text-base text-white no-underline m-0">The apps and software I use</p></div>
        </div>
        </div>
        </a>


    </Layout>
  );
};

export default Music
