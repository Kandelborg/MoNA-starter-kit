import gql from 'graphql-tag'

const postDelete = gql`
  mutation postDelete($where: PostWhereUniqueInput!) {
    postDelete(where: $where) {
      id
    }
  }
`

export default postDelete
