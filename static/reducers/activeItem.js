const activeItem = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_CONTACT':
      return action.index
    default:
      return state
  }
}

export default activeItem
