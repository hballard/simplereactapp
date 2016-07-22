/* @flow */
import axios from 'axios'

export const changeContact = (index:number) => {
  return {
    type: 'CHANGE_CONTACT',
    index
  }
}

export const getContacts = (url:string) => {
  return (dispatch) => axios.get(url)
    .then((response) => {
      dispatch({
        type: 'GET_CONTACTS',
        response
      })
    })
}

export const toggleAddUserFormState = () => {
  return {
    type: 'TOGGLE_ADD_CONTACT'
  }
}
