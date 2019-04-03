import gql from 'graphql-tag'

const postsByIsPublished = gql`
  query PostsByIsPublished(
    $isPublished: Boolean!
    $orderBy: PostOrderByInput
    $first: Int
    $last: Int
    $skip: Int
    $after: String
    $before: String
  ) {
    postsByIsPublished(
      isPublished: $isPublished
      orderBy: $orderBy
      before: $before
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
        #    avatar {
        #      id
        #      src
        #      publicId
        #    }
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

export default postsByIsPublished
