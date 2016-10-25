import React from 'react'
import { actions } from 'react-redux-form'

class ContactDetail extends React.Component {

  componentWillReceiveProps({ data: { contact } }) {
    this.props.dispatch(actions.merge('editUser', contact))
  }

  render() {
    if (!this.props.data.loading) {
      const contact = this.props.data.contact
      return (
        <div
          className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6
          col-sm-offset-2 col-xs-12"
        >
          <div className="page-header">
            <h3><strong>Contact Info</strong></h3>
          </div>
          <div>
            <h1>{contact.firstName} {contact.lastName}</h1>
          </div>
          <div>
            <table className="table table-hover table-striped">
              <tbody>
                <tr>
                  <td className="text-right">
                    <strong>Company</strong>
                  </td>
                  <td>
                    {contact.company}
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <strong>Job Title:</strong>
                  </td>
                  <td>
                    {contact.jobTitle}
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <strong>Phone Number:</strong>
                  </td>
                  <td>
                    {contact.phoneNumber}
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <strong>Email:</strong>
                  </td>
                  <td>
                    {contact.email}
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <strong>Address:</strong>
                  </td>
                  <td>
                    {contact.address}
                    <br />
                    {contact.city},
                    {contact.state}
                    {contact.zipcode}
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <strong>Comments:</strong>
                  </td>
                  <td>
                    {contact.comments}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

ContactDetail.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  data: React.PropTypes.objectOf(React.PropTypes.object),
}

export default ContactDetail
