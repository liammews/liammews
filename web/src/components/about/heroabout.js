import React from "react";

const aboutHero = ({ data }) => {
    return(
        <div>
        <div className="flex flex-col">
            <div className="hero-logo">
            </div>
            <h1 className="text-4xl font-bold dark:text-white">Hi I'm Liam 🖖🏼</h1>
            <div className="flex flex-row mt-2">
                <div className="w-full flex flex-row justify-between">
                <div><p className="text-xl text-gray-400  dark:text-gray-300  mt-0  mb-0">Find out more about me</p></div>
                <div>
                </div>
                </div>
            </div>
            <div className="mb-6"  />
        </div>
        </div>
    )
}
export default aboutHero;