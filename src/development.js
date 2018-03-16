import app from './server.js'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'
import webpackDevMiddleware from 'webpack-dev-middleware'

const PORT = 3000

app.use(
  webpackDevMiddleware(webpack(webpackConfig), {
    // noInfo: true, // prevent webpack to show most logs
    stats: { colors: true },
    publicPath: webpackConfig.output.publicPath
  })
)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
