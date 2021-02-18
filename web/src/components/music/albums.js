import React from "react";
import Card from "./musiccard"

const Articles = ({ articles }) => {
  const Articles = articles.slice();

  return (
    <div>
    <hr className="mb-12 mt-2 w-full"  />
        <div className="flex flex-row flex-wrap justify-between w-full">
          {Articles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__${article.node.slug.current}`}
              />
            );
          })}
        </div>
        </div>
  );
};

export default Articles;