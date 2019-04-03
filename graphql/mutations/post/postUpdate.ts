import gql from 'graphql-tag'

const postUpdate = gql`
  mutation PostUpdate($data: PostUpdateInput!, $where: PostWhereUniqueInput!) {
    postUpdate(data: $data, where: $where) {
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
      isPublished
    }
  }
`

export default postUpdate
