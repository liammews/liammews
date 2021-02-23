import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Blog",
    url: "/",
  },
  {
    id: 2,
    text: "Work",
    url: "/work/",
  },
  {
    id: 3,
    text: "Collections",
    url: "/collections/",
  },
  {
    id: 4,
    text: "About",
    url: "/about/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li className="mt-0 pl-0 dark:text-white pt-4 pb-4 pr-6 no-underline " key={link.id}>
      <Link className="no-underline" to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`pl-0 list-none my-0 no-underline ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
