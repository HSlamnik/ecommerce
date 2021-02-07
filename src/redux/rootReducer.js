import { combineReducers } from 'redux';
import userReducer from 'redux/User/UserReducer';

export default combineReducers({
  user: userReducer,
});
