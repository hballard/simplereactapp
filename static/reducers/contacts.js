const contacts = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_CONTACT':
      return {
        activeItem: action.index
      };
    default:
      return state;
  };
};
