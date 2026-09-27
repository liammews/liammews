export const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
export const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

if (!projectId) {
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID. Copy studio/.env.example to studio/.env.local and add your Sanity project ID.',
  );
}
