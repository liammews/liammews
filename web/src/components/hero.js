import React from "react";
import { FaTwitter, FaEnvelope, FaBehance, FaGithub } from "react-icons/fa";

const Hero = () => {
    return(
        <div>
        <div className="flex flex-col pt-24">
            <div className="hero-logo">
            </div>
            <h1 className="text-4xl font-bold -mb-0.25 dark:text-white">Hi I'm Liam</h1>
            <div className="flex flex-row">
                <div className="w-full flex flex-row justify-between">
                <div><h4 className="text-xl text-gray-400 mt-0  mb-0">Full-time graphic designer,<br></br>
                Part-time golfer, writer and developer.</h4></div>
                <div className="flex flex-row">
                    <ul className="flex flex-row space-x-3 items-end">
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"><a href="https://twitter.com/liammews"><FaTwitter /></a></li>
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"><a href="mailto:hi@lium.uk"><FaEnvelope /></a></li>
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"><a href="https://twitter.com/liammews"><FaBehance /></a></li>
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"><a href="https://twitter.com/liammews"><FaGithub /></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="mb-10"  />
        </div>
        </div>
    )
}
export default Hero;