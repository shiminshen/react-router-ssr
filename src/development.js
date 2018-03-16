import app from './server.js'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const PORT = 3000

const webpackCompiler = webpack(webpackConfig)
app.use(
  webpackDevMiddleware(webpackCompiler, {
    // noInfo: true, // prevent webpack to show most logs
    stats: { colors: true },
    publicPath: webpackConfig.output.publicPath
  })
)

// not working
// app.use(webpackHotMiddleware(webpackCompiler))

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
