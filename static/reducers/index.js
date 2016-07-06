import { combineReducers } from 'redux'
import activeItem from './activeItem'
import data from './data'

const appStore = combineReducers({
  activeItem,
  data
})

export default appStore

