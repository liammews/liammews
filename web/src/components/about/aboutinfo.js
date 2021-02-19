import React from 'react'
import BlockContent from '../block-content'

//eq to comp/blog-post

function AboutInfo (props) {
  const { _rawBody } = props
  return (
    <div>

<hr className="mb-12 mt-2 w-full"  />

<div className="inline mb-6">
<img  src="https://cdn.sanity.io/images/hdetr6ej/production/5ebdd2292fe3940f3d42f163957537912462916e-2500x1875.jpg?w=2000&h=2000&fit=max" className="rounded-lg" />
</div>

    <article>
            <div className="">
            {_rawBody && <BlockContent blocks={_rawBody} />}
            </div>
    </article>

    <hr className="mb-12 mt-12" />

        <div className="flex flex-row space-x-12 mb-12">

          <div>
          <p className="font-bold mb-4">Connect with me!</p>
          <a href="https://twitter.com/liammews"><p className="text-sm mb-2 underline">Follow me on Twitter</p></a>
          <a href="mailto:hi@liammews.com"><p className="text-sm mb-2 underline">Let's chat via email</p></a>
          <a href="https://github.com/liammews"><p className="text-sm mb-2 underline">See what I'm up to on GitHub</p></a>
          <a href="https://www.behance.net/liammews"><p className="text-sm mb-2 underline">See my work on Behance</p></a>
          </div>

          <div>
          <p className="font-bold mb-4">Learn more about me!</p>
          <a href="/music"><p className="text-sm mb-2 underline">View my favourite albums</p></a>
          <a href="/my-workspace"><p className="text-sm mb-2 underline">View my workspace</p></a>
          <a href="/apps"><p className="text-sm mb-2 underline">Find out what apps I'm using</p></a>
          <a href="/"><p className="text-sm mb-2 underline">View my latest blog posts</p></a>
          </div>

        </div>

    </div>
  )
}

export default AboutInfo
