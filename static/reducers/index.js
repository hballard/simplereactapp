import { combineReducers } from 'redux'
import activeItem from './activeItem'
import data from './data'
import addUserFormState from './addUserFormState'
import { modelReducer, formReducer } from 'react-redux-form'

const appStore = combineReducers({
  activeItem,
  data,
  addUserFormState,
  addUser: modelReducer('addUser'),
  addUserForm: formReducer('addUser')
})

export default appStore

