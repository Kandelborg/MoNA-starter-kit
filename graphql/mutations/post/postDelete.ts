import gql from 'graphql-tag'

const postDelete = gql`
  mutation postDelete($where: PostWhereInput!) {
    postDelete(where: $where) {
      id
    }
  }
`

export default postDelete
