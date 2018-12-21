const withTypescript = require('@zeit/next-typescript');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const { DOMAIN } = require('./settings/jsSettings'); // webpack needs a trailing slash for output.publicPath

module.exports = withBundleAnalyzer(
  withTypescript({
    useFileSystemPublicRoutes: false,
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    poweredByHeader: false,

    webpack: (config, options) => {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          verbose: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          navigateFallback: `${DOMAIN}`,
          //  skipWaiting: true,
          cacheId: 'kandelborg-v1',
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?.*/,
            },
          ],
          staticFileGlobs: ['static/*.*', 'static/**/*.*'],
        }),
      );

      return config;
    },
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: `${__dirname}/generated/bundles/server.html`,
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: `${__dirname}/generated/bundles/client.html`,
      },
    },
  }),
);
