import { Express, Router } from 'express'
import { join } from 'path'

import sm from 'sitemap'

import { config } from '../util/settings'

function removeServerFromDirname() {
  return __dirname
    .replace(/\/(production-server\/server)(\/)?/, '/')
    .replace(/\/(server)(\/)?/, '/')
}

const sitemap = sm.createSitemap({
  cacheTime: 600000, // 600 sec - cache purge period
  hostname: `${config.common.DOMAIN}/`,
  urls: undefined,
  xmlNs: undefined,
  xslUrl: undefined
})

const sitemapSWAndRobots = ({
  router,
  app
}: {
  router: Router | Express
  app: any
}) => {
  sitemap.add({
    changefreq: 'daily',
    priority: 1,
    url: '/'
  })

  sitemap.add({
    changefreq: 'daily',
    priority: 1,
    url: '/blog/'
  })

  sitemap.add({
    changefreq: 'daily',
    priority: 1,
    url: '/entertainment/'
  })

  sitemap.add({
    changefreq: 'daily',
    priority: 1,
    url: '/projects/'
  })

  sitemap.add({
    changefreq: 'daily',
    priority: 1,
    url: '/about/'
  })

  // Note {} in next line is a placeholder filling the spot where the req parameter
  // would normally be listed (but isn't listed here since we aren't using it)
  router.get('/sitemap.xml', ({}, res) => {
    sitemap.toXML((err: any, xml: any) => {
      if (err) {
        res.status(500).end()

        return
      }
      res.header('Content-Type', 'application/xml')
      res.send(xml)
    })
  })

  router.get('/service-worker.js', (req, res) => {
    const filePath = config.common.DEV
      ? join(
          __dirname
            .replace(/\/(production-server\/server)(\/)?/, '/')
            .replace(/\/(server)(\/)?/, '/'),
          '.next',
          req.path
        )
      : join(removeServerFromDirname(), req.path)
    /*   console.log(filePath); */
    app.serveStatic(req, res, filePath)
  })

  router.get('/robots.txt', (req, res) => {
    const filePath = join(removeServerFromDirname(), 'static', req.path)
    /* console.log(filePath); */
    app.serveStatic(req, res, filePath)
  })
}

export { sitemapSWAndRobots }
