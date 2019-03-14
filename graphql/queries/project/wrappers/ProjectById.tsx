import * as React from 'react'

import { ProjectByIdVariables } from 'database-api'
import { queries } from '../../../index'
import ProjectByIdQueryWrapper from './ProjectByIdWrapper'

/* export interface IProjectsAllProps {} */

class ProjectByIdQuery extends React.PureComponent<ProjectByIdVariables> {
  public render() {
    const { id } = this.props

    return (
      <>
        <ProjectByIdQueryWrapper
          fetchPolicy="cache-first"
          notifyOnNetworkStatusChange={true}
          query={queries.projectCategoryById}
          variables={{
            id
          }}>
          {(client) => {
            const { loading, error, data } = client

            if (error) return `Error! ${error.message}`

            if (loading) return 'Loading...'

            if (data && !loading) {
              const { projectById } = data
              // console.info(projectsAll);

              return (
                <>
                  <p>{projectById!.id}</p>
                </>
              )
            }

            return null
          }}
        </ProjectByIdQueryWrapper>
      </>
    )
  }
}

export default ProjectByIdQuery
