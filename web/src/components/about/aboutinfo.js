import React from "react";
import Block from "./aboutblock";

const Articles = ({ articles }) => {
  const Articles = articles.slice();

  return (
    <div>
    <hr className="mb-12 mt-2 w-full"  />
        <div className="flex flex-row flex-wrap justify-between w-full mb-12">
          {Articles.map((article, i) => {
            return (
              <Block
                article={article}
              />
            );
          })}
        </div>
        </div>
  );
};

export default Articles;