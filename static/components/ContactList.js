import React from 'react';

const ContactList = (props) => {
  return (
    <div id='list-container' className='col-lg-3 col-lg-offset-1 col-md-3
      col-md-offset-1 col-sm-3 col-sm-offset-1 col-xs-12'>
      <div className='page-header'>
        <h3><strong>Contacts</strong></h3>
      </div>
      <ul className='list-unstyled'>
        { props.data.map((element, index) => {
          return (
            <li
              className={ index === (props.activeItem) ? 'active-item' : null }
              onClick={ props.changeContact.bind(this, index) }
              key={ element.id }>
              { element.last_name }, { element.first_name }
            </li>
          );
        }) }
      </ul>
    </div>
  );
};

export default ContactList;
