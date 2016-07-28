import { combineReducers } from 'redux'
import { modelReducer, formReducer } from 'react-redux-form'
import camelize from 'camelize'

export const editUserModalState = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT_CONTACT':
      return !state
    case 'SAVE_EDIT_CONTACT':
      return !state
    default:
      return state
  }
}

export const activeItem = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_CONTACT':
      return action.index
    case 'SAVE_NEW_CONTACT':
      return action.response.data.id - 1
    default:
      return state
  }
}

export const addUserModalState = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_CONTACT':
      return !state
    case 'SAVE_NEW_CONTACT':
      return !state
    default:
      return state
  }
}

export const data = (state = [], action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return camelize(action.response.data.objects)
    case 'SAVE_NEW_CONTACT':
      return [...state, camelize(action.response.data)]
    case 'SAVE_EDIT_CONTACT':
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
  //addUserForm: formReducer('addUser'),
  editUser: modelReducer('editUser'),
  //editUserForm: formReducer('editUser')
})

export default appStore

