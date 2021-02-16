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
    <li className=" dark:text-white pt-4 pb-4 pr-6 no-underline " key={link.id}>
      <Link className="no-underline" to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`no-underline ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
