import { combineReducers } from 'redux'
import { modelReducer } from 'react-redux-form'
import camelize from 'camelize'

export const editUserModalState = (state = false, action) => {
  switch (action.type) {
    case 'EDIT_CONTACT_TOGGLE':
      return !state
    case 'EDIT_CONTACT_SAVE':
      return !state
    default:
      return state
  }
}

export const activeItem = (state = 0, action) => {
  switch (action.type) {
    case 'CONTACT_SELECT_ACTIVE':
      return action.index
    case 'NEW_CONTACT_SAVE':
      return action.response.data.id - 1
    default:
      return state
  }
}

export const addUserModalState = (state = false, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_TOGGLE':
      return !state
    case 'NEW_CONTACT_SAVE':
      return !state
    default:
      return state
  }
}

export const data = (state = [], action) => {
  switch (action.type) {
    case 'API_GET':
      return camelize(action.response.data.objects)
    case 'NEW_CONTACT_SAVE':
      return [...state, camelize(action.response.data)]
    case 'EDIT_CONTACT_SAVE':
      return state.map((element) => {
        if (element.id !== action.response.data.id) {
          return element
        } else {
          return camelize(action.response.data)
        }
      })
    default:
      return state
  }
}

const appStore = combineReducers({
  data,
  activeItem,
  addUserModalState,
  editUserModalState,
  addUser: modelReducer('addUser'),
  // addUserForm: formReducer('addUser'),
  editUser: modelReducer('editUser'),
  // editUserForm: formReducer('editUser')
})

export default appStore

