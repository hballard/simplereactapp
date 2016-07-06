/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import appStore from './reducers'

let store = createStore(
  appStore, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>,
  document.getElementById('app'))
