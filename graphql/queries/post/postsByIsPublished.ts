import gql from 'graphql-tag'

const postsByIsPublished = gql`
  query PostsByIsPublished(
    $isPublished: Boolean
    $orderBy: PostOrderByInput
    $first: Int
    $last: Int
    $skip: Int
    $after: String
  ) {
    postsByIsPublished(
      where: { isPublished: $isPublished }
      orderBy: $orderBy
      first: $first
      last: $last
      skip: $skip
      after: $after
    ) {
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

export default postsByIsPublished
