import React from 'react'
//import { Button, ButtonToolbar } from 'react-bootstrap'
import LoadingScreen from './LoadingScreen'
import ContactDetailContainer from '../containers/ContactDetailContainer'
import ContactListContainer from '../containers/ContactListContainer'
//import AddUserFormContainer from '../containers/AddUserFormContainer'
//import EditUserFormContainer from '../containers/EditUserFormContainer'

const App = ({ contacts, loading, toggleAddForm, toggleEditForm }) => {
  if (!contacts) {
    return <LoadingScreen />
  } else {
    return (
      <div id="main-container" className="container row">
        <ContactListContainer contacts={contacts.edges} />
        <ContactDetailContainer />
      </div>
    )
  }
}

//const App = ({ contacts, loading, toggleAddForm, toggleEditForm }) => {
  //if (loading) {
    //return <LoadingScreen />
  //} else {
    //return (
      //<div id="main-container" className="container row">
        //<ContactDetailContainer />
        //<ContactListContainer contacts={contacts.edges} />
        //<AddUserFormContainer />
        //<EditUserFormContainer />
        //<ButtonToolbar>
          //<Button bsStyle="primary" onClick={toggleAddForm}>
            //Add Contact
          //</Button>
          //<Button bsStyle="primary" onClick={toggleEditForm}>
            //Edit Contact
          //</Button>
        //</ButtonToolbar>
      //</div>
    //)
  //}
//}

App.propTypes = {
  //contacts: React.PropTypes.object.isReqired,
  loading: React.PropTypes.bool.isRequired,
  toggleAddForm: React.PropTypes.func.isRequired,
  toggleEditForm: React.PropTypes.func.isRequired,
}

export default App
