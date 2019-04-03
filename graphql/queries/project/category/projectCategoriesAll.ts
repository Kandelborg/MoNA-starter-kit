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
      image
      contents {
        id
        language {
          country
        }
        title
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
  }
`

export default projectCategoriesAll
