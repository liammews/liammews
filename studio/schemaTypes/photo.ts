import {defineField, defineType} from 'sanity';

export const photo = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'file',
      options: {accept: 'image/*'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'camera',
      title: 'Camera',
      type: 'reference',
      to: [{type: 'belonging'}],
      options: {filter: 'camera == true', disableNew: true},
    }),
    defineField({name: 'date', title: 'Date', type: 'date'}),
    defineField({name: 'location', title: 'Location', type: 'text', rows: 2}),
  ],
  preview: {
    select: {location: 'location', date: 'date', filename: 'image.asset.originalFilename'},
    prepare: ({location, date, filename}) => ({
      title: location || filename || 'Untitled photo',
      subtitle: date,
    }),
  },
  orderings: [{title: 'Date, newest first', name: 'dateDesc', by: [{field: 'date', direction: 'desc'}]}],
});
