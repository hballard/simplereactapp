import React from 'react';
import ContactDetail from './ContactDetail';
import LoadingScreen from './LoadingScreen';
import ContactList from './ContactList';

const App = (props) => {
  if (!props.data) {
    return <LoadingScreen />;
  } else {
    return (
      <div id='main-container' className='container row'>
        <ContactDetail data={ props.data[props.activeItem] }/>
        <ContactList
          changeContact={ props.changeContact }
          data={ props.data }
          activeItem={ props.activeItem }/>
      </div>
    );
  }
};

export default App;
