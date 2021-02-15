import React from "react";
import PageLinks from "./links"

const Nav = () => (
      <header className="max-w-full flex justify-center h-14 pt-4 pb-4 border-b border-gray-300 dark:bg-gray-900">
        <div>
        <nav>
        <PageLinks />    
        </nav>
        </div>
      </header>
    )

export default Nav;