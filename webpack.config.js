const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve('/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
