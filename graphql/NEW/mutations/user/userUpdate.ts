import gql from 'graphql-tag';

const userUpdate = gql`
  mutation UserUpdate(($user: UserUpdateInput!, $where: UserWhereInput!) {
    userUpdate((data: $user, where: $where!) {
      user {
        id
        name
        email
      }
    }
  }
`;

export default userUpdate;
