import gql from 'graphql-tag';

const projectCategoryById = gql`
  query ProjectCategoryById($id: ID!) {
    projectCategoryById(where: { id: $id }) {
      id
      slug
      contents {
        language {
          country
        }
        name
        image
        imageAlt
        metaTitle
        metaDescription
      }
      projects {
        slug
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
  }
`;

export default projectCategoryById;
