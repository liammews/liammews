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
    <li className="hover:text-blue-500 dark:text-white dark:hover:text-blue-400" key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`space-y-4 ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
