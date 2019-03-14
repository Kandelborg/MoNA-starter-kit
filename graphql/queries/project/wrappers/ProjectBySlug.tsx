import * as React from 'react'

import { ProjectBySlugVariables } from 'database-api'
import { queries } from '../../../index'
import ProjectBySlugQueryWrapper from './ProjectBySlugWrapper'

/* export interface IProjectsAllProps {} */

class ProjectBySlugQuery extends React.PureComponent<ProjectBySlugVariables> {
  public render() {
    const { slug } = this.props

    return (
      <>
        <ProjectBySlugQueryWrapper
          fetchPolicy="cache-first"
          notifyOnNetworkStatusChange={true}
          query={queries.projectCategoryBySlug}
          variables={{
            slug
          }}>
          {(client) => {
            const { loading, error, data } = client

            if (error) return `Error! ${error.message}`

            if (loading) return 'Loading...'

            if (data && !loading) {
              const { projectBySlug } = data
              // console.info(projectsAll);

              return (
                <>
                  <p>{projectBySlug!.slug}</p>
                </>
              )
            }

            return null
          }}
        </ProjectBySlugQueryWrapper>
      </>
    )
  }
}

export default ProjectBySlugQuery
