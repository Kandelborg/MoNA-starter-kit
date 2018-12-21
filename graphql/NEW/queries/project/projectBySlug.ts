import gql from 'graphql-tag';

const projectBySlug = gql`
  query ProjectBySlug($slug: String!) {
    projectById(where: { slug: $slug }) {
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

export default projectBySlug;
