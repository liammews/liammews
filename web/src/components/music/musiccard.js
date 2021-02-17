import React from "react";

const musicCard = ({ article }) => {
  return (
        <a className="no-underline" href={`${article.node.link}`}>
        <div className="flex flex-col justify-center">
        <div><img src={`${article.node.coverImage.asset.fluid.src}`} alt={`${article.node.title} album cover`} className="lg:h-48 lg:w-48 rounded-md mb-2 shadow-lg"></img></div>
        <div><p className="text-blue-500 dark:text-blue-300 text-sm font-medium no-underline mb-0">{article.node.title}</p></div>
        <div><p className="text-black dark:text-white text-xs no-underline mb-0">{article.node.artist}</p></div>
        <div className="flex flex-row">
        <p className="text-gray-400  dark:text-gray-300  text-xs mb-0">{article.node.category} - {article.node.date}</p>
          </div>
        </div>
        </a>
  );
};

export default musicCard;