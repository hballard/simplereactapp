
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

export const activeItem = (state = null, action) => {
  switch (action.type) {
    case 'CONTACT_SELECT_ACTIVE':
      return action.id
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
