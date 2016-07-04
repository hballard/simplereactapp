import axios from 'axios';

export const changeContact = (index) => {
  return {
    type: 'CHANGE_CONTACT',
    index
  };
};

export const getContacts = (url) => {
  return (dispatch) => axios.get(url)
    .then((response) => {
      dispatch({
        type: 'GET_CONTACTS',
        response
      });
    });
};
