import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ContactDetail from '../components/ContactDetail'

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
  options: ({ id }) => ({
    // forceFetch: true,
    variables: { id },
  }),
})(ContactDetail)

const mapStateToProps = ({ activeItem }) => ({
  id: activeItem,
})

const ContactDetailContainer = connect(mapStateToProps)(ContactDetailWithData)

export default ContactDetailContainer
