import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { actions } from 'react-redux-form'
import { toggleAddUserFormState } from '../actions'
import UserForm from '../components/UserForm'

const AddUserForm = (props) => {
  const {
    submitForm,
    addUser,
    addUserModalState,
    toggleAddForm,
    } = props
  return (
    <div>
      <Modal show={addUserModalState} >
        <Modal.Header>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm {...props} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => toggleAddForm()}>Close</Button>
          <Button
            bsStyle="primary"
            onClick={() => submitForm(addUser)}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

AddUserForm.propTypes = {
  addUser: React.PropTypes.object.isRequired,
  addUserModalState: React.PropTypes.bool.isRequired,
  submitForm: React.PropTypes.func.isRequired,
  toggleAddForm: React.PropTypes.func.isRequired,
}

const ADD_CONTACT = gql`
mutation addContact($input: AddContactInput!) {
  addContact(input: $input) {
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
      city
      state
      zipcode
      comments
      address1
    }
  }
}
`

const AddUserFormWithData = graphql(ADD_CONTACT, {
  props: ({ mutate, ownProps: { toggleAddForm, resetAddForm } }) => ({
    submitForm: addUser => mutate({
      variables: {
        input: {
          clientMutationId: Date.now(),
          ...addUser,
        },
      },
      updateQueries: {
        ListOfContacts: (prev, { mutationResult }) => {
          const oldContactList = prev.allContacts.edges
          const newContact = mutationResult.data.addContact.contact
          return {
            allContacts: {
              edges: [
                ...oldContactList,
                { node: newContact },
              ],
            },
          }
        },
      },
    }).then(
        toggleAddForm()
    ).then(
      resetAddForm()
    ),
  }),
})(AddUserForm)

const mapStateToProps = state => ({
  addUser: state.addUser,
  formName: 'addUser',
  addUserModalState: state.addUserModalState,
})

const mapDispatchToProps = dispatch => ({
  toggleAddForm: () => { dispatch(toggleAddUserFormState()) },
  resetAddForm: () => { dispatch(actions.reset('addUser')) },
})

const AddUserFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserFormWithData)

export default AddUserFormContainer
