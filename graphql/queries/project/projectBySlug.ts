import gql from 'graphql-tag'

const projectBySlug = gql`
  query ProjectBySlug($slug: String!) {
    projectBySlug(slug: $slug) {
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
`

export default projectBySlug
