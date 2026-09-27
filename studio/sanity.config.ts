import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {dataset, projectId} from './env';
import {homePage} from './schemaTypes/homePage';
import {belonging} from './schemaTypes/belonging';
import {belongingCategory} from './schemaTypes/belongingCategory';
import {photo} from './schemaTypes/photo';
import {record} from './schemaTypes/record';
import {media} from './schemaTypes/media';

export default defineConfig({
  name: 'liammews',
  title: 'Liam Mews',
  projectId: projectId!,
  dataset,
  plugins: [
    structureTool({
      structure: (S) => S.list().title('Website').items([
        S.listItem().title('Home page').id('homePage').child(
          S.document().schemaType('homePage').documentId('homePage').title('Home page'),
        ),
        S.divider(),
        S.documentTypeListItem('belonging').title('Things'),
        S.documentTypeListItem('photo').title('Photos'),
        S.documentTypeListItem('record').title('Records'),
        S.documentTypeListItem('media').title('Media'),
        S.documentTypeListItem('belongingCategory').title('Thing categories'),
      ]),
    }),
  ],
  schema: {
    types: [homePage, belonging, belongingCategory, photo, record, media],
    templates: (templates) => templates.filter(({schemaType}) => schemaType !== 'homePage'),
  },
  document: {
    actions: (actions, context) => context.schemaType === 'homePage'
      ? actions.filter(({action}) => action !== 'duplicate' && action !== 'delete')
      : actions,
  },
});
