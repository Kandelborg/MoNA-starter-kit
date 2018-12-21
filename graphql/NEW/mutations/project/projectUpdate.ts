import gql from 'graphql-tag';

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

export default projectUpdate;
