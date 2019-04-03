import * as React from 'react'

import { ProjectsVariables } from 'database-api'
import { queries } from '../../../index'
import AllProjectsQueryWrapper from './ProjectsAllQueryWrapper'

/* export interface IProjectsAllProps {} */

class ProjectsAllQuery extends React.PureComponent<ProjectsVariables> {
  public render() {
    return (
      <>
        <AllProjectsQueryWrapper
          fetchPolicy="cache-first"
          notifyOnNetworkStatusChange={true}
          query={queries.projectsAll}
          variables={{
            ...this.props
          }}>
          {(client) => {
            const { loading, error, data } = client

            if (error) return `Error! ${error.message}`

            if (loading) return 'Loading...'

            if (data && !loading) {
              const { projects } = data
              // console.info(projectsAll);

              return (
                <>
                  {projects.forEach((project) => {
                    if (project) {
                      return <p>{project.id}</p>
                    }

                    return <p>No available projects.</p>
                  })}
                </>
              )
            }

            return null
          }}
        </AllProjectsQueryWrapper>
      </>
    )
  }
}

export default ProjectsAllQuery
