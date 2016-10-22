import { connect } from 'react-redux'
import App from '../components/App'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  toggleAddUserFormState,
  toggleEditUserFormState,
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
  props: (props) => ({
    contacts: props.data.allContacts,
    loading: props.data.loading,
  }),
})(App)

const mapDispatchToProps = (dispatch) => ({
  toggleAddForm: () => dispatch(toggleAddUserFormState()),
  toggleEditForm: () => dispatch(toggleEditUserFormState()),
})

const AppWithDataContainer = connect(null, mapDispatchToProps)(AppWithData)

export default AppWithDataContainer
