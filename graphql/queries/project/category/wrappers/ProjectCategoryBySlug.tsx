import * as React from 'react'

import { ProjectCategoryBySlugVariables } from 'database-api'
import { queries } from '../../../../index'
import ProjectCategoryBySlugQueryWrapper from './ProjectCategoryBySlugWrapper'

/* export interface IProjectsAllProps {} */

class ProjectCategoryBySlugQuery extends React.PureComponent<
  ProjectCategoryBySlugVariables
> {
  public render() {
    const { slug } = this.props

    return (
      <>
        <ProjectCategoryBySlugQueryWrapper
          fetchPolicy="cache-first"
          notifyOnNetworkStatusChange={true}
          query={queries.projectCategoryById}
          variables={{
            slug
          }}>
          {(client) => {
            const { loading, error, data } = client

            if (error) return `Error! ${error.message}`

            if (loading) return 'Loading...'

            if (data && !loading) {
              const { projectCategoryBySlug } = data
              // console.info(projectsAll);

              return (
                <>
                  <p>{projectCategoryBySlug!.id}</p>
                </>
              )
            }

            return null
          }}
        </ProjectCategoryBySlugQueryWrapper>
      </>
    )
  }
}

export default ProjectCategoryBySlugQuery
