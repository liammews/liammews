import React from "react";

const musicCard = ({ article }) => {
  return (
        <a className="no-underline" href={`${article.node.link}`}>
        <div className="flex flex-row md:flex-col flex-nowrap md:flex-wrap md:justify-center my-6 md:my-8 md:w-48">

        <div className="flex-shrink-0"><img src={`${article.node.coverImage.asset.fluid.src}`} alt={`${article.node.title} album cover`} className="h-48 w-48 rounded-md mb-2 shadow-lg mr-4 md:mr-0 hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"></img></div>

        <div className="self-end md:self-start pb-2 md:pb-0">
        <div><p className="text-blue-500 dark:text-blue-300 text-sm font-medium no-underline m-0">{article.node.title}</p></div>
        <div><p className="text-black dark:text-white text-xs no-underline m-0">{article.node.artist}</p></div>
        <div><p className="text-gray-400  dark:text-gray-300  text-xs m-0">{article.node.category} - {article.node.date}</p></div>
        </div>

        </div>
        </a>
  );
};

export default musicCard;