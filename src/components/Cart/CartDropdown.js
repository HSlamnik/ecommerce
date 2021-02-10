import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/Button/Button';
import CartItem from 'components/Cart/CartItem';

import { selectCartItems } from 'redux/Cart/CartSelectors';
import { toggleCartHidden } from 'redux/Cart/CartActions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const classes = useStyles();

  return (
    <div className={classes.cartDropdown}>
      <div className={classes.cartItems}>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className={classes.emptyMessage}>Your cart is empty</span>
        )}
      </div>
      <Button
        style={{ marginTop: 'auto' }}
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  cartDropdown: {
    position: 'absolute',
    width: '240px',
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    border: '1px solid black',
    backgroundColor: 'white',
    top: '90px',
    right: '40px',
    zIndex: '5',
  },

  cartItems: {
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },

  emptyMessage: {
    fontSize: '18px',
    margin: '50px auto',
  },
}));

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
