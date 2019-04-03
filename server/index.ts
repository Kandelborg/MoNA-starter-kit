import express from 'express'
import next from 'next'

import { config } from '../util/settings'

import nextI18NextMiddleware from 'next-i18next/middleware'
import nextI18n from '../i18n'

import { routing } from './routing'
import { sitemapSWAndRobots } from './sitemapSWAndRobots'

const dev = config.common.DEV

const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()
const router = express.Router({
  caseSensitive: true,
  strict: true
})

server.use(router)
;(async () => {
  await app.prepare()

  server.set('strict routing', true)
  server.set('case sensitive routing', true)

  // Get all the static & next specific files
  server.get(/^\/(?!_next|static).*$/, (req, res) => handle(req, res))

  /* Init Sitemap, Service Worker & robots.txt support */
  sitemapSWAndRobots({ router, app })

  /* Declare routes */
  await routing(dev, router)

  server.use(nextI18NextMiddleware(nextI18n))
  router.get('*', (req, res) => handle(req, res))
  /* Start the server! */
  await server.listen(config.common.PORT, (err: Error) => {
    if (err) {
      return err
    }

    return
  })
  // tslint:disable-next-line:no-console
  console.info(
    `> Frontend app listening on http://localhost:${config.common.PORT} (in ${
      config.common.DEV ? 'dev' : 'production'
    } mode)`
  )
})()

export default app
