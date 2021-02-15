import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about/",
  },
  {
    id: 3,
    text: "Collections",
    url: "/collections/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li className="hover:text-blue-500 dark:text-white dark:hover:text-blue-400 dark:hover:bg-gray-800 inline hover:bg-gray-100 rounded-md pt-4 pb-4 pl-12 pr-12" key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`space-x-12 ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
