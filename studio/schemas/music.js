import {format} from 'date-fns'

export default {
  name: 'music',
  title: 'music',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'string'
    },
    {
      name: 'link',
      title: 'link',
      type: 'string'
    },
    {
      title: 'Owned on Vinyl?',
      name: 'featured',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'image'
    },
    {
      name: 'category',
      title: 'category',
      type: 'text',
    },
    {
        name: 'date',
        title: 'date',
        type: 'text',
      },
    {
      title: 'Body', 
      name: 'body',
      type: 'array', 
      of: [{type: 'block'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
