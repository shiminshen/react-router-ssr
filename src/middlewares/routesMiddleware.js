import React from 'react'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderToStaticMarkup, renderToNodeStream } from 'react-dom/server'
import routes from '../routes.js'
import createStore from '../configureStore.js'

const store = createStore()

export default function (req, res, next) {
  const branch = matchRoutes(routes, req.url)
  console.log(store.getState())
  if (branch.length) {
    renderToNodeStream(
      <html>
        <head />
        <body>
          <div id='app'>
            <Provider store={store}>
              <StaticRouter location={req.url} context={{}}>
                {renderRoutes(routes)}
              </StaticRouter>
            </Provider>
          </div>
        </body>
        <script src='/dist/main.js' />
      </html>
    ).pipe(res)
  } else {
    next()
  }
}
