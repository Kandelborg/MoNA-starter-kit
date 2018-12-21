import gql from 'graphql-tag';

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
      contents {
        language {
          country
        }
        name
        text
        tags
        metaTitle
        metaDescription
        isActive
      }
    }
  }
`;

export default projectCreate;
