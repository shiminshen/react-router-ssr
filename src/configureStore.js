import { createStore, applyMiddleware } from 'redux'
import reducers from './components/Home/homeReducer.js'
import thunk from 'redux-thunk'

export default initialState =>
  createStore(reducers, initialState, applyMiddleware(thunk))
