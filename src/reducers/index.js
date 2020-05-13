import {combineReducers} from 'redux';
import contacts from './contacts';
import user from './user';

export default combineReducers({
  contacts,
  user
})
