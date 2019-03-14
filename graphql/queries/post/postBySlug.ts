import gql from 'graphql-tag'

const postBySlug = gql`
  query PostBySlug($slug: String) {
    postBySlug(where: { slug: $slug }) {
      id
      createdAt
      updatedAt
      slug
      author {
        id
        name
        role
        avatar {
          id
          src
          publicId
        }
      }
      imageSrc
      isPublished
      contents {
        id
        language {
          country
        }
        title
        description
        imageAlt
        tags
        metaTitle
        metaDescription
      }
    }
  }
`

export default postBySlug
