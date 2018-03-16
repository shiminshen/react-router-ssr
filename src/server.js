import express from 'express'
import routesMiddleware from './middlewares/routesMiddleware.js'

const app = express()

app.get('/api/:apiName', (req, res) =>
  res.send(`Content by API: /api/${req.params.apiName}`)
)

app.use(routesMiddleware)

export default app
