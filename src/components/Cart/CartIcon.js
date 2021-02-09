import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as ShoppingIcon } from 'images/ShoppingBag.svg';

import { toggleCartHidden } from 'redux/Cart/CartActions';
import { selectCartItemsCount } from 'redux/Cart/CartSelectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  const classes = useStyles();
  return (
    <div className={classes.cartIcon} onClick={toggleCartHidden}>
      <ShoppingIcon className={classes.shoppingIcon} />
      <span className={classes.itemCount}>{itemCount}</span>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  cartIcon: {
    width: '45px',
    height: '45px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  shoppingIcon: {
    width: '24px',
    height: '24px',
  },

  itemCount: {
    position: 'absolute',
    fontSize: '10px',
    fontWeight: 'bold',
    bottom: '12px',
  },
}));

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
