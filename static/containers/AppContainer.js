import React from 'react';
import { connect } from 'react-redux';
import { changeContact, getContacts } from '../actions';
import App from '../components/App';

class ContactApp extends React.Component {
  constructor() {
    super();
    this.selectContact = this.selectContact.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getContacts('http://0.0.0.0:5000/api/contacts'));
  }

  selectContact(index) {
    this.props.dispatch(changeContact(index));
  }

  render() {
    return <App {...this.props} changeContact={ this.selectContact }/>;
  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
    data: state.data
  };
};

const AppContainer = connect(
  mapStateToProps
)(ContactApp);

export default AppContainer;
