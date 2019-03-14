import { Head } from 'next/document'
import { FunctionComponent } from 'react'

import { config } from '@util/settings'

const { common } = config

interface IHeadProps {
  image?: string
  themeColor?: string
  lng?: string
}

const GlobalHead: FunctionComponent<IHeadProps> = ({
  image = '/static/icon.png',
  lng = 'en',
  themeColor = '#FA9800'
}) => {
  /* Define default props based on IHeadProps, in case they aren't given by parent component */
  const metaLng = lng!.slice(0, -3)

  return (
    <Head>
      <meta name="language" content={metaLng} key="page-language" />
      <link rel="canonical" href={common.DOMAIN.slice(0, -1)} />
      <link rel="manifest" href="/static/manifest.json" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1"
        key="viewport"
      />
      {/* Use minimum-scale=1 to enable GPU rasterization */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      {/* PWA primary color */}
      <meta name="theme-color" content={themeColor} key="theme-color" />

      <link rel="shortcut icon" type="image/ico" href="/static/icon.ico" />

      <link rel="icon" href="/static/icon.ico" sizes="16x16" type="image/ico" />

      {<meta name="image" content={image} />}

      {/* Set global styles */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        hrefLang={metaLng}
      />
      <script src="/static/twemoji.min.js" />
    </Head>
  )
}

GlobalHead.defaultProps = {
  image: '/static/icon.png',
  lng: 'en',
  themeColor: '#FA9800'
}

export default GlobalHead
