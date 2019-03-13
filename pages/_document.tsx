import React, { ComponentType } from 'react'

import Document, {
  AnyPageProps,
  Main,
  NextScript,
  PageProps
} from 'next/document'
import flush from 'styled-jsx/server'

import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider'

import { IPageContext } from '@util/getPageContext'

import GlobalHead from '@components/Head/GlobalHead'

import { i18n } from '../i18n'

class CustomDocument extends Document<{
  pageContext: MuiThemeProviderProps | undefined
}> {
  public render() {
    const { pageContext } = this.props

    const theme =
      pageContext && typeof pageContext.theme === 'function'
        ? pageContext.theme
        : pageContext
        ? pageContext.theme
        : undefined

    // @ts-ignore
    const themeColor: string = theme ? theme.palette.primary.main : 'white'

    return (
      <html lang={i18n.options.defaultLanguage.slice(0, -3)} dir="ltr">
        <GlobalHead
          lng={i18n.options.defaultLanguage}
          themeColor={themeColor}
        />

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

interface IPagePropsWithPageContext extends AnyPageProps {
  pageContext: IPageContext
}

CustomDocument.getInitialProps = (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext: IPageContext | undefined
  const page = ctx.renderPage(
    (Component: ComponentType<IPagePropsWithPageContext>) => {
      const WrappedComponent: ComponentType<
        { pageContext: IPageContext } & PageProps
      > = (props) => {
        pageContext = props.pageContext

        return <Component {...props} />
      }

      return WrappedComponent
    }
  )

  // It might be undefined, e.g. after an error.
  let css: string | undefined

  if (pageContext) {
    css = (pageContext as IPageContext).sheetsRegistry.toString()
  }

  return {
    ...page,
    pageContext,
    styles: (
      // Styles fragment is rendered after the app and page rendering finish.
      <>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css! }}
        />
        {flush() || null}
      </>
    )
  }
}

export default CustomDocument
