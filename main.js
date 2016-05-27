import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import contacts from './contact_data.json'

ReactDOM.render(<App data={contacts} />, document.getElementById('app'));
