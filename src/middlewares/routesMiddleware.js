import React from 'react'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import routes from '../routes.js'

export default function (req, res, next) {
  const branch = matchRoutes(routes, req.url)
  const content = renderToString(
    <Provider store={{}}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )
  res.send(content)
  next()
}
