import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'

export const checkLoggedIn = (apolloClient: ApolloClient<InMemoryCache>) =>
  apolloClient.query({
    fetchPolicy: 'cache-first',

    query: gql`
      query GetUser {
        me {
          #    avatar {
          #      id
          #      publicId
          #      src
          #    }
          email
          id
          role
          name
        }
      }
    `
  })
