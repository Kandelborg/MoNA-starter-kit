import gql from 'graphql-tag';

const me = gql`
  query Me {
    me {
      id
      role
      name
      email
    }
  }
`;

export default me;
