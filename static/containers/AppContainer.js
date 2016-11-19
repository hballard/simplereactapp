import React from 'react'
import sortBy from 'lodash/sortBy'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from 'react-bootstrap'
import LoadingScreen from '../components/LoadingScreen'
import ContactDetailContainer from './ContactDetail'
import ContactListContainer from './ContactList'
import AddUserFormContainer from './AddUserForm'
import EditUserFormContainer from './EditUserForm'
import DeleteConfirmationContainer from './DeleteConfirmation'
import {
  toggleAddUserFormState,
  initActiveItem,
} from '../actions'

class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    const sortedContacts = sortBy(
      nextProps.contacts.edges,
      ['node.lastName', 'node.firstName']
    )
    this.props.initActiveItem(sortedContacts[0].node.id)
  }

  render() {
    if (this.props.loading) {
      return <LoadingScreen />
    } else {
      const sortedContacts = sortBy(
        this.props.contacts.edges,
        ['node.lastName', 'node.firstName']
      )
      return (
        <div id="main-container" className="container row">
          <div className="list-detail-container">
            <ContactDetailContainer />
            <ContactListContainer contacts={sortedContacts} />
          </div>
          <AddUserFormContainer />
          <EditUserFormContainer />
          <DeleteConfirmationContainer />
          <hr className="contact-app" />
          <Button
            className="add-contact"
            bsStyle="primary"
            onClick={this.props.toggleAddForm}
          >
            <span className="glyphicon glyphicon-plus" />
          </Button>
        </div>
      )
    }
  }
}

App.propTypes = {
  initActiveItem: React.PropTypes.func.isRequired,
  contacts: React.PropTypes.object,
  loading: React.PropTypes.bool.isRequired,
  toggleAddForm: React.PropTypes.func.isRequired,
}

const LIST_OF_CONTACTS = gql`
query ListOfContacts {
  allContacts {
    edges {
      node {
        id
        firstName
        lastName
      }
    }
  }
}
`
const AppWithData = graphql(LIST_OF_CONTACTS, {
  options: { pollInterval: 30000 },
  props: ({ data: { allContacts, loading } }) => ({
    contacts: allContacts,
    loading,
  }),
})(App)

const mapDispatchToProps = dispatch => ({
  toggleAddForm() { dispatch(toggleAddUserFormState()) },
  initActiveItem(id) { dispatch(initActiveItem(id)) },
})

const AppWithDataContainer = connect(null, mapDispatchToProps)(AppWithData)

export default AppWithDataContainer
