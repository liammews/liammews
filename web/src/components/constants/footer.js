import React from "react";
import FooterLinks from "./footerlinks"
import { FaTwitter, FaEnvelope, FaBehance, FaGithub } from "react-icons/fa";

const Footer = () => (
      <footer className="max-w-full h-14 pt-4 pb-52 border-t border-gray-300 dark:bg-gray-900">
        <div className="flex justify-between mt-5">
        <div>
        <FooterLinks  />
        </div>

        <div>
          <ul className="pl-0 my-0 list-none flex flex-col space-y-4">
            <li className="mt-0 pl-0 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"><a className="no-underline" href="/my-workspace">My Workspace</a></li>
            <li className="mt-0 pl-0 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"><a className="no-underline" href="/apps">My App Toolkit</a></li>
            <li className="mt-0 pl-0 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"><a className="no-underline" href="/now-february">Now</a></li>
          </ul>
        </div>

        <div>
        </div>

        <div>
        <ul className="pl-0 my-0 list-none hidden lg:flex space-x-3 items-end">
                        <li className="mt-0 pl-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><a href="https://twitter.com/liammews"><FaTwitter /></a></li>
                        <li className="mt-0 pl-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><a href="mailto:hi@lium.uk"><FaEnvelope /></a></li>
                        <li className="mt-0 pl-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><a href="https://www.behance.net/liammews"><FaBehance /></a></li>
                        <li className="mt-0 pl-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><a href="https://github.com/liammews"><FaGithub /></a></li>
                    </ul>
        </div>
        </div>
      </footer>
    )

export default Footer;