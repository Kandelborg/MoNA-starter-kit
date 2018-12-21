import express from 'express';
import next from 'next';

import nextTypescript from '@zeit/next-typescript';

import renderAndCache from './renderAndCache';
import { sitemapSWAndRobots } from './sitemapSWAndRobots';

import { config } from '../settings';

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const app = next({
  dev: config.common.DEV,
  conf: nextTypescript({
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    poweredByHeader: false,
    useFileSystemPublicRoutes: true,
    webpack: (conf: any, options: any) => {
      if (options.isServer) {
        conf.plugins.push(
          new ForkTsCheckerWebpackPlugin({
            tsconfig: 'tsconfig.json',
            colors: true,
          }),
        );
      }

      return conf;
    },
  }),
});
const handle = app.getRequestHandler();

const server = express();
const router = express.Router({
  caseSensitive: true,
  strict: true,
});

server.use(router);

(async () => {
  try {
    await app.prepare();

    server.set('strict routing', true);
    server.set('case sensitive routing', true);

    // Get all the static & next specific files
    server.get(/^\/(?!_next|static).*$/, (req, res) => handle(req, res));

    /* Init Sitemap, Service Worker & robots.txt support */
    sitemapSWAndRobots({ router, app });

    /* Declare routes */
    router.get('/projects', (_req, res) => res.redirect(301, '/projects/'));

    router.get('/projects/', (req, res) =>
      renderAndCache(req, res, '/projects', req.query),
    );

    router.get('/entertainment', (_req, res) => res.redirect(301, '/entertainment/'));

    router.get('/entertainment/', (req, res) =>
      renderAndCache(req, res, '/entertainment', req.query),
    );

    router.get('/blog', (_req, res) => res.redirect(301, '/blog/'));

    router.get('/blog/', (req, res) => renderAndCache(req, res, '/blog', req.query));

    router.get('/', (req, res) => renderAndCache(req, res, '/index', req.query));

    router.get('*', (req, res) => handle(req, res));

    /* Start the server! */
    await server.listen(config.common.PORT, (err: Error) => {
      if (err) {
        return err;
      }
      return;
    });
    // tslint:disable-next-line:no-console
    console.info(
      `> Frontend app listening on http://localhost:${config.common.PORT} (in ${
        config.common.DEV ? 'dev' : 'production'
      } mode)`,
    );
  } catch (err) {
    throw err;
  }
})();

export default app;
