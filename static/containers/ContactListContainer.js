import React from 'react';
import { connect } from 'react-redux';
import { changeContact } from '../actions';
import ContactList from '../components/ContactList';

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
    data: state.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onContactClick: (index) => {
      dispatch(changeContact(index));
    }
  };
};

const ContactListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactListContainer;
