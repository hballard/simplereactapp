import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeItem: null
        };
        this.changeContact = this.changeContact.bind(this)
    }

    changeContact(contactIndex, event) {
        this.setState({activeItem: contactIndex - 1});
    }

    render() {
        return <div id="main-container" className="container row">
            <ContactDetail
                data={this.props.data}
                activeItem={this.state.activeItem}/>
            <ContactList
                changeContact={this.changeContact}
                data={this.props.data}
                activeItem={this.state.activeItem}/>
        </div>

    }
};

export const ContactList = (props) => {
    let contactIndex = 0;
    return <div
        id="list-container"
        className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1 col-xs-12">
        <div className="page-header"><h3><strong>Contacts</strong></h3></div>
        <ul className='list-unstyled'>
            {props.data.map((obj)=> {
                contactIndex++;
                return <li
                    onClick={props.changeContact.bind(this, contactIndex)}
                    key={obj.id}>
                    {obj.last_name}, {obj.first_name}
                </li>
            })}
        </ul>
    </div>
};

export const ContactDetail = (props) => {
    let contact;
    if (!props.activeItem) {
        contact = props.data[0];
    } else {
        contact = props.data[props.activeItem];
    }
    return <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-2 col-xs-12">
        <div className="page-header"><h3><strong>Contact Info</strong></h3></div>
        <div>
            <h1>
                {contact.first_name} {contact.last_name}
            </h1>
        </div>
        <div>
            <table className="table table-hover table-striped">
                <tbody>
                <tr>
                    <td className='text-right'><strong>Company</strong></td>
                    <td>{ contact.company }</td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Job Title:</strong></td>
                    <td>{ contact.job_title }</td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Phone Number:</strong></td>
                    <td>{ contact.phone_number }</td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Email:</strong></td>
                    <td>{ contact.email }</td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Address:</strong></td>
                    <td>{ contact.address}
                        <br/>
                        {contact.city}, {contact.state} {contact.zipcode}
                    </td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Comments:</strong></td>
                    <td>{contact.comments}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
};
