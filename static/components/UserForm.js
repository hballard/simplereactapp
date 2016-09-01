import React from 'react'
import { Field, Form } from 'react-redux-form'
import { FormGroup, ControlLabel } from 'react-bootstrap'

const UserForm = ({ formName }) => (
  <Form model={formName}>
    <FormGroup>
      <ControlLabel>
        First Name
      </ControlLabel>
      <Field model={`${formName}.firstName`}>
        <input
          className="form-control"
          placeholder="Enter your first name"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        Last Name
      </ControlLabel>
      <Field model={`${formName}.lastName`}>
        <input
          className="form-control"
          placeholder="Enter your last name"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        Job Title
      </ControlLabel>
      <Field model={`${formName}.jobTitle`}>
        <input
          className="form-control"
          placeholder="Enter your job title"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        Company
      </ControlLabel>
      <Field model={`${formName}.company`}>
        <input
          className="form-control"
          placeholder="Enter your company"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        Phone Number
      </ControlLabel>
      <Field model={`${formName}.phoneNumber`}>
        <input
          className="form-control"
          placeholder="Enter your phone number"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        Email
      </ControlLabel>
      <Field model={`${formName}.email`}>
        <input
          className="form-control"
          placeholder="Enter your email"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        Address
      </ControlLabel>
      <Field model={`${formName}.address1`}>
        <input
          className="form-control"
          placeholder="Enter your address"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        City
      </ControlLabel>
      <Field model={`${formName}.city`}>
        <input
          className="form-control"
          placeholder="Enter your city"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        State
      </ControlLabel>
      <Field model={`${formName}.state`}>
        <input
          className="form-control"
          placeholder="Enter your state"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        Zipcode
      </ControlLabel>
      <Field model={`${formName}.zipcode`}>
        <input
          className="form-control"
          placeholder="Enter your zipcode"
          type="text"
        />
      </Field>
    </FormGroup>
    <FormGroup>
      <ControlLabel>
        Comments
      </ControlLabel>
      <Field model={`${formName}.comments`}>
        <textarea
          className="form-control"
          placeholder="Enter your comments"
        />
      </Field>
    </FormGroup>
  </Form>
)

UserForm.propTypes = { formName: React.PropTypes.string.isRequired }

export default UserForm
