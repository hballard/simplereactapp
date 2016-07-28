/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { getContacts, toggleAddUserFormState, toggleEditUserFormState } from '../actions'
import App from '../components/App'

class ContactApp extends React.Component {

  componentDidMount() {
    this.props.getContacts()
  }

  render() {
    return <App {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {data: state.data[state.activeItem]}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getContacts: () => {
      dispatch(getContacts(ownProps.url))
    },
    toggleAddForm: () => {
      dispatch(toggleAddUserFormState())
    },
    toggleEditForm: () => {
      dispatch(toggleEditUserFormState())
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(ContactApp)

export default AppContainer
