import {SET_ACTIVE_ID} from '../actions/constants/action-types';

export default function activeUserId(state=null, action){
  switch(action.type){
    case SET_ACTIVE_ID:
    return action.payload
    default:
    return state;
  }
}
