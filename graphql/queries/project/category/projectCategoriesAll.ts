import gql from 'graphql-tag'

const projectCategoriesAll = gql`
  query ProjectCategoriesAll(
    $orderBy: ProjectCategoryOrderByInput
    $first: Int
    $last: Int
    $skip: Int
    $after: String
    $projectOrderBy: ProjectOrderByInput
    $projectFirst: Int
    $projectLast: Int
    $projectSkip: Int
    $projectAfter: String
  ) {
    projectCategoriesAll(
      orderBy: $orderBy
      first: $first
      last: $last
      skip: $skip
      after: $after
    ) {
      id
      slug
      contents {
        id
        language {
          country
        }
        title
        image
        imageAlt
        metaTitle
        metaDescription
      }
      projects(
        orderBy: $projectOrderBy
        first: $projectFirst
        last: $projectLast
        skip: $projectSkip
        after: $projectAfter
      ) {
        slug
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
  }
`

export default projectCategoriesAll
