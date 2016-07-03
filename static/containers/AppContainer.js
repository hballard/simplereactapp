import React from 'react';
import axios from 'axios';
import App from '../components/App';

export default class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 0,
      data: null
    };
    this.changeContact = this.changeContact.bind(this);
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

  changeContact(index) {
    this.setState({activeItem: index});
  }

  render() {
    return <App {...this.state} changeContact={ this.changeContact }/>;
  }
}
