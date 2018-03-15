import { matchRoutes, renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import React from 'react'
import { renderToString } from 'react-dom/server'
import routes from '../routes.js'

export default function (req, res, next) {
  const branch = matchRoutes(routes, req.url)
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {renderRoutes(routes)}
    </StaticRouter>
  )
  res.send(content)
  next()
}
