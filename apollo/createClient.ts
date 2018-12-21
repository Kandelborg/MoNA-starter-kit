import { ApolloClient } from 'apollo-client';
import { from } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';

import { config } from '../settings';
import cache from './createCache';

const create = (initialState: any, { getToken }: any) => {
  const link = from([
    // Create Error linking
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map((/* { message, locations, path } */) => {
          // Placeholder
        });
      }
      if (networkError) {
        // Placeholder console.warn(`[Network error]: ${networkError}`);
      }
    }),
    // Log queries to console
    ...(!config.common.NODE && config.common.DEV ? [apolloLogger] : []),

    new HttpLink({
      credentials: 'same-origin',
      uri: !config.common.DEV
        ? config.common.API_DOMAIN
        : 'http://localhost:4000',
    }),
  ]);

  const authLink = setContext((_: any, { headers }: any) => {
    const token: object = getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    cache: cache.restore(initialState || {}),
    connectToDevTools: config.common.DEV,
    link: authLink.concat(link),
    queryDeduplication: true,
    ssrMode: Boolean(config.common.NODE), // Disables forceFetch on the server (so queries are only run once)
  });
};

export default create;
