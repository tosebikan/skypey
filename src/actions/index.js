import {SET_ACTIVE_ID} from './constants/action-types';

export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_ID,
  payload: id
})
