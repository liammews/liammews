// astro.config.mjs
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import { loadEnv } from "vite";
import icon from "astro-icon";
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [sanity({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: false, // See note on using the CDN
    apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
    studioBasePath: "/studio",
    stega: {
      studioUrl: "/studio",
    },
  }), react(), icon()],
});