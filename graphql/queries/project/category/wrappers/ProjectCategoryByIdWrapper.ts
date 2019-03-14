import { ProjectCategoryById, ProjectCategoryByIdVariables } from 'database-api'

import { Query } from 'react-apollo'

/* interface IData extends ProjectCategoriesAll {} */

export default class ProjectCategoryByIdQueryWrapper extends Query<
  ProjectCategoryById,
  ProjectCategoryByIdVariables
> {}
