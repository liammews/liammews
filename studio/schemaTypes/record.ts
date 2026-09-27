import {defineField, defineType} from 'sanity';

export const record = defineType({
  name: 'record',
  title: 'Record',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'artist', title: 'Artist', type: 'string'}),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (rule) => rule.integer().min(1000).max(9999),
    }),
    defineField({name: 'purchased', title: 'Purchased', type: 'date'}),
  ],
  preview: {select: {title: 'title', subtitle: 'artist', media: 'cover'}},
});
