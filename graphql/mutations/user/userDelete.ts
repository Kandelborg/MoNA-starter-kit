import gql from 'graphql-tag'

const userDelete = gql`
  mutation UserDelete($where: UserWhereUniqueInput!) {
    userDelete(where: $where) {
      id
    }
  }
`

export default userDelete
