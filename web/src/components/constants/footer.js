import React from "react";
import FooterLinks from "./footerlinks"
import { FaTwitter, FaEnvelope, FaBehance, FaGithub } from "react-icons/fa";

const Footer = () => (
      <footer className="max-w-full h-14 pt-4 pb-4 border-t border-gray-300 dark:bg-gray-900">
        <div className="flex justify-between mt-5">
        <div>
        <FooterLinks  />
        </div>

        <div>
          <ul className="flex flex-col space-y-4">
            <li className="hover:text-blue-600 dark:text-white dark:hover:text-blue-300"><a href="#">My Workspace</a></li>
            <li className=" hover:text-blue-600 dark:text-white dark:hover:text-blue-300"><a href="#">My App Toolkit</a></li>
          </ul>
        </div>

        <div>
        </div>

        <div>
        <ul className="hidden lg:flex space-x-3 items-end">
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"><a href="https://twitter.com/liammews"><FaTwitter /></a></li>
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"><a href="mailto:hi@lium.uk"><FaEnvelope /></a></li>
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"><a href="https://twitter.com/liammews"><FaBehance /></a></li>
                        <li className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"><a href="https://twitter.com/liammews"><FaGithub /></a></li>
                    </ul>
        </div>
        </div>
      </footer>
    )

export default Footer;