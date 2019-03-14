import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { Request, Response } from 'express'

type TranslateFn = (lngString: string) => string

interface PageCtx {
  res: Response
  req: Request
  err: any
  apolloClient: ApolloClient<InMemoryCache>
  t: TranslateFn | undefined
}

/**
 * A React.FunctionComponent with getInitialProps
 */
declare interface StatelessPage<P = {}> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: PageCtx) => Promise<P>
}
