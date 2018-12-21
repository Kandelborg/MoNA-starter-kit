import gql from 'graphql-tag';

const postUpdate = gql`
  mutation PostUpdate($post: PostUpdateInput!, $where: PostWhereUniqueInput!) {
    postUpdate(data: $post, where: $where) {
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

export default postUpdate;
