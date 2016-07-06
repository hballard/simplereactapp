/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { changeContact, getContacts } from '../actions'
import App from '../components/App'

class ContactApp extends React.Component {

  componentDidMount() {
    this.props.getContacts()
  }

  render() {
    return <App data={ this.props.data } />
  }
}

const mapStateToProps = (state) => {
  return {data: state.data}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getContacts: () => {
      dispatch(getContacts('http://0.0.0.0:5000/api/contacts'))
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(ContactApp)

export default AppContainer
