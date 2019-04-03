import gql from 'graphql-tag'

const projectCategoryUpdate = gql`
  mutation ProjectCategoryUpdate(
    $projectCategory: ProjectCategoryUpdateInput!
    $where: ProjectCategoryWhereUniqueInput!
  ) {
    projectCategoryUpdate(data: $projectCategory, where: $where) {
      id
      slug
      image
      contents {
        language {
          country
        }
        title
        imageAlt
        metaTitle
        metaDescription
      }
    }
  }
`

export default projectCategoryUpdate
