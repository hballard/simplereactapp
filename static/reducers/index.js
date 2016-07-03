import { combineReducers } from 'redux';
import activeItem from './activeItem';
import data from './data';

const contactApp = combineReducers({
  activeItem,
  data
});

export default contactApp;
