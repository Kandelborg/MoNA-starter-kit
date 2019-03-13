import { Router } from 'express'
import renderAndCache from './renderAndCache'

const routes: Array<{ pagePath: string; url: string }> = [
  {
    pagePath: 'account/myAccount',
    url: 'account'
  },
  {
    pagePath: 'about',
    url: 'about'
  },
  {
    pagePath: 'blog',
    url: 'blog'
  },
  {
    pagePath: 'blog/blogpage',
    url: 'blog/:slug'
  },
  {
    pagePath: 'entertainment',
    url: 'entertainment'
  },
  {
    pagePath: 'projects',
    url: 'projects'
  }
]

export function routing(dev: boolean, router: Router) {
  routes.forEach((route) => {
    // Enable routing without trailing slashes in dev mode
    // This is to avoid annoying messages about paths/pages not existing during dev
    if (dev) {
      router.get(`/${route.url}`, (req, res) =>
        renderAndCache(req, res, `/${route.pagePath}`, req.query)
      )
    }

    // Get route without trailing slash
    // Redirect to same route with trailing slash
    router.get(`/${route.url}`, (_req, res) =>
      res.redirect(301, `/${route.url}/`)
    )

    // Serve route with trailing slash
    router.get(`/${route.url}/`, (req, res) =>
      renderAndCache(req, res, `/${route.pagePath}`, req.query)
    )
  })

  // Always accept the default route 😁
  router.get('/', (req, res) => renderAndCache(req, res, '/index', req.query))
}
