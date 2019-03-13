const withTypescript = require('@zeit/next-typescript')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const { DOMAIN } = require('./util/settings/jsSettings') // webpack needs a trailing slash for output.publicPath

module.exports = withBundleAnalyzer(
  withTypescript({
    useFileSystemPublicRoutes: false,
    distDir: '.next',
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    poweredByHeader: false,
    onDemandEntries: {
      // period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 60 * 1000,
      // number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 6
    },

    webpack: (config, options) => {
      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin())

      config.resolve.modules.unshift(__dirname)

      if (!options.dev) {
        config.plugins.push(
          new SWPrecacheWebpackPlugin({
            verbose: true,
            staticFileGlobsIgnorePatterns: [/\.next\//],
            navigateFallback: `${DOMAIN}`,
            //  skipWaiting: true,
            cacheId: 'mona-v1',
            runtimeCaching: [
              {
                handler: 'networkFirst',
                urlPattern: /^https?.*/
              }
            ],
            staticFileGlobs: ['static/*.*', 'static/**/*.*']
          })
        )
      }

      return config
    },
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: `${__dirname}/generated/bundles/server.html`
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: `${__dirname}/generated/bundles/client.html`
      }
    }
  })
)
