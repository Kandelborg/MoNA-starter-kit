import gql from 'graphql-tag'

const postCreate = gql`
  mutation PostCreate($data: PostCreateInput!) {
    postCreate(data: $data) {
      id
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
      slug
      imageSrc
      tags {
        contents {
          title
        }
        color
      }
      contents {
        language {
          country
        }
        title
        text
        imageAlt

        metaTitle
        metaDescription
      }
      isPublished
    }
  }
`

export default postCreate
