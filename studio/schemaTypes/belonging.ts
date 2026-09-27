import {defineArrayMember, defineField, defineType} from 'sanity';

export const belonging = defineType({
  // Keep the stored type stable for existing documents and camera references.
  name: 'belonging',
  title: 'Thing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Category',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'belongingCategory'}]})],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'link', title: 'Link', type: 'url'}),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({name: 'purchased', title: 'Purchased', type: 'date'}),
    defineField({
      name: 'wishlist',
      title: 'Wishlist',
      type: 'boolean',
      initialValue: false,
      description: 'Exclude this item from the website inventory.',
    }),
    defineField({
      name: 'retired',
      title: 'Retired',
      type: 'date',
      description: 'Leave empty if you still use this thing.',
      validation: (rule) => rule.min(rule.valueOfField('purchased')),
    }),
    defineField({
      name: 'camera',
      title: 'Camera',
      type: 'boolean',
      initialValue: false,
      description: 'Allow this thing to be selected as a photo’s camera.',
    }),
  ],
  preview: {select: {title: 'name', media: 'image'}},
});
