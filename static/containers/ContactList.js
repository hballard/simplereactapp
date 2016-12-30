import React from 'react'
import { connect } from 'react-redux'
import { changeContact,
  toggleEditUserFormState,
  toggleContactListEditState,
  toggleDeleteConfBoxState,
} from '../actions'


const ContactList = ({
  contacts,
  activeItem,
  contactListEditState,
  selectContact,
  toggleEditForm,
  toggleEditBar,
  toggleDeleteConfBox,
}) => (
  <div
    id="list-container"
    className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-4
    col-sm-offset-1 col-xs-12"
  >
    <div className="page-header">
      <h3><strong>Contacts</strong></h3>
    </div>
    <div className="list-group">
      {contacts.map(element => (
        <div
          id="contact-list"
          key={element.node.id}
        >
          <a
            className={element.node.id === activeItem ?
              'list-group-item active' : 'list-group-item'}
            onClick={() => selectContact(element)}
            onDoubleClick={() => toggleEditBar()}
            key={element.node.id}
          >
            {element.node.lastName}, {element.node.firstName}
          </a>
          <span
            className={
              element.node.id === activeItem && contactListEditState ?
              'contact-list-edit' :
              'contact-list-edit hidden'
            }
          >
            <i
              className="glyphicon glyphicon-trash"
              onClick={() => toggleDeleteConfBox()}
            />
            <i
              className="glyphicon glyphicon-edit"
              onClick={() => toggleEditForm()}
            />
          </span>
        </div>
      )
      )}
    </div>
  </div>
)

ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  activeItem: React.PropTypes.string,
  contactListEditState: React.PropTypes.bool.isRequired,
  selectContact: React.PropTypes.func.isRequired,
  toggleDeleteConfBox: React.PropTypes.func.isRequired,
  toggleEditForm: React.PropTypes.func.isRequired,
  toggleEditBar: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  activeItem: state.activeItem,
  contacts: ownProps.contacts,
  contactListEditState: state.contactListEditState,
})

const mapDispatchToProps = dispatch => ({
  selectContact(element) { dispatch(changeContact(element)) },
  toggleEditForm() { dispatch(toggleEditUserFormState()) },
  toggleEditBar() { dispatch(toggleContactListEditState()) },
  toggleDeleteConfBox() { dispatch(toggleDeleteConfBoxState()) },
})

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList)

export default ContactListContainer
