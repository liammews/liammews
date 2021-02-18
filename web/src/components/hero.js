import React from "react";
import { FaTwitter, FaEnvelope, FaBehance, FaGithub } from "react-icons/fa";

const Hero = () => {
    return(
        <div>
        <div className="flex flex-col">
            <div className="hero-logo">
            </div>
            <h1 className="text-4xl font-bold  dark:text-white">Hi I'm Liam</h1>
            <div className="flex flex-row mt-2">
                <div className="w-full flex flex-row justify-between">
                <div><p className="text-xl text-gray-400 dark:text-gray-300 mt-0 mb-0">Full-time graphic designer,<br></br>
                Part-time golfer, writer and developer.</p></div>
                <div className="hidden md:flex flex-row ">
                    <ul className="flex flex-row space-x-3 items-end">
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><a href="https://twitter.com/liammews"><FaTwitter /></a></li>
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><a href="mailto:hi@lium.uk"><FaEnvelope /></a></li>
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><a href="https://www.behance.net/liammews"><FaBehance /></a></li>
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><a href="https://github.com/liammews"><FaGithub /></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="mb-8"  />
        </div>
        </div>
    )
}
export default Hero;