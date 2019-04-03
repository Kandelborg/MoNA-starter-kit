import gql from 'graphql-tag'

const postBySlug = gql`
  query PostBySlug($slug: String!) {
    postBySlug(slug: $slug) {
      id
      createdAt
      updatedAt
      slug
      author {
        id
        name
        role
        profile {
          avatar {
            id
            src
            publicId
          }
        }
      }
      imageSrc
      isPublished
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
        imageAlt

        metaTitle
        metaDescription
      }
    }
  }
`

export default postBySlug
