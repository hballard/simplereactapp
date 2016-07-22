const addUserFormState = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_CONTACT':
      return state.addUserFormState ? true : false
    default:
      return state
  }
}

export default addUserFormState

