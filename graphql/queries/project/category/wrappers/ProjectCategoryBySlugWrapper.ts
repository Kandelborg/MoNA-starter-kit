import {
  ProjectCategoryBySlug,
  ProjectCategoryBySlugVariables
} from 'database-api'

import { Query } from 'react-apollo'

/* interface IData extends ProjectCategoriesAll {} */

export default class ProjectCategoryBySlugQueryWrapper extends Query<
  ProjectCategoryBySlug,
  ProjectCategoryBySlugVariables
> {}
