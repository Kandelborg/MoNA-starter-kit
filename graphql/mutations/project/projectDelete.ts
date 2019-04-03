import gql from 'graphql-tag'

const projectDelete = gql`
  mutation ProjectDelete($where: ProjectWhereUniqueInput!) {
    projectDelete(where: $where) {
      id
    }
  }
`

export default projectDelete
