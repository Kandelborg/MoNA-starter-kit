import gql from 'graphql-tag'

const projectCategoryCreate = gql`
  mutation projectCategoryCreate(
    $projectCategory: ProjectCategoryCreateInput!
  ) {
    projectCategoryCreate(data: $projectCategory) {
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

export default projectCategoryCreate
