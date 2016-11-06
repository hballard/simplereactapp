import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  toggleDeleteConfBoxState,
} from '../actions'

class DeleteConfirmation extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.activeItem !== this.props.activeItem &&
      this.props.deleteConfirmationState
    ) {
      this.props.toggleDeleteConfBox()
    }
  }

  render() {
    return (
      <div>
        <Modal show={this.props.deleteConfirmationState} >
          <Modal.Header>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h4>Are you sure you want to delete this contact?</h4>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => this.props.toggleDeleteConfBox()}
            >
              Cancel
            </Button>
            <Button
              bsStyle="primary"
              onClick={() => this.props.deleteContact()}
            >
              Delete Contact
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

DeleteConfirmation.propTypes = {
  toggleDeleteConfBox: React.PropTypes.func.isRequired,
  deleteContact: React.PropTypes.func.isRequired,
  deleteConfirmationState: React.PropTypes.bool.isRequired,
  activeItem: React.PropTypes.string.isRequired,
}

const DELETE_CONTACT = gql`
mutation deleteContact($input: DeleteContactInput!) {
  deleteContact(input: $input) {
    ok
    clientMutationId
    contact {
      id
      firstName
      lastName
    }
  }
}
`
const DeleteConfirmationWithData = graphql(DELETE_CONTACT, {
  props: ({ ownProps: { activeItem }, mutate }) => ({
    deleteContact: () => mutate({
      variables: {
        input: {
          id: activeItem,
          clientMutationId: Date.now(),
        },
      },
      updateQueries: {
        ListOfContacts: (prev, { mutationResult }) => {
          const oldContactList = prev.allContacts.edges
          const deletedContact = mutationResult.data.deleteContact.contact
          return {
            allContacts: {
              edges: oldContactList.filter(
                item => item.node.id !== deletedContact.id
              ),
            },
          }
        },
      },
    }),
  }),
})(DeleteConfirmation)

const mapStateToProps = state => ({
  activeItem: state.activeItem,
  deleteConfirmationState: state.deleteConfirmationState,
})

const mapDispatchToProps = dispatch => ({
  toggleDeleteConfBox() { dispatch(toggleDeleteConfBoxState()) },
})

const DeleteConfirmationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteConfirmationWithData)

export default DeleteConfirmationContainer
