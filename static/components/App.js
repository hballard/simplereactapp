import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import sortBy from 'lodash/sortBy'
import LoadingScreen from './LoadingScreen'
import ContactDetailContainer from '../containers/ContactDetailContainer'
import ContactListContainer from '../containers/ContactListContainer'
import AddUserFormContainer from '../containers/AddUserFormContainer'
import EditUserFormContainer from '../containers/EditUserFormContainer'

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
          <ContactDetailContainer />
          <ContactListContainer contacts={sortedContacts} />
          <AddUserFormContainer />
          <EditUserFormContainer />
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.props.toggleAddForm}>
              Add Contact
            </Button>
            <Button bsStyle="primary" onClick={this.props.toggleEditForm}>
              Edit Contact
            </Button>
          </ButtonToolbar>
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
  toggleEditForm: React.PropTypes.func.isRequired,
}

export default App
