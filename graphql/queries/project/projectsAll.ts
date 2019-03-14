import gql from 'graphql-tag'

const projectsAll = gql`
  query ProjectsAll(
    $orderBy: ProjectOrderByInput
    $first: Int
    $last: Int
    $skip: Int
    $after: String
  ) {
    projectsAll(
      orderBy: $orderBy
      first: $first
      last: $last
      skip: $skip
      after: $after
    ) {
      id
      contents {
        id
        language {
          country
        }
        title
        description
        tags
        metaTitle
        metaDescription
        isActive
      }
    }
  }
`

export default projectsAll
