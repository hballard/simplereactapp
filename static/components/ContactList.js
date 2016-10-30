import React from 'react'

const ContactList = ({ contacts, activeItem, deleteContact, onContactClick }) => (
  <div
    id="list-container"
    className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-4
    col-sm-offset-1 col-xs-12"
  >
    <div className="page-header">
      <h3><strong>Contacts</strong></h3>
    </div>
    <ul className="list-unstyled">
      {contacts.map(element => (
        <div
          className="li-container"
          key={element.node.id}
        >
          <li
            className={element.node.id === activeItem ? 'active-item' : null}
            onClick={() => onContactClick(element)}
            key={element.node.id}
          >
            {element.node.lastName}, {element.node.firstName}
          </li>
          <a>
            <span
              className={element.node.id === activeItem ? 'glyphicon glyphicon-trash' : null}
              onClick={() => deleteContact(element)}
            />
          </a>
        </div>
        )
      )}
    </ul>
  </div>
)

ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  activeItem: React.PropTypes.string,
  onContactClick: React.PropTypes.func.isRequired,
  deleteContact: React.PropTypes.func.isRequired,
}

export default ContactList
