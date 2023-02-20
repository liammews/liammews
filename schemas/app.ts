
export default {
  name: 'app',
  title: 'App',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Names',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text',
        maxLength: '90',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: [
          {title: 'MacOS', value: 'MacOS'},
          {title: 'iOS', value: 'iOS'},
          {title: 'Cross-Platform', value: 'Cross-Platform'},
          {title: 'Service', value: 'Service'},
          {title: 'Dev-Tool', value: 'Dev-Tool'},
        ],
      },
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'icon',
    }
  },
}
