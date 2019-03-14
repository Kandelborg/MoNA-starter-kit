import gql from 'graphql-tag'

const userCreate = gql`
  mutation UserCreate($name: String!, $email: String!, $password: String!) {
    userCreate(name: $name, email: $email, password: $password) {
      user {
        id
        name
        email
      }
    }
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

export default userCreate
