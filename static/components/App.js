import React from 'react'
import LoadingScreen from './LoadingScreen'
import ContactDetailContainer from '../containers/ContactDetailContainer'
import ContactListContainer from '../containers/ContactListContainer'
import AddUserFormContainer from '../containers/AddUserFormContainer'
import EditUserFormContainer from '../containers/EditUserFormContainer'
import { Button, ButtonToolbar } from 'react-bootstrap'

const App = ({data, url, toggleAddForm, toggleEditForm}) => {
  if (!data) {
    return <LoadingScreen />
  } else {
    return (
      <div id='main-container' className='container row'>
        <ContactDetailContainer />
        <ContactListContainer />
        <AddUserFormContainer url={url} />
        <EditUserFormContainer url={url} />
        <ButtonToolbar>
          <Button bsStyle='primary' onClick={toggleAddForm}>
            Add Contact
          </Button>
          <Button bsStyle='primary' onClick={toggleEditForm}>
            Edit Contact
          </Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default App
