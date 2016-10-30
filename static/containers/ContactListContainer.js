import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ContactList from '../components/ContactList'
import { changeContact } from '../actions'

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
const ContactListWithData = graphql(DELETE_CONTACT, {
  props: ({ mutate }) => ({
    deleteContact: element => mutate({
      variables: {
        input: {
          id: element.node.id,
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
})(ContactList)

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
)(ContactListWithData)

export default ContactListContainer
