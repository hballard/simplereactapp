import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            modalState: false,
            activeItem: 0
        };
        this.changeContact = this.changeContact.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({modalState: !this.state.modalState});
    }

    changeContact(index) {
        this.setState({activeItem: index});
    }

    render() {
        return (
            <div id="main-container" className="container row">
                <ContactDetail
                    data={ this.props.data }
                    activeItem={ this.state.activeItem }/>
                <ContactList
                    changeContact={ this.changeContact }
                    data={ this.props.data }
                    activeItem={ this.state.activeItem }/>
                <Button bsStyle="primary" onClick={ this.toggleModal }>
                    Add Contact
                </Button>
                <AddConctactModal
                    data={ this.props.data }
                    modalState={ this.state.modalState }
                    toggleModal={ this.toggleModal }/>
            </div>
        );
    }
}

export const ContactList = (props) => {
    return (
        <div id="list-container"
             className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1 col-xs-12">
            <div className="page-header">
                <h3><strong>Contacts</strong></h3>
            </div>
            <ul className='list-unstyled'>
                { props.data.map((element, index) => {
                    return (
                        <li
                            className={ index === (props.activeItem) ? 'active-item' : null }
                            onClick={ props.changeContact.bind(this, index) }
                            key={ element.id }>
                            { element.last_name },
                            { element.first_name }
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
};

export const ContactDetail = (props) => {
    const contact = props.data[props.activeItem];
    return (
        <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-2 col-xs-12">
            <div className="page-header">
                <h3><strong>Contact Info</strong></h3>
            </div>
            <div>
                <h1>{ contact.first_name } { contact.last_name }</h1>
            </div>
            <div>
                <table className="table table-hover table-striped">
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

export const AddConctactModal = (props) => {
    return (
        <div className="static-modal">
            <Modal show={ props.modalState } onHide={ props.toggleModal }>
                <Modal.Header>
                    <Modal.Title>
                        Add New Contact
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Something goes here...
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ props.toggleModal }>
                        Close
                    </Button>
                    <Button bsStyle="primary">
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
