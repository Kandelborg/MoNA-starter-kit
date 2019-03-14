import gql from 'graphql-tag'

const postUpdate = gql`
  mutation PostUpdate($data: PostUpdateInput!, $where: PostWhereUniqueInput!) {
    postUpdate(data: $data, where: $where) {
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
      isPublished
    }
  }
`

export default postUpdate
