import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import App from '../components/App'
import {
  toggleAddUserFormState,
  toggleEditUserFormState,
  initActiveItem,
} from '../actions'

const LIST_OF_CONTACTS = gql`
query ListOfContacts {
  allContacts {
    edges {
      node {
        id
        firstName
        lastName
      }
    }
  }
}
`
const AppWithData = graphql(LIST_OF_CONTACTS, {
  options: { pollInterval: 20000 },
  props: ({ data: { allContacts, loading } }) => ({
    contacts: allContacts,
    loading,
  }),
})(App)

const mapDispatchToProps = dispatch => ({
  toggleAddForm() { dispatch(toggleAddUserFormState()) },
  toggleEditForm() { dispatch(toggleEditUserFormState()) },
  initActiveItem(id) { dispatch(initActiveItem(id)) },
})

const AppWithDataContainer = connect(null, mapDispatchToProps)(AppWithData)

export default AppWithDataContainer
