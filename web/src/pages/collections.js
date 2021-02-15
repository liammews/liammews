import React from "react";
import Layout from "../components/constants/layout";
import Hero from "../components/collections/herocollections";
import Seo from "../components/seo";

const Music = () => {

  return (
    <Layout>
        <Seo></Seo>
        <Hero></Hero>

        <a href="/music">
        <div className="mb-12 p-4 flex flex-row items-end rounded-md bg-white dark:bg-gray-800 shadow hover:shadow-md h-80">
        <div className="flex flex-col">
        <div><p className="text-2xl font-bold dark:text-white">Music</p></div>
        <div><p className="text-base text-gray-500 dark:text-gray-300">A collection of my favourite albums</p></div>
        </div>
        </div>
        </a>


    </Layout>
  );
};

export default Music
