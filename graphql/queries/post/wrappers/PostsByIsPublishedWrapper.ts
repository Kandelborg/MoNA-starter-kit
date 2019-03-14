import { PostsByIsPublished, PostsByIsPublishedVariables } from 'database-api'

import { Query } from 'react-apollo'

/* interface IData extends ProjectCategoriesAll {} */

export default class PostsByIsPublishedQueryWrapper extends Query<
  PostsByIsPublished,
  PostsByIsPublishedVariables
> {}
