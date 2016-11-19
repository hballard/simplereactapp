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
  contactListEditState,
  deleteConfirmationState,
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
})

const fieldChooserInitState = {
  jobTitle: true,
  company: true,
  phoneNumber: true,
  email: true,
  address1: true,
  comments: true,
}

const appStore = combineReducers({
  activeItem,
  addUserModalState,
  editUserModalState,
  contactListEditState,
  deleteConfirmationState,
  fieldChooser: modelReducer('fieldChooser', fieldChooserInitState),
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
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <AppWithDataContainer />
  </ApolloProvider>,
  document.getElementById('app'),
)

