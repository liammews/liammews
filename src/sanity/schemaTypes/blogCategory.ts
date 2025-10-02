// ./src/sanity/schemaTypes/blogCategory.ts
import { defineField, defineType } from "sanity";

export const blogCategoryType = defineType({
  name: "blogCategory",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});