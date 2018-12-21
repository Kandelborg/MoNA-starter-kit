import gql from 'graphql-tag';

const postCreate = gql`
  mutation PostCreate($post: PostCreateInput!) {
    postCreate(data: $post) {
      id
      slug
      image
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
      isPublished
    }
  }
`;

export default postCreate;
