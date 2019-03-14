import gql from 'graphql-tag'

const projectById = gql`
  query ProjectById($id: ID!) {
    projectById(where: { id: $id }) {
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

export default projectById
