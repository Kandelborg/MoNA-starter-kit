import gql from 'graphql-tag'

const projectCategoryCreate = gql`
  mutation projectCategoryCreate(
    $projectCategory: ProjectCategoryCreateInput!
  ) {
    projectCategoryCreate(data: $projectCategory) {
      id
      slug
      contents {
        language {
          country
        }
        title
        image
        imageAlt
        metaTitle
        metaDescription
      }
    }
  }
`

export default projectCategoryCreate
