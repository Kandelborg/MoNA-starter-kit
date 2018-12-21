// tslint:disable-next-line:no-implicit-dependencies
import { ProjectsAll } from 'database-api';
import { Query } from 'react-apollo';

// tslint:disable-next-line:no-empty-interface
interface IData extends ProjectsAll {}

interface IVariables {
  first?: number;
  last: number;
  skip?: number;
  after?: number;
}

export default class AllProjectsQueryWrapper extends Query<IData, IVariables> {}
