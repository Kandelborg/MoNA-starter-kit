import '../util/installMUIStyles';

import * as React from 'react';

import app, { Container } from 'next/app';

import withGA from 'next-ga';
import Router from 'next/router';

import { NormalizedCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import withApollo from '../apollo/withApollo';

import { appWithTranslation } from '../i18n';

import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import getPageContext, { IPageContext } from '../util/getPageContext';

interface IAppProps {
  Component: any;
  pageProps: any;
  req: any;
  apolloClient: ApolloClient<NormalizedCache>;
  apolloState: NormalizedCacheObject;
  getDisableStylesGeneration: boolean;
  router: any;
}

@withGA('UA-108866514-2', Router)
class App extends app<IAppProps> {
  private pageContext: IPageContext;

  constructor(props: IAppProps) {
    super(props);
    this.pageContext = getPageContext();
  }

  public componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps, getDisableStylesGeneration, apolloClient } = this.props;

    return (
      <Container>
        {/* Wrap every page in Styles and Theme providers */}
        <StylesProvider
          disableGeneration={getDisableStylesGeneration}
          generateClassName={this.pageContext.generateClassName}
          sheetsRegistry={this.pageContext.sheetsRegistry}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider theme={this.pageContext.theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* ApolloProvider makes the apollo client available the React tree.
             *  It's available via 'react-apollo' GQL components, e.g <Query> & <Mutation>
             */}
            <ApolloProvider client={apolloClient}>
              <Component pageContext={this.pageContext} {...pageProps} />
            </ApolloProvider>
          </ThemeProvider>
        </StylesProvider>
      </Container>
    );
  }
}

export default withApollo(appWithTranslation(App));
