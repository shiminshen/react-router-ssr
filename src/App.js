import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

class App extends Component {
  render () {
    return (
      <html>
        <head />
        <body>{renderRoutes(routes)}</body>
      </html>
    )
  }
}

export default App
