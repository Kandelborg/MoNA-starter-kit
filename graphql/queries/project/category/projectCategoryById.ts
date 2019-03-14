import gql from 'graphql-tag'

const projectCategoryById = gql`
  query ProjectCategoryById($id: ID!) {
    projectCategoryById(where: { id: $id }) {
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
      projects {
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

export default projectCategoryById
