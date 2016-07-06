/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import ContactDetail from '../components/ContactDetail'

const mapStateToProps = (state) => {
  return {data: state.data[state.activeItem]}
}

const ContactDetailContainer = connect(mapStateToProps)(ContactDetail)

export default ContactDetailContainer
