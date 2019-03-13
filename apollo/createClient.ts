import { config } from '@util/settings'
import { ApolloClient } from 'apollo-client'
import { from } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import apolloLogger from 'apollo-link-logger'
import cache from './createCache'

const link = from([
  // Create Error linking
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map((/* { message, locations, path } */) => {
        // Placeholder
      })
    }
    if (networkError) {
      // Placeholder console.warn(`[Network error]: ${networkError}`);
    }
  }),
  // Log queries to console
  ...(!config.common.NODE && config.common.DEV ? [apolloLogger] : []),

  new HttpLink({
    credentials: 'include',
    uri: !config.common.DEV ? config.common.API_DOMAIN : 'http://localhost:4000'
  })
])

const authLink = (getToken: any) =>
  setContext((_: any, { headers }: any) => {
    const token: object = getToken()

    return {
      headers: {
        ...headers,
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': !config.common.DEV
          ? config.common.API_DOMAIN
          : 'http://localhost:4000',
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

const create = (initialState: any, { getToken }: any) =>
  new ApolloClient({
    cache: cache.restore(initialState || {}),
    connectToDevTools: config.common.DEV,
    link: authLink(getToken).concat(link),

    queryDeduplication: true,
    ssrMode: Boolean(config.common.NODE) // Disables forceFetch on the server (so queries are only run once)
  })

export default create
