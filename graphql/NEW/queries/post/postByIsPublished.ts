import gql from 'graphql-tag';

const postsByIsPublished = gql`
  query PostsByIsPublished($isPublished: Boolean) {
    postsByIsPublished(where: { isPublished: $isPublished }) {
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

export default postsByIsPublished;
