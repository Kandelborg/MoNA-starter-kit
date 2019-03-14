import gql from 'graphql-tag'

const projectBySlug = gql`
  query ProjectBySlug($slug: String!) {
    projectBySlug(where: { slug: $slug }) {
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
`

export default projectBySlug
