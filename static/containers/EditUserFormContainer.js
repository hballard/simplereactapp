import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { toggleEditUserFormState } from '../actions'
import UserForm from '../components/UserForm'

const EditUserForm = (props) => {
  const {
    editUser,
    submitForm,
    editUserModalState,
    toggleEditForm,
  } = props
  return (
    <div>
      <Modal show={editUserModalState} >
        <Modal.Header>
          <Modal.Title>Edit New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm {...props} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => toggleEditForm()}>Close</Button>
          <Button
            bsStyle="primary"
            onClick={() => submitForm(editUser)}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

EditUserForm.propTypes = {
  editUser: React.PropTypes.object.isRequired,
  toggleEditForm: React.PropTypes.func.isRequired,
  submitForm: React.PropTypes.func.isRequired,
  editUserModalState: React.PropTypes.bool.isRequired,
}

const MUTATE_CONTACT_DETAIL = gql`
mutation MutateContactDetail ($input: EditContactInput!){
  editContact(input: $input) {
    ok
    clientMutationId
    contact {
      id
      firstName
      lastName
      jobTitle
      company
      phoneNumber
      email
      address1
      city
      state
      zipcode
      comments
      activeStatus
    }
  }
}
`
const EditUserFormWithData = graphql(MUTATE_CONTACT_DETAIL, {
  props: ({ mutate }) => ({
    submitForm: editUser => mutate({ variables: { input: editUser } }),
  }),
})(EditUserForm)

const mapStateToProps = state => ({
  editUser: state.editUser,
  formName: 'editUser',
  editUserModalState: state.editUserModalState,
})

const mapDispatchToProps = dispatch => ({
  toggleEditForm: () => {
    dispatch(toggleEditUserFormState())
  },
})

const EditUserFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserFormWithData)

export default EditUserFormContainer
