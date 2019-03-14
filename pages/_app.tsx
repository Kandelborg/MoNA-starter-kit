import '@util/installMUIStyles'

import { appWithTranslation } from '@i18n'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import getPageContext, { IPageContext } from '@util/getPageContext'
import { NormalizedCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { Request } from 'express'
import withGA from 'next-ga'
import app, { Container } from 'next/app'
import Router from 'next/router'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../apollo/withApollo'

interface IAppProps {
  Component: any
  pageProps: any
  req: Request
  apolloClient: ApolloClient<NormalizedCache>
  apolloState: NormalizedCacheObject
  getDisableStylesGeneration: boolean
  router: any
}

@withGA('UA-XXXXXX', Router)
class App extends app<IAppProps> {
  private pageContext: IPageContext

  constructor(props: IAppProps) {
    super(props)
    this.pageContext = getPageContext()
  }

  public componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  public render() {
    const {
      Component,
      pageProps,
      getDisableStylesGeneration,
      apolloClient
    } = this.props

    return (
      <Container>
        {/* Wrap every page in Styles and Theme providers */}
        <StylesProvider
          disableGeneration={getDisableStylesGeneration}
          // @ts-ignore
          generateClassName={this.pageContext.generateClassName}
          sheetsRegistry={this.pageContext.sheetsRegistry}
          sheetsManager={this.pageContext.sheetsManager}>
          {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider theme={this.pageContext.theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Make sure body padding isn't changed unless specifically stated!
             * Also, keep the scroll-bar for consistency  */}
            <style jsx global>
              {`
                body {
                  padding: 0 !important;
                  overflow-y: scroll !important;
                }
                @font-face {
                  font-display: swap;
                }
                img.twemoji {
                  height: 1em;
                  width: 1em;
                  margin: 0.01em 0.05em -0.1em 0.01em;
                  vertical-align: -0.1em;
                  font-size: 1.3em;
                }
              `}
            </style>

            {/* ApolloProvider makes the apollo client available the React tree.
             *  It's available via 'react-apollo' GQL components, e.g <Query> & <Mutation>
             */}
            <ApolloProvider client={apolloClient}>
              <Component pageContext={this.pageContext} {...pageProps} />
            </ApolloProvider>
          </ThemeProvider>
        </StylesProvider>
      </Container>
    )
  }
}

export default withApollo(appWithTranslation(App))
