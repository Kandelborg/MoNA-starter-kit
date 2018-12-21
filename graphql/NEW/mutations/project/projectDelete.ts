import gql from 'graphql-tag';

const projectDelete = gql`
  mutation ProjectDelete($where: ProjectWhereInput!) {
    projectDelete(where: $where) {
      id
    }
  }
`;

export default projectDelete;
