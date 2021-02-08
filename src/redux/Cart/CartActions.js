import { cartActionTypes } from 'redux/Cart/CartTypes';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
