import express from 'express'
import routesMiddleware from './middlewares/routesMiddleware.js'

const PORT = 3000
const app = express()

app.get('/api/:apiName', (req, res) =>
  res.send(`Content by API: /api/${req.params.apiName}`)
)

app.use(routesMiddleware)
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
