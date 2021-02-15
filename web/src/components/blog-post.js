import React from 'react'
import BlockContent from './block-content'
import { FaTwitter, FaFacebook, FaEnvelope, FaReddit, FaWhatsapp, FaLink, FaLinkedin } from 'react-icons/fa'

function BlogPost (props) {
  const { _rawBody, title, publishedAt } = props
  return (
    <div>
    <article className="pt-16">
            <h1 className="text-4xl dark:text-white mb-2">{title}</h1>

            <p className="text-gray-400 dark:text-gray-300">Last Updated {publishedAt}</p>

            <div className="mt-12">
            {_rawBody && <BlockContent blocks={_rawBody} />}
            </div>
    </article>

    <div>
    <hr className="mb-8"></hr>

    <div className="mb-8">
    <p className="text-black dark:text-white font-bold">Enjoy this post?</p>
    <p className="text-black dark:text-white font-base mb-4">You could always <a href="#" className="underline hover:text-blue-600 dark:hover:text-blue-400">subscribe to my email list</a> or share using the buttons below</p>
    <div className="flex flex-row space-x-8">
    <div><a href="#" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"><FaTwitter  /></a></div>
    <div><a href="#" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"><FaFacebook  /></a></div>
    <div><a href="#" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"><FaEnvelope /></a></div>
    <div><a href="#" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"><FaReddit  /></a></div>
    <div><a href="#" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"><FaWhatsapp  /></a></div>
    <div><a href="#" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"><FaLink  /></a></div>
    <div><a href="#" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"><FaLinkedin /></a></div>
    </div>
    </div>

    </div>
    </div>
  )
}

export default BlogPost
