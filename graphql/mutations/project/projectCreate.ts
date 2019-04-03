import gql from 'graphql-tag'

const projectCreate = gql`
  mutation ProjectCreate($project: ProjectCreateInput!) {
    projectCreate(data: $project) {
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

export default projectCreate
