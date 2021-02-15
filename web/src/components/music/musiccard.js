import React from "react";

const musicCard = ({ article }) => {
  return (
        <a href={`${article.node.link}`}>
        <div className="flex flex-col justify-center space-y-0.5">
        <div><img src={`${article.node.coverImage.asset.fluid.src}`} className="lg:h-48 lg:w-48 rounded-md mb-2 shadow-lg"></img></div>
        <div><p className="text-blue-500 dark:text-blue-300 text-sm font-medium">{article.node.title}</p></div>
        <div><p className="text-black dark:text-white text-xs">{article.node.artist}</p></div>
        <div className="flex flex-row mt-1">
        <p className="text-gray-400 text-xs">{article.node.category} - {article.node.date}</p>
          </div>
        </div>
        </a>
  );
};

export default musicCard;