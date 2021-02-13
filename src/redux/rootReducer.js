import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from 'redux/User/UserReducer';
import cartReducer from 'redux/Cart/CartReducer';
import shopReducer from 'redux/Shop/ShopReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
