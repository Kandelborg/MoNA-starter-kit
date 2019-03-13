// tslint:disable-next-line:import-name
import app from './index'

import { Request, Response } from 'express'
import lruCache from 'lru-cache'

// This is where we cache our rendered HTML pages
const ssrCache = new lruCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

function getCacheKey(req: Request) {
  return `${req.url}`
}
function getCacheQuery(req: Request) {
  return `${req.query}`
}

async function renderAndCache(
  req: Request,
  res: Response,
  pagePath: string,
  queryParams: Record<string, string | string[]>
) {
  const key = getCacheKey(req)
  const queryKey = getCacheQuery(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key) && ssrCache.has(queryKey)) {
    res.setHeader('x-cache', 'HIT')
    res.send({ ...ssrCache.get(key), ...ssrCache.get(queryKey) })

    return
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)

      return
    }

    // Let's cache this page
    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}

export default renderAndCache
