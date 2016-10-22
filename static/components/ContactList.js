import React from 'react'

class ContactList extends React.Component {
  componentWillMount() {
    this.props.initActiveItem(this.props.contacts[0].node.id)
  }
  render() {
    return (
      <div
        id="list-container"
        className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-3
        col-sm-offset-1 col-xs-12"
      >
        <div className="page-header">
          <h3><strong>Contacts</strong></h3>
        </div>
        <ul className="list-unstyled">
          {this.props.contacts.map((element) => (
            <li
              className={element.node.id === (this.props.activeItem) ? 'active-item' : null}
              onClick={() => this.props.onContactClick(element)}
              key={element.node.id}
            >
              {element.node.lastName}, {element.node.firstName}
            </li>
            )
          )}
        </ul>
      </div>
    )
  }
}


ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  activeItem: React.PropTypes.string,
  onContactClick: React.PropTypes.func.isRequired,
  initActiveItem: React.PropTypes.func.isRequired,
}

export default ContactList
