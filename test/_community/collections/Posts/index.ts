import type { CollectionConfig } from '../../../../src/collections/config/types';
import { mediaSlug } from '../Media';

export const postsSlug = 'posts';

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'associatedMedia',
      type: 'upload',
      relationTo: mediaSlug,
      access: {
        create: () => true,
        update: () => false,
      },
    },
    {
      name: 'someFieldInSidebar',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'otherFieldInSidebar',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          displayFormat: 'dd-MM-yyyy',
        },
      },
    },
  ],
};
