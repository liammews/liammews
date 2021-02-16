import React from "react";

const appCard = ({ article }) => {
  return (
        <a className="no-underline" href={`${article.node.link}`}>
            <div className="flex flex-row hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-6 lg:mb-8 space-x-4">

                <div className="flex flex-col justify-center align-middle">

            <div className="mb-2"><img className="w-28" src={`${article.node.icon.asset.fluid.src}`} alt={`${article.node.name} Icon`}></img></div>

            <div className="rounded-full px-2 py-1 bg-blue-400 w-16 align-middle self-center justify-center flex">
                <div>
                    <p className="text-white text-xs mb-0">{article.node.device}</p>
                </div>
             </div>   

             </div>

            <div className="flex flex-col">

            <div><p className="font-medium text-lg text-black dark:text-white">{article.node.name}</p></div>

            <div><p className="text-sm text-gray-500 dark:text-gray-300">{article.node.description}</p></div>

            </div>

            </div>
        </a>
  );
};

export default appCard;