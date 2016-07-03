import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import contactApp from './reducers';

let store = createStore(
    contactApp,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={ store } >
        <AppContainer />
    </Provider>,
    document.getElementById('app'));
