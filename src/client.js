import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from './routes.js'
import createStore from './configureStore.js'

import React, { Component } from 'react'

const store = createStore(window.__INITIAL_STATE__)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </Provider>
    )
  }
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}

ReactDOM.hydrate(<App />, document.getElementById('app'))
