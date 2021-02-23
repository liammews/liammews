import React, { useState } from "react"
import { FaBars, FaTimes, FaTwitter, FaEnvelope, FaGithub, FaBehance } from "react-icons/fa"
import Links from "./links"
import MobileLinks from "./mobilelinks"


function Header ({ siteTitle }) {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex items-center lg:justify-center flex-wrap pl-4 pt-2 lg:pb-4 fixed w-full lg:static border-b border-gray-300 bg-white dark:bg-gray-800 bg-opacity-80 bg-blur-light">

      <div className="flex justify-center lg:hidden">
      <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center py-2 text-black dark:text-white text-lg mb-4">
          <FaBars  />
        </button>
      </div>

      <div className={`${ isExpanded ? `flex` : `hidden` } lg:max-w-lg lg:flex-grow lg:flex lg:items-center lg:justify-center lg:w-auto lg:pt-3 hidden`}>
        <div className="text-sm lg:flex-grow">
          <Links  />
        </div>
      </div>

      <div className={`${ isExpanded ? `flex` : `hidden` } lg:hidden flex`}>
      <div className="w-screen bg-white dark:bg-gray-800 bg-opacity-80 text-black dark:text-white fixed top-0 left-0 p-2 border-b-2 border-gray-300 bg-blur-light dark:border-gray-400">
      <button onClick={() => toggleExpansion(!isExpanded)} className="flex text-lg items-center py-2 pl-2 text-black dark:text-white mb-4">
          <FaTimes  />
        </button>

      <div className="pb-4 pl-2">
      <MobileLinks  />
      </div>

      <div>
      <div className="flex flex-row pb-12 pl-2">
                    <ul className="pl-0 list-none my-0 flex flex-row space-x-8 items-end">
                        <li className="mt-0 pl-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-lg"><a href="https://twitter.com/liammews"><FaTwitter /></a></li>
                        <li className="mt-0 pl-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-lg"><a href="mailto:hi@lium.uk"><FaEnvelope /></a></li>
                        <li className="mt-0 pl-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-lg"><a href="https://behance.com/liammews"><FaBehance /></a></li>
                        <li className="mt-0 pl-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-lg"><a href="https://github.com/liammews"><FaGithub /></a></li>
                    </ul>
                </div>
      </div>

      </div>
      </div>

    </nav>
  )
}

export default Header