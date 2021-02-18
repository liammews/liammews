import React from 'react'
import BlockContent from '../block-content'

//eq to comp/blog-post

function AboutInfo (props) {
  const { _rawBody } = props
  return (
    <div>

<hr className="mb-12 mt-2 w-full"  />

    <article>
            <div className="">
            {_rawBody && <BlockContent blocks={_rawBody} />}
            </div>
    </article>

    <hr className="mb-12 mt-12" />

        <div className="flex flex-row space-x-12 mb-12">

          <div>
          <p className="font-bold mb-4">Connect with me!</p>
          <a href="https://twitter.com/liammews"><p className="text-sm mb-2">Follow me on Twitter</p></a>
          <a href="mailto:hi@liammews.com"><p className="text-sm mb-2">Let's chat via email</p></a>
          <a href="https://github.com/liammews"><p className="text-sm mb-2">See what I'm up to on GitHub</p></a>
          <a href="https://www.behance.net/liammews"><p className="text-sm mb-2">See my work on Behance</p></a>
          </div>

          <div>
          <p className="font-bold mb-4">Learn more about me!</p>
          <a href="/music"><p className="text-sm mb-2">View my favourite albums</p></a>
          <a href="/my-workspace"><p className="text-sm mb-2">View my workspace</p></a>
          <a href="/apps"><p className="text-sm mb-2">Find out what apps I'm using</p></a>
          <a href="/"><p className="text-sm mb-2">View my latest blog posts</p></a>
          </div>

        </div>

    </div>
  )
}

export default AboutInfo
