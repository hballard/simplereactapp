import { combineReducers } from 'redux';
import contacts from './contacts';

const contactApp = combineReducers({
  contacts
});

export default contactApp;
