import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeItem: null
        }
    }

    render() {
        return <div id="main-container" className="container row">
            <ContactDetail data={this.props.data} activeItem={this.state.activeItem}/>
            <ContactList data={this.props.data} activeItem={this.state.activeItem}/>
        </div>

    }
};

export const ContactList = (props) => {
    return <div
        id="list-container"
        className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1 col-xs-12">
        <div className="page-header"><h3><strong>Contacts</strong></h3></div>
        <ul className='list-unstyled'>
            {props.data.map((obj)=> {
                return <li
                    key={obj.id}>
                    {obj.first_name}, {obj.last_name}
                </li>
            })}
        </ul>
    </div>
};

export const ContactDetail = (props) => {
    return <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-2 col-xs-12">
        <div className="page-header"><h3><strong>Contact Info</strong></h3></div>
        <div>
            <h1>
                Heath Ballard
            </h1>
        </div>
        <div>
            <table className="table table-hover table-striped">
                <tbody>
                <tr>
                    <td className='text-right'><strong>Company</strong></td>
                    <td>Company</td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Job Title:</strong></td>
                    <td>Job Title</td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Phone Number:</strong></td>
                    <td>Phone Number</td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Email:</strong></td>
                    <td>Email</td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Address:</strong></td>
                    <td>Address
                        <br/>
                        City, State Zip
                    </td>
                </tr>
                <tr>
                    <td className='text-right'><strong>Comments:</strong></td>
                    <td>Comments</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
};
