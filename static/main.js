import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App url='http://0.0.0.0:5000/api/contacts' />,
    document.getElementById('app'));
