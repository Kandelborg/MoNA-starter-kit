import { Projects, ProjectsVariables } from 'database-api'

import { Query } from 'react-apollo'

/* interface IData extends ProjectsAll {} */

export default class AllProjectsQueryWrapper extends Query<
  Projects,
  ProjectsVariables
> {}
