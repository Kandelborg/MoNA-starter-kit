import gql from 'graphql-tag'

const projectUpdate = gql`
  mutation ProjectUpdate(
    $project: ProjectUpdateInput!
    $where: ProjectWhereUniqueInput!
  ) {
    projectUpdate(data: $project, where: $where) {
      id
      slug
      album {
        images {
          publicId
          src
          contents {
            language {
              country
            }
            alt
          }
        }
      }
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
        metaTitle
        metaDescription
        isActive
      }
    }
  }
`

export default projectUpdate
