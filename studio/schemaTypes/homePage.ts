import {defineArrayMember, defineField, defineType} from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({
      name: 'introduction',
      title: 'Introduction',
      description: 'Your biography, current work, and project links.',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [defineArrayMember({
        type: 'block',
        styles: [{title: 'Paragraph', value: 'normal'}],
        lists: [],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
          ],
          annotations: [
            {
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (rule) => rule.required().uri({scheme: ['http', 'https', 'mailto']}),
              })],
            },
          ],
        },
      })],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Home page'}),
  },
});
