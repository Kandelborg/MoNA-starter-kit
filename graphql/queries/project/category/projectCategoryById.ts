import gql from 'graphql-tag'

const projectCategoryById = gql`
  query ProjectCategoryById($id: ID!) {
    projectCategoryById(id: $id) {
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
      projects {
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

export default projectCategoryById
