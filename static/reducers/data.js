const data = (state = null, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return action.response.data.objects
    default:
      return state
  }
}

export default data
