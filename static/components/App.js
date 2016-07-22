import React from 'react'
import LoadingScreen from './LoadingScreen'
import ContactDetailContainer from '../containers/ContactDetailContainer'
import ContactListContainer from '../containers/ContactListContainer'
import AddUserFormContainer from '../containers/AddUserFormContainer'

const App = ({ data }) => {
  if (!data) {
    return <LoadingScreen />
  } else {
    return (
      <div id='main-container' className='container row'>
        <ContactDetailContainer />
        <ContactListContainer />
        <AddUserFormContainer />
      </div>
    )
  }
}

export default App
