import gql from 'graphql-tag';

const projectCategoryBySlug = gql`
  query ProjectCategoryBySlug($slug: String!) {
    projectCategoryBySlug(where: { slug: $slug }) {
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

export default projectCategoryBySlug;
