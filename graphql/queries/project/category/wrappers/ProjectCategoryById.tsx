import * as React from 'react'

import { ProjectCategoryByIdVariables } from 'database-api'
import { queries } from '../../../../index'
import ProjectCategoryByIdQueryWrapper from './ProjectCategoryByIdWrapper'

/* export interface IProjectsAllProps {} */

class ProjectCategoryByIdQuery extends React.PureComponent<
  ProjectCategoryByIdVariables
> {
  public render() {
    const { id } = this.props

    return (
      <>
        <ProjectCategoryByIdQueryWrapper
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
              const { projectCategoryById } = data
              // console.info(projectsAll);

              return (
                <>
                  <p>{projectCategoryById!.id}</p>
                </>
              )
            }

            return null
          }}
        </ProjectCategoryByIdQueryWrapper>
      </>
    )
  }
}

export default ProjectCategoryByIdQuery
