import {SET_ACTIVE_ID, SET_TYPING_VALUE} from './constants/action-types';

export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_ID,
  payload: id
})

export const setTypingValue = (value) => ({
  type: SET_TYPING_VALUE,
  payload: value
})
