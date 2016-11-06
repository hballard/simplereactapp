export const initActiveItem = id => ({
  type: 'CONTACT_SELECT_ACTIVE',
  id,
})

export const changeContact = element => ({
  type: 'CONTACT_SELECT_ACTIVE',
  id: element.node.id,
})

export const toggleAddUserFormState = () => ({
  type: 'ADD_CONTACT_TOGGLE',
})

export const toggleEditUserFormState = () => ({
  type: 'EDIT_CONTACT_TOGGLE',
})

export const toggleContactListEditState = () => ({
  type: 'CONTACT_LIST_EDIT_TOGGLE',
})

export const toggleDeleteConfBoxState = () => ({
  type: 'DELETE_CONFIRMATION_TOGGLE',
})

