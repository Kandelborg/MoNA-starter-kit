import gql from 'graphql-tag';

const projectCategoriesAll = gql`
  query ProjectCategoriesAll {
    projectCategoriesAll {
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

export default projectCategoriesAll;
