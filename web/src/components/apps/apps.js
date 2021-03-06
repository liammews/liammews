import React from "react";
import Card from "./appscard"

const Articles = ({ articles }) => {
  const Articles = articles.slice();

  return (
    <div>
    <hr className="mb-12 mt-2 w-full"  />
        <div className="flex flex-row flex-wrap justify-between w-full mb-6 space-y-6 lg:space-y-0">
          {Articles.map((article, i) => {
            return (
              <Card
                article={article}
              />
            );
          })}
        </div>
        </div>
  );
};

export default Articles;