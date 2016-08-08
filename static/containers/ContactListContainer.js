/* @flow */
import { connect } from 'react-redux'
import { changeContact } from '../actions'
import ContactList from '../components/ContactList'
import { actions } from 'react-redux-form'

const mapStateToProps = (state) => ({
  activeItem: state.activeItem,
  data: state.data,
})

const mapDispatchToProps = (dispatch) => ({
  onContactClick: (index, element) => {
    dispatch(changeContact(index))
    dispatch(actions.merge('editUser', element))
  },
})

const ContactListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactList)

export default ContactListContainer
