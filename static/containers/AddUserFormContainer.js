import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { toggleAddUserFormState, saveNewContact} from '../actions'
import UserForm from '../components/UserForm'

const AddUserForm = (props) => {
  const {
    handleSaveContact,
    addUser,
    addUserModalState,
    toggleAddForm,
    url} = props
  return (
    <div>
      <Modal show={ addUserModalState } >
          <Modal.Header>
            <Modal.Title>Add New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserForm {...props} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => toggleAddForm() }>Close</Button>
            <Button
              bsStyle="primary"
              onClick={ () => handleSaveContact(url, addUser) }>Save changes</Button>
          </Modal.Footer>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    addUser: state.addUser,
    formName: 'addUser',
    addUserModalState: state.addUserModalState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAddForm: () => {
      dispatch(toggleAddUserFormState())
    },
    handleSaveContact: (url, addUser) => {
      dispatch(saveNewContact(url, addUser))
    }
  }
}

const AddUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddUserForm)

export default AddUserFormContainer
