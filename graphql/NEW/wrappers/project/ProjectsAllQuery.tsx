import * as React from 'react';

import { queries } from '../../index';
import ProjectsAllQueryWrapper from './ProjectsAllQueryWrapper';

/* export interface IProjectsAllProps {} */

class ProjectsAllQuery extends React.PureComponent {
  public render() {
    return (
      <>
        <ProjectsAllQueryWrapper
          fetchPolicy="cache-first"
          notifyOnNetworkStatusChange={true}
          query={queries.projectsAll}
        >
          {(client) => {
            const { loading, error, data } = client;
            if (error) return `Error! ${error.message}`;

            if (loading) return 'Loading...';

            if (data && !loading) {
              const { projectsAll } = data;
              // console.info(projectsAll);
              return (
                <>
                  {projectsAll.forEach((project) => {
                    return <p>{project.id}</p>;
                  })}
                </>
              );
            }
            return null;
          }}
        </ProjectsAllQueryWrapper>
      </>
    );
  }
}

export default ProjectsAllQuery;
