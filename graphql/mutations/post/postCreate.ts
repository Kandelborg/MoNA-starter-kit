import gql from 'graphql-tag'

const postCreate = gql`
  mutation PostCreate($data: PostCreateInput!) {
    postCreate(data: $data) {
      id
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
      slug
      imageSrc
      contents {
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
      isPublished
    }
  }
`

export default postCreate
