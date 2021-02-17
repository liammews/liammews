import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blogPost from './blogPost';
import category from './category'
import sponsor from './sponsor';
import about from './about';
import music from './music';
import figure from './figure'
import portableText from './portableText';
import apps from './apps';
import siteSettings from './site-settings';

export default createSchema({
  name: 'Blog',
  types: schemaTypes.concat([
    /* Your types here! */
    blogPost,
    portableText,
    figure,
    category,
    sponsor,
    about,
    music,
    apps,
    siteSettings,
  ])
})