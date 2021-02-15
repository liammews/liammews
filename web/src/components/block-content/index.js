import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './figure'
import Slideshow from './slideshow'
import InlineIcon from './inline-icon'

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 className="text-black dark:text-white text-4xl">{props.children}</h1>

        case 'h2':
          return <h2 className="text-black dark:text-white text-2xl font-bold">{props.children}</h2>

        case 'h3':
          return <h3 className="text-black dark:text-white text-md font-bold">{props.children}</h3>

        case 'h4':
          return <h4 className="text-black dark:text-white text-base">{props.children}</h4>

        case 'blockquote':
          return <blockquote className="text-black dark:text-white italic">{props.children}</blockquote>

        default:
          return <p className="text-black dark:text-white">{props.children}</p>
      }
    },
    figure (props) {
      return <Figure {...props.node} />
    },
    slideshow (props) {
      return <Slideshow {...props.node} />
    }
  },
  marks: {
    inlineicon (props) {
      switch (props.mark._type){
        case 'inlineicon':
          if(props.mark.asset) { return <InlineIcon src={props.mark.asset.url || ''} alt={props.children[0]}/> } else { return null }
      }
    }
  }
  }

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent
