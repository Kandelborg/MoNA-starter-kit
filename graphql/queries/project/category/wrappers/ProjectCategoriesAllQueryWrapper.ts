import {
  ProjectCategoriesAll,
  ProjectCategoriesAllVariables
} from 'database-api'

import { Query } from 'react-apollo'

/* interface IData extends ProjectCategoriesAll {} */

export default class AllProjectCategoriesQueryWrapper extends Query<
  ProjectCategoriesAll,
  ProjectCategoriesAllVariables
> {}
