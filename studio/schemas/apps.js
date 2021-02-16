import {format} from 'date-fns'

export default {
  name: 'apps',
  title: 'Apps',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'device',
      title: 'Device',
      type: 'string'
    },
    {
        name: 'description',
        title: 'Decription',
        type: 'string'
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
      name: 'link',
      title: 'link',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'App Icon',
      type: 'image'
    },
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
