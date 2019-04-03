import gql from 'graphql-tag'

const userUpdate = gql`
  mutation UserUpdate($user: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    userUpdate(data: $user, where: $where) {
      id
      name
      email
      profile {
        avatar {
          id
          publicId
          src
        }
      }
    }
  }
`

export default userUpdate
