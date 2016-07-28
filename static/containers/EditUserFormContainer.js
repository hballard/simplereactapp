import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { toggleEditUserFormState, saveEditContact} from '../actions'
import UserForm from '../components/UserForm'

const EditUserForm = (props) => {
  const {
    handleEditContact,
    editUser,
    editUserModalState,
    toggleEditForm,
    url} = props
  return (
    <div>
      <Modal show={ editUserModalState } >
          <Modal.Header>
            <Modal.Title>Edit New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserForm {...props} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => toggleEditForm() }>Close</Button>
            <Button
              bsStyle="primary"
              onClick = { () => handleEditContact(url, editUser) }>Save changes</Button>
          </Modal.Footer>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    editUser: state.editUser,
    formName: 'editUser',
    editUserModalState: state.editUserModalState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleEditForm: () => {
      dispatch(toggleEditUserFormState())
    },
    handleEditContact: (url, editUser) => {
      dispatch(saveEditContact(url, editUser))
    }
  }
}

const EditUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(EditUserForm)

export default EditUserFormContainer
