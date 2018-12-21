import { ProjectsAll } from 'database-api';

import { Query } from 'react-apollo';

/* interface IData extends ProjectsAll {} */

interface IVariables {
  first?: number;
  last: number;
  skip?: number;
  after?: number;
}

export default class AllProjectsQueryWrapper extends Query<ProjectsAll, IVariables> {}
