import gql from 'graphql-tag'

const projectById = gql`
  query ProjectById($id: ID!) {
    projectById(id: $id) {
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

export default projectById
