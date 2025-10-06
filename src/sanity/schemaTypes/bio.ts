// ./src/sanity/schemaTypes/bio.ts
import { defineField, defineType } from "sanity";
import { blockContentType } from "./blockContent";

export const bioType = defineType({
  name: "bio",
  type: "document",
  title: "Bio",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "blockContent",
      title: "Bio Content",
      description: "Rich text content for the bio",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare(selection) {
      return { 
        title: selection.title || "Bio",
      };
    },
  },
});
