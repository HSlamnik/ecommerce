import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { clearItemFromCart, addItem, removeItem } from 'redux/Cart/CartActions';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const classes = useStyles();

  return (
    <div className={classes.checkoutItem}>
      <div className={classes.imageContainer}>
        <img alt="item" src={cartItem.imageUrl} className={classes.img} />
      </div>
      <span className={classes.name}>{cartItem.name}</span>
      <span className={classes.quantity}>
        <div className={classes.arrow} onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className={classes.value}>{cartItem.quantity}</span>
        <div className={classes.arrow} onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={classes.price}>{cartItem.price}</span>
      <div className={classes.removeButton} onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  checkoutItem: {
    width: '100%',
    display: 'flex',
    minHeight: '100px',
    borderBottom: '1px solid darkgrey',
    padding: '15px 0',
    fontSize: '20px',
    alignItems: 'center',
  },

  imageContainer: {
    width: '23%',
    paddingRight: '15px',
  },

  img: {
    width: '100%',
    height: '100%',
  },

  name: {
    width: '23%',
  },

  price: {
    width: '23%',
  },

  quantity: {
    width: '23%',
    display: 'flex',
  },

  removeButton: {
    paddingLeft: '12px',
    cursor: 'pointer',
  },

  arrow: {
    cursor: 'pointer',
  },
  value: {
    margin: '0 10px',
  },
}));

const mapStateToProps = (dispatch) => ({
  clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
});

export default connect(null, mapStateToProps)(CheckoutItem);
