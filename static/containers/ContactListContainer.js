import { connect } from 'react-redux'
import ContactList from '../components/ContactList'
import { changeContact,
  toggleEditUserFormState,
  toggleContactListEditState,
  toggleDeleteConfBoxState,
} from '../actions'

const mapStateToProps = (state, ownProps) => ({
  activeItem: state.activeItem,
  contacts: ownProps.contacts,
  contactListEditState: state.contactListEditState,
})

const mapDispatchToProps = dispatch => ({
  selectContact(element) { dispatch(changeContact(element)) },
  toggleEditForm() { dispatch(toggleEditUserFormState()) },
  toggleEditBar() { dispatch(toggleContactListEditState()) },
  toggleDeleteConfBox() { dispatch(toggleDeleteConfBoxState()) },
})

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default ContactListContainer
