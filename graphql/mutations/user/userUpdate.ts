import gql from 'graphql-tag'

const userUpdate = gql`
  mutation UserUpdate($user: UserUpdateInput!, $where: UserWhereInput!) {
    userUpdate(data: $user, where: $where) {
      id
      name
      email
      avatar {
        id
        publicId
        src
      }
    }
  }
`

export default userUpdate
