import { ProjectsAll, ProjectsAllVariables } from 'database-api'

import { Query } from 'react-apollo'

/* interface IData extends ProjectsAll {} */

export default class AllProjectsQueryWrapper extends Query<
  ProjectsAll,
  ProjectsAllVariables
> {}
