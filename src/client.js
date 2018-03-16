import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from './routes.js'

import React, { Component } from 'react'

class App extends Component {
  render () {
    console.log(this.props)
    return (
      <Provider store={{}}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
