import React from 'react'
import BlockContent from './block-content'
import { FaTwitter, FaFacebook, FaEnvelope, FaReddit, FaWhatsapp, FaLink, FaLinkedin, FaSignLanguage } from 'react-icons/fa'

function BlogPost (props) {
  const { _rawBody, title, publishedAt, link } = props
  return (
    <div>
    <article className="pt-4">

            <a href="/" className="no-underline text-sm text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">← Back to blog</a>

            <h1 className="text-4xl dark:text-white mb-2 mt-6">{title}</h1>

            <p className="text-gray-400 dark:text-gray-300">Last updated - {publishedAt}</p>

            <div className="mt-12">
            {_rawBody && <BlockContent blocks={_rawBody} />}
            </div>
    </article>

    <div>
    <hr className="mb-8 mt-8"></hr>

    <div className="mb-8">
    <p className="text-black dark:text-white font-bold m-0">Enjoy this post?</p>
    <p className="text-black dark:text-white font-base mt-2 mb-4">You could always <a href="#" className="underline hover:text-blue-600 dark:hover:text-blue-400">subscribe to my email list</a> or share using the buttons below</p>
    <div className="flex flex-row space-x-8">
    <div><a href={`https://twitter.com/share?url=https://liammews.com/${link}`} className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><FaTwitter  /></a></div>
    <div><a href={`https://www.facebook.com/sharer/sharer.php?u=https://liammews.com/${link}`} className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><FaFacebook  /></a></div>
    <div><a href={`mailto:?subject:Check this out&body=https://liammews.com/${link}`} className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><FaEnvelope /></a></div>
    <div><a href={`https://www.reddit.com/submit?url=https://liammews.com/${link}`} className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-70"><FaReddit  /></a></div>
    <div><a href={`whatsapp://send?text=Check this out! https://liammews.com/${link}`} data-action="share/whatsapp/share" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-70"><FaWhatsapp  /></a></div>
    <div><a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://liammews.com/${link}`} className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-70"><FaLinkedin /></a></div>
    </div>
    </div>

    </div>
    </div>
  )
}

export default BlogPost
