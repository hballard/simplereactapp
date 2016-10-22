import { connect } from 'react-redux'
import { changeContact, initFirstContact } from '../actions'
import ContactList from '../components/ContactList'
import { actions } from 'react-redux-form'

const mapStateToProps = (state, ownProps) => ({
  activeItem: state.activeItem,
  contacts: ownProps.contacts,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onContactClick: element => {
    dispatch(changeContact(element))
    //dispatch(actions.merge('editUser', element))
  },
  initActiveItem: id => dispatch(initFirstContact(id)),
})

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default ContactListContainer
