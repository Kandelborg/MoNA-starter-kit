import * as React from 'react';
import PROJECTS_ALL from './projectsAll/projectsAll';
import ProjectsAllQueryWrapper from './projectsAll/ProjectsAllQueryWrapper';

export interface IProjectsAllProps {}

class ProjectsAllQuery extends React.PureComponent<IProjectsAllProps> {
  public render() {
    return (
      <>
        <ProjectsAllQueryWrapper
          fetchPolicy="cache-first"
          notifyOnNetworkStatusChange={true}
          query={PROJECTS_ALL}
        >
          {(client) => {
            const { loading, error, data } = client;
            if (error) return `Error! ${error.message}`;

            if (loading) return 'Loading...';

            if (data && !loading) {
              const { projectsAll } = data;
              console.info(projectsAll);
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
