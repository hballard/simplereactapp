import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { appStore, client } from './reducers'
import { ApolloProvider } from 'react-apollo'

const API_URL = 'http://0.0.0.0:5000/api/contacts'

let store = createStore(
  appStore, compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <AppContainer url={API_URL} />
  </ApolloProvider>,
  document.getElementById('app'))
