import gql from 'graphql-tag'

const projectsAll = gql`
  query Projects(
    $orderBy: ProjectOrderByInput
    $first: Int
    $last: Int
    $skip: Int
    $after: String
  ) {
    projects(
      orderBy: $orderBy
      first: $first
      last: $last
      skip: $skip
      after: $after
    ) {
      id
      tags {
        contents {
          title
        }
        color
      }
      contents {
        id
        language {
          country
        }
        title
        text
        metaTitle
        metaDescription
        isActive
      }
    }
  }
`

export default projectsAll
