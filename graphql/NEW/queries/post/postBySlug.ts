import gql from 'graphql-tag';

const postBySlug = gql`
  query PostBySlug($slug: String) {
    postBySlug(where: {slug: $slug}) {
      id
      slug
      author {
        name
      }
      image
      isPublished
      contents {
        language {
          country
        }
        name
        text
        imageAlt
        tags
        metaTitle
        metaDescription
      }
    }
  }
`;

export default postBySlug;
