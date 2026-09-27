import {defineField, defineType} from 'sanity';

export const belongingCategory = defineType({
  name: 'belongingCategory',
  title: 'Thing category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'For example: EDC, Networking, Audio, or Workspace.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {select: {title: 'name'}},
});
