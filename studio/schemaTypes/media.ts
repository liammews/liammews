import {defineField, defineType} from 'sanity';

export const media = defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Film', value: 'film'},
          {title: 'Series', value: 'series'},
          {title: 'Book', value: 'book'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().custom((value) =>
        !value || ['film', 'series', 'book'].includes(value)
          ? true
          : 'Choose Film, Series, or Book.',
      ),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      hidden: ({document}) => document?.type !== 'book',
    }),
    defineField({name: 'start', title: 'Start', type: 'date'}),
    defineField({name: 'finish', title: 'Finish', type: 'date'}),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.integer().min(1).max(5),
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'type', media: 'image'}},
});
