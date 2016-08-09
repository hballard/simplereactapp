import React from 'react'
import { connect } from 'react-redux'
import { fetchContacts, toggleAddUserFormState, toggleEditUserFormState } from '../actions'
import App from '../components/App'

class ContactApp extends React.Component {

  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    return <App {...this.props} />
  }
}

ContactApp.propTypes = { fetchContacts: React.PropTypes.func.isRequired }

const mapStateToProps = state => ({ data: state.data[state.activeItem] })

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchContacts: () => { dispatch(fetchContacts(ownProps.url)) },
  toggleAddForm: () => { dispatch(toggleAddUserFormState()) },
  toggleEditForm: () => { dispatch(toggleEditUserFormState()) },
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(ContactApp)

export default AppContainer
