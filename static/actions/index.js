import axios from 'axios'
import { actions } from 'react-redux-form'
import camelize from 'camelize'
import snakeize from 'snakeize'

export const changeContact = index => ({
  type: 'CONTACT_SELECT_ACTIVE',
  index,
})

export const toggleAddUserFormState = () => ({
  type: 'ADD_CONTACT_TOGGLE',
})

export const toggleEditUserFormState = () => ({
  type: 'EDIT_CONTACT_TOGGLE',
})

export const fetchContacts = (url) => (
  dispatch => axios.get(url)
  .then(response => {
    dispatch({ type: 'API_GET', response })
    dispatch(actions.merge('editUser', camelize(response.data.objects[0])))
  })
)

export const saveNewContact = (url, addUser) => (
  dispatch => axios.post(url, snakeize(addUser))
  .then(response => {
    dispatch({ type: 'NEW_CONTACT_SAVE', response })
    dispatch(actions.merge('editUser', camelize(response.data)))
    dispatch(actions.reset('addUser'))
  })
)

export const saveEditContact = (url, editUser) => (
  dispatch => axios.patch(`${url}/${editUser.id}`, snakeize(editUser))
  .then(response => dispatch({ type: 'EDIT_CONTACT_SAVE', response }))
)

