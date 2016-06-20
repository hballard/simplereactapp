import React from 'react';
import update from 'react-addons-update';
import axios from 'axios';
import validator from 'validator';
import {Modal, Button, ProgressBar, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            modalState: false,
            activeItem: 0,
            data: null,
            addContactForm: {
                firstName: {
                    value: ''
                },
                lastName: {
                    value: ''
                },
                jobTitle: {
                    value: ''
                },
                company: {
                    value: ''
                },
                phoneNumber: {
                    value: ''
                },
                email: {
                    value: ''
                },
                address1: {
                    value: ''
                },
                city: {
                    value: ''
                },
                state: {
                    value: ''
                },
                zipcode: {
                    value: ''
                },
                comments: {
                    value: ''
                }
            }
        };
        this.changeContact = this.changeContact.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        axios.get(this.props.url)
            .then((response) => {
                this.setState({data: response.data.objects});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    toggleModal() {
        this.setState({modalState: !this.state.modalState});
    }

    changeContact(index) {
        this.setState({activeItem: index});
    }

    validateString(form, fieldname, vtype, voptions) {
        const string = this.state[form][fieldname].value;
        if (validator[vtype](string, voptions)) {
            return null;
        } else {
            return 'error';
        }
    }

    handleChange(modalName){
        return (e) => {
            let newState = update(this.state, {
                [modalName]: {
                    [e.target.id]: {
                        value: {$set: e.target.value}
                    }
                }
            });
            this.setState(newState);
        };
    }

    render() {
        if (!this.state.data) {
            return (
                <div id='main-container' className='container row'>
                    <h2>Loading...</h2>
                    <ProgressBar active now={ 65 } />
                </div>
                );
        } else {
            return (
                <div id='main-container' className='container row'>
                    <ContactDetail
                        data={ this.state.data[this.state.activeItem] } />
                    <ContactList
                        changeContact={ this.changeContact }
                        data={ this.state.data }
                        activeItem={ this.state.activeItem } />
                    <Button bsStyle='primary' onClick={ this.toggleModal }>
                        Add Contact
                    </Button>
                    <AddContactModal
                        modalState={ this.state.modalState }
                        url={ this.props.url }
                        toggleModal={ this.toggleModal }>
                        <TextField
                            validationState={ this.validateString.bind(this,
                                'addContactForm',
                                'firstName',
                                'isLength',
                                {min: 0, max: 30})
                            }
                            controlId='firstName'
                            controlLabel='First Name'
                            type='text'
                            onChange={ this.handleChange('addContactForm')}
                            value={ this.state.addContactForm.firstName.value }
                            placholder='Enter your first name'
                            error={ this.state.addContactForm.firstName.error } />
                        <TextField
                            validationState={ this.validateString.bind(this,
                                'addContactForm',
                                'lastName',
                                'isLength',
                                {min: 0, max: 30})
                            }
                            controlId='lastName'
                            controlLabel='Last Name'
                            type='text'
                            value={ this.state.addContactForm.lastName.value }
                            onChange={ this.handleChange('addContactForm')}
                            placholder='Enter your last name'
                            error={ this.state.addContactForm.lastName.error } />
                    </AddContactModal>
                </div>
                );
        }
    }
}

export const ContactList = (props) => {
    return (
        <div id='list-container' className='col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1
                                                col-sm-3 col-sm-offset-1 col-xs-12'>
            <div className='page-header'>
                <h3><strong>Contacts</strong></h3>
            </div>
            <ul className='list-unstyled'>
                { props.data.map((element, index) => {
                        return (
                            <li
                                className={ index === (props.activeItem) ?
                                    'active-item' : null
                                }
                                onClick={ props.changeContact.bind(this, index) }
                                key={ element.id }>
                                { element.last_name }, { element.first_name }
                            </li>
                        );
                  }) }
            </ul>
        </div>
        );
};

export const ContactDetail = (props) => {
    const contact = props.data;
    return (
        <div className='col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1
                                            col-sm-6 col-sm-offset-2 col-xs-12'>
            <div className='page-header'>
                <h3><strong>Contact Info</strong></h3>
            </div>
            <div>
                <h1>{ contact.first_name } { contact.last_name }</h1>
            </div>
            <div>
                <table className='table table-hover table-striped'>
                    <tbody>
                        <tr>
                            <td className='text-right'>
                                <strong>Company</strong>
                            </td>
                            <td>
                                { contact.company }
                            </td>
                        </tr>
                        <tr>
                            <td className='text-right'>
                                <strong>Job Title:</strong>
                            </td>
                            <td>
                                { contact.job_title }
                            </td>
                        </tr>
                        <tr>
                            <td className='text-right'>
                                <strong>Phone Number:</strong>
                            </td>
                            <td>
                                { contact.phone_number }
                            </td>
                        </tr>
                        <tr>
                            <td className='text-right'>
                                <strong>Email:</strong>
                            </td>
                            <td>
                                { contact.email }
                            </td>
                        </tr>
                        <tr>
                            <td className='text-right'>
                                <strong>Address:</strong>
                            </td>
                            <td>
                                { contact.address }
                                <br/>
                                { contact.city },
                                { contact.state }
                                { contact.zipcode }
                            </td>
                        </tr>
                        <tr>
                            <td className='text-right'>
                                <strong>Comments:</strong>
                            </td>
                            <td>
                                { contact.comments }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
};

export const AddContactModal = (props) => {
    return (
        <div className='static-modal'>
            <Modal show={ props.modalState } onHide={ props.toggleModal }>
                <Modal.Header>
                    <Modal.Title>
                        Add New Contact
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        action={ props.url }
                        id='addContactModal'
                        method='POST'>
                        { props.children }
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ props.toggleModal }>
                        Close
                    </Button>
                    <Button
                        bsStyle='primary'
                        type='submit'
                        form='addContactModal'>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
};

export const TextField = (props) => {
    return (
        <FormGroup controlId={ props.controlId }
            validationState={ props.validationState() }>
            <ControlLabel>
                { props.controlLabel }
            </ControlLabel>
            <FormControl
                type={ props.type }
                value={ props.value }
                placeholder={ props.placeholder }
                onChange={ props.onChange } />
            <HelpBlock>
                { props.error }
            </HelpBlock>
        </FormGroup>
        );
};
