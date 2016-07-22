import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { toggleAddUserFormState} from '../actions'
import UserForm from '../components/UserForm'

const AddUserForm = (props) => {
  const {addUserFormState, toggleForm} = props
  return (
    <div>
      <Modal show={ addUserFormState } >
          <Modal.Header>
            <Modal.Title>Add New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserForm {...props} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => toggleForm() }>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    addUser: state.addUser,
    formName: 'addUser',
    addUserFormState: state.addUserFormState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleForm: () => {
      dispatch(toggleAddUserFormState())
    }
  }
}

const AddUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddUserForm)

export default AddUserFormContainer
