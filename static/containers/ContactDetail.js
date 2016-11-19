import React from 'react'
import { actions, Control } from 'react-redux-form'
import {
  OverlayTrigger,
  Popover,
  ProgressBar,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


const popoverRight = (
  <Popover
    id="popover-positioned-right"
    title="Select Fields to Display"
  >
    <div className="list-group">
      <label>
        <Control.checkbox
          model="fieldChooser.jobTitle" />
        &nbsp;&nbsp;Job Title
      </label>
      <label>
        <Control.checkbox
          model="fieldChooser.company" />
        &nbsp;&nbsp;Company
      </label>
      <label>
        <Control.checkbox
          model="fieldChooser.phoneNumber" />
        &nbsp;&nbsp;Phone Number
      </label>
      <label>
        <Control.checkbox
          model="fieldChooser.email" />
        &nbsp;&nbsp;Email
      </label>
      <label>
        <Control.checkbox
          model="fieldChooser.address1" />
        &nbsp;&nbsp;Address
      </label>
      <label>
        <Control.checkbox
          model="fieldChooser.comments" />
        &nbsp;&nbsp;Comments
      </label>
    </div>
  </Popover>
)


class ContactDetail extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading) {
      this.props.dispatch(actions.merge('editUser', nextProps.data.contact))
    }
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div
          className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6
                    col-sm-offset-1 col-xs-12 detail-spinner"
        >
          <h4>Loading...</h4>
          <ProgressBar active now={100} />
        </div>
      )
    } else {
      const contact = this.props.data.contact
      const fieldChooser = this.props.fieldChooser
      return (
        <div
          className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6
          col-sm-offset-1 col-xs-12 detail-container"
        >
          <div className="page-header">
            <h3><strong>Contact Info</strong></h3>
            <span>
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popoverRight}
              >
                <a
                  className="glyphicon glyphicon-check field-toggle"
                />
              </OverlayTrigger>
            </span>
          </div>
          <div>
            <h1>{contact.firstName} {contact.lastName}</h1>
          </div>
          <div>
            <table className="table table-hover table-striped">
              <tbody>
                <tr className={ !fieldChooser.company ? 'hidden' : false }>
                  <td className="text-right">
                    <strong>Company</strong>
                  </td>
                  <td>
                    {contact.company}
                  </td>
                </tr>
                <tr className={ !fieldChooser.jobTitle ? 'hidden' : false }>
                  <td className="text-right">
                    <strong>Job Title:</strong>
                  </td>
                  <td>
                    {contact.jobTitle}
                  </td>
                </tr>
                <tr className={ !fieldChooser.phoneNumber ? 'hidden' : false }>
                  <td className="text-right">
                    <strong>Phone Number:</strong>
                  </td>
                  <td>
                    {contact.phoneNumber}
                  </td>
                </tr>
                <tr className={ !fieldChooser.email ? 'hidden' : false }>
                  <td className="text-right">
                    <strong>Email:</strong>
                  </td>
                  <td>
                    {contact.email}
                  </td>
                </tr>
                <tr className={ !fieldChooser.address1 ? 'hidden' : false }>
                  <td className="text-right">
                    <strong>Address:</strong>
                  </td>
                  <td>
                    {contact.address1}
                    <br />
                    {contact.city}{contact.city && contact.state ? ', ' : ' '}
                    {contact.state}{contact.zipcode ? ' ' : null}
                    {contact.zipcode}
                  </td>
                </tr>
                <tr className={ !fieldChooser.comments ? 'hidden' : false }>
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
    }
  }
}

ContactDetail.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  data: React.PropTypes.object,
}


const CONTACT_DETAIL_QUERY = gql`
query ContactDetailQuery($id: ID!) {
  contact:node(id: $id) {
    ... on ContactsQuery {
      id
      firstName
      lastName
      jobTitle
      company
      phoneNumber
      email
      address1
      city
      state
      zipcode
      comments
      activeStatus
    }
  }
}
`
const ContactDetailWithData = graphql(CONTACT_DETAIL_QUERY, {
  options: ({ id, fieldChooser }) => ({
    // forceFetch: true,
    variables: { id },
  }),
})(ContactDetail)

const mapStateToProps = ({ activeItem, fieldChooser }) => ({
  id: activeItem,
  fieldChooser,
})

const ContactDetailContainer = connect(mapStateToProps)(ContactDetailWithData)

export default ContactDetailContainer
