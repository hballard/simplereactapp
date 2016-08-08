import React from 'react'

const ContactList = ({ data, activeItem, onContactClick }) => (
  <div
    id="list-container"
    className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-3
    col-sm-offset-1 col-xs-12"
  >
    <div className="page-header">
      <h3><strong>Contacts</strong></h3>
    </div>
    <ul className="list-unstyled">
      {data.map((element, index) => (
        <li
          className={index === (activeItem) ? 'active-item' : null}
          onClick={() => onContactClick(index, element)}
          key={element.id}
        >
          {element.lastName}, {element.firstName}
        </li>
        )
      )}
    </ul>
  </div>
)


export default ContactList
