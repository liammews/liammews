import type { SchemaTypeDefinition } from "sanity";

export const inventoryItemType: SchemaTypeDefinition = {
  name: "inventoryItem",
  title: "Inventory Item",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Important for SEO and accessibility.",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "Link to where the item can be purchased or found",
    },
    {
      name: "datePurchased",
      title: "Date Purchased",
      type: "date",
      description: "When this item was purchased",
    },
    {
      name: "wishlist",
      title: "Wishlist",
      type: "boolean",
      description: "Is this item on your wishlist?",
      initialValue: false,
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "inventoryCategory" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.title",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle ? `Category: ${subtitle}` : "No category",
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Name A-Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
    {
      title: "Date Purchased (Newest)",
      name: "datePurchasedDesc",
      by: [{ field: "datePurchased", direction: "desc" }],
    },
    {
      title: "Wishlist Items First",
      name: "wishlistFirst",
      by: [{ field: "wishlist", direction: "desc" }, { field: "name", direction: "asc" }],
    },
  ],
};
