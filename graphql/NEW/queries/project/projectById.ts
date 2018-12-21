import gql from 'graphql-tag';

const projectById = gql`
  query ProjectById($id: ID!) {
    projectById(where: { id: $id }) {
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

export default projectById;
