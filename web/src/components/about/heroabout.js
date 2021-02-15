import React from "react";

const aboutHero = ({ data }) => {
    return(
        <div>
        <div className="flex flex-col pt-24">
            <div className="hero-logo">
            </div>
            <h1 className="text-4xl font-bold dark:text-white">About</h1>
            <div className="flex flex-row">
                <div className="w-full flex flex-row justify-between">
                <div><h4 className="text-xl text-gray-400 mt-0  mb-0">Find out some more about me.</h4></div>
                <div>
                </div>
                </div>
            </div>
            <div className="mb-10"  />
        </div>
        </div>
    )
}
export default aboutHero;