import React from "react";

const appCard = ({ article }) => {
  return (
        <a className="no-underline" href={`${article.node.link}`}>
            <div className="flex flex-row hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 w-100 lg:p-6 lg:mb-8 space-x-4">

                <div className="flex flex-col justify-center align-middle flex-shrink-0">

            <div className="mb-2 flex-shrink-0"><img className="rounded-3xl w-28 flex-shrink-0" src={`${article.node.icon.asset.fluid.src}`} alt={`${article.node.name} Icon`}></img></div>

            <div className="rounded-full px-3 py-2 border-2 border-blue-500 align-middle self-center justify-center flex lg:hidden">
                <div>
                    <p className="text-white text-xs m-0">{article.node.device}</p>
                </div>
             </div>   

             </div>

            <div className=" flex-shrink flex flex-col">

            <div><p className="font-medium text-lg text-black dark:text-white m-0">{article.node.name}</p></div>

            <div><p className="text-gray-500 dark:text-gray-300 mt-0 mb-2">{article.node.description}</p></div>


            <div className="rounded-full px-3 py-2 border-2 border-blue-500 align-middle self-center justify-center lg:flex hidden lg:self-start">
                <div>
                    <p className="dark:text-gray-300 text-gray-500 text-xs m-0">{article.node.device}</p>
                </div>
             </div>   


            </div>

            </div>
        </a>
  );
};

export default appCard;