export const activeItem = (state = null, action) => {
  switch (action.type) {
    case 'CONTACT_SELECT_ACTIVE':
      return action.id
    default:
      return state
  }
}

export const editUserModalState = (state = false, action) => {
  switch (action.type) {
    case 'EDIT_CONTACT_TOGGLE':
      return !state
    default:
      return state
  }
}

export const deleteConfirmationState = (state = false, action) => {
  switch (action.type) {
    case 'DELETE_CONFIRMATION_TOGGLE':
      return !state
    default:
      return state
  }
}

export const addUserModalState = (state = false, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_TOGGLE':
      return !state
    default:
      return state
  }
}

export const contactListEditState = (state = false, action) => {
  switch (action.type) {
    case 'CONTACT_LIST_EDIT_TOGGLE':
      return !state
    default:
      return state
  }
}
