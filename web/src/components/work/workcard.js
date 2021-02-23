import React from "react";

const workCard = ({ title,  }) => {
  return (
    <a href={`${link}` className="no-underline">
    <div className="mb-12 p-4 flex flex-row items-end rounded-md shadow hover:shadow-lg h-80 bg-image-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70">
    <div className="flex flex-col pl-4 module-inside">
    <div><p className="text-2xl font-bold text-white no-underline m-0">{title}</p></div>
    <div><p className="text-base text-white no-underline m-0">{Descrition}</p></div>
    </div>
    </div>
    </a>
  );
};

export default workCard;