import React from "react";
import Card from "../components/card";

const Articles = ({ articles }) => {
  const Articles = articles.slice();

  return (
    <div>
      <div>
        <div>
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
      </div>
  );
};

export default Articles;