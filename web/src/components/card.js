import React from "react";
import { Link } from "gatsby";

const Card = ({ article }) => {
  return (
    <div>
         <div className="mt-2" />
          <div>
            <hr className="content-divider" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div className="mt-8"></div>
            </div>
          </div>
      <div className="flex flex-row justify-start space-x-8">
        <div className="pt-1">
          <p className="text-gray-400  dark:text-gray-300  text-sm capitalize mb-0">{article.node.publishedAt}</p>
          <p className="text-gray-400  dark:text-gray-300  text-sm capitalize mb-0">{article.node.tag} </p>
        </div>
        <div className="flex flex-col">
        <Link className="no-underline" to={`${article.node.slug.current}`}>
         <div className="flex flex-col mb-8">
          <div>
          </div>

          <div>          
            <p className=" text-black font-medium text-2xl hover:text-blue-500 dark:text-white mb-0">
            {article.node.title}
          </p>
          </div>

          <div>          
            <p className="text-gray-400  dark:text-gray-300  text-base mb-0">
            {article.node.excerpt}
          </p>
          </div>

          </div>
          </Link>
        </div>
      </div>

      </div>
  );
};

export default Card;