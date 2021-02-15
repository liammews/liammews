import React from "react";

const aboutBlock = ({ article }) => {
  return (
    <div><p className="text-black dark:text-white">{article.node.description}</p></div>
  );
};

export default aboutBlock;