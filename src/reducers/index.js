import {combineReducers} from 'redux';
import contacts from './contacts';
import user from './user';
import activeUserId from './activeUserId';
import messages from './messages'

export default combineReducers({
  contacts,
  user,
  activeUserId,
  messages
})
