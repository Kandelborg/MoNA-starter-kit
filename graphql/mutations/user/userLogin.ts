import gql from 'graphql-tag'

const userLogin = gql`
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export default userLogin
