import { combineReducers } from 'redux';
import userReducer from 'redux/User/UserReducer';
import cartReducer from 'redux/Cart/CartReducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
