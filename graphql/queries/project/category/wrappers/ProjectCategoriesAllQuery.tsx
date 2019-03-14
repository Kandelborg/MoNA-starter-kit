import * as React from 'react'

import { ProjectCategoriesAllVariables } from 'database-api'
import { queries } from '../../../../index'
import AllProjectCategoriesQueryWrapper from './ProjectCategoriesAllQueryWrapper'

/* export interface IProjectsAllProps {} */

class ProjectCategoriesAllQuery extends React.PureComponent<
  ProjectCategoriesAllVariables
> {
  public render() {
    return (
      <>
        <AllProjectCategoriesQueryWrapper
          fetchPolicy="cache-first"
          notifyOnNetworkStatusChange={true}
          query={queries.projectCategoriesAll}
          variables={{
            after: this.props.after,
            first: this.props.first,
            last: this.props.last,
            skip: this.props.skip
          }}>
          {(client) => {
            const { loading, error, data } = client

            if (error) return `Error! ${error.message}`

            if (loading) return 'Loading...'

            if (data && !loading) {
              const { projectCategoriesAll } = data
              // console.info(projectsAll);

              return (
                <>
                  {projectCategoriesAll.forEach((category) => {
                    if (category) {
                      return <p>{category.id}</p>
                    }

                    return <p>No available project categories</p>
                  })}
                </>
              )
            }

            return null
          }}
        </AllProjectCategoriesQueryWrapper>
      </>
    )
  }
}

export default ProjectCategoriesAllQuery
