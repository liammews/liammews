// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContent";
import { blogCategoryType} from "./blogCategory";
import { blogPostType } from "./blogPost";
import { momentsType } from "./moments";
import { inventoryCategoryType } from "./inventoryCategory";
import { inventoryItemType } from "./inventoryItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, blogCategoryType, blogPostType, momentsType, inventoryCategoryType, inventoryItemType],
};