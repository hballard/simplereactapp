import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import {
  modelReducer,
  formReducer,
} from 'react-redux-form'
import AppWithDataContainer from './containers/AppContainer'
import {
  activeItem,
  addUserModalState,
  editUserModalState,
  contactListEditToggle,
} from './reducers'

const API_URL = 'http://0.0.0.0:5000/graphql'

const networkInterface = createNetworkInterface({
  uri: API_URL,
  opts: {
    credentials: 'same-origin',
  },
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
  shouldBatch: true,
})

const appStore = combineReducers({
  activeItem,
  addUserModalState,
  editUserModalState,
  contactListEditToggle,
  addUser: modelReducer('addUser'),
  addUserForm: formReducer('addUser'),
  editUser: modelReducer('editUser'),
  editUserForm: formReducer('editUser'),
  apollo: client.reducer(),
})


const store = createStore(
  appStore,
  {},
  compose(
    applyMiddleware(thunk, client.middleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <AppWithDataContainer />
  </ApolloProvider>,
  document.getElementById('app'))

