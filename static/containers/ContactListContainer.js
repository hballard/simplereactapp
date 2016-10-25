import { connect } from 'react-redux'
import { changeContact } from '../actions'
import ContactList from '../components/ContactList'
import { actions } from 'react-redux-form'

const mapStateToProps = (state, ownProps) => ({
  activeItem: state.activeItem,
  contacts: ownProps.contacts,
})

const mapDispatchToProps = dispatch => ({
  onContactClick(element) { dispatch(changeContact(element)) },
})

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default ContactListContainer
