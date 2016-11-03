import React from 'react'

const ContactList = ({
  contacts,
  activeItem,
  contactListEdit,
  deleteContact,
  onContactClick,
  toggleEditForm,
  toggleEditBar,
}) => (
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
            onDoubleClick={() => toggleEditBar()}
            key={element.node.id}
          >
            {element.node.lastName}, {element.node.firstName}
          </li>
          {element.node.id === activeItem && contactListEdit ? (
            <span className="contact-list-edit">
              <i
                className="glyphicon glyphicon-trash"
                onClick={() => deleteContact(element)}
              />
              <i
                className="glyphicon glyphicon-edit"
                onClick={() => toggleEditForm()}
              />
            </span>
          ) : null}
        </div>
        )
      )}
    </ul>
  </div>
)

ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  activeItem: React.PropTypes.string,
  contactListEdit: React.PropTypes.bool.isRequired,
  onContactClick: React.PropTypes.func.isRequired,
  deleteContact: React.PropTypes.func.isRequired,
  toggleEditForm: React.PropTypes.func.isRequired,
  toggleEditBar: React.PropTypes.func.isRequired,
}

export default ContactList
