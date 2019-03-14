import { ProjectBySlug, ProjectBySlugVariables } from 'database-api'

import { Query } from 'react-apollo'

/* interface IData extends ProjectCategoriesAll {} */

export default class ProjectBySlugQueryWrapper extends Query<
  ProjectBySlug,
  ProjectBySlugVariables
> {}
