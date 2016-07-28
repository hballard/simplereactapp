/* @flow */
import axios from 'axios'
import {actions} from 'react-redux-form'
import camelize from 'camelize'
import snakeize from 'snakeize'

export const changeContact = (index: number) => {
    return {
        type: 'CHANGE_CONTACT',
        index
    }
}

export const getContacts = (url: string) => {
    return (dispatch) => axios.get(url)
        .then((response) => {
            dispatch({type: 'GET_CONTACTS', response})
            dispatch(actions.merge('editUser',
                camelize(response.data.objects[0])))
        })
}

export const toggleAddUserFormState = () => {
    return {
        type: 'TOGGLE_ADD_CONTACT'
    }
}

export const toggleEditUserFormState = () => {
    return {
        type: 'TOGGLE_EDIT_CONTACT'
    }
}

export const saveNewContact = (url, addUser) => {
    return (dispatch) => axios.post(url, snakeize(addUser))
        .then((response) => {
            dispatch({type: 'SAVE_NEW_CONTACT', response})
            dispatch(actions.merge('editUser',
                camelize(response.data)))
        })
}

export const saveEditContact = (url, editUser) => {
    return (dispatch) => axios.patch(
        `${url}/${editUser.id}`,
        snakeize(editUser))
        .then((response) => {
            dispatch({type: 'SAVE_EDIT_CONTACT', response})
        })
}
