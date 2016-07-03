import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

ReactDOM.render(<AppContainer url='http://0.0.0.0:5000/api/contacts' />,
    document.getElementById('app'));
