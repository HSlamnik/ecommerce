import {userActionTypes} from 'redux/User/UserTypes';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
