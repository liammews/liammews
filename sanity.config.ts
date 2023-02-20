import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { getDefaultDocumentNode } from './structure';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["settings"])

export default defineConfig({
  basePath: "/studio",
  name: 'liam_mews_studio',
  title: 'Liam Mews Studio',
  projectId,
  dataset,
  plugins: 
  [deskTool({
    defaultDocumentNode: getDefaultDocumentNode,
  }), visionTool()], 
  structure: (S) =>
  S.list()
    .title("Content")
    .items([

      // Our singleton type has a list item with a custom child
      S.listItem()
        .title("Settings")
        .id("settings")
        .child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document()
            .schemaType("settings")
            .documentId("settings")
        ),
    ]),

  schema: {
    types: schemaTypes,
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
