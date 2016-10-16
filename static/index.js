import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { appStore, client } from './reducers'
import { ApolloProvider } from 'react-apollo'


let store = createStore(
  appStore, compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <AppContainer />
  </ApolloProvider>,
  document.getElementById('app'))

