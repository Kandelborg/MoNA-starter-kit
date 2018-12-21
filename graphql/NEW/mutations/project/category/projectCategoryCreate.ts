import gql from 'graphql-tag';

const projectCategoryCreate = gql`
  mutation projectCategoryCreate(
    $projectCategory: ProjectCategoryCreateInput!
  ) {
    projectCategoryCreate(data: $projectCategory) {
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
    }
  }
`;

export default projectCategoryCreate;
