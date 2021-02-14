import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from 'redux/Cart/CartSelectors';
import { makeStyles } from '@material-ui/core/styles';

import CheckoutItem from 'components/Checkout/CheckoutItem';
import StripeButton from 'components/StripeButton/StripeButton';

const Checkout = ({ cartItems, total }) => {
  const classes = useStyles();

  const headerBlocks = [
    { id: 1, title: 'Product' },
    { id: 2, title: 'Description' },
    { id: 3, title: 'Quantity' },
    { id: 4, title: 'Price' },
    { id: 5, title: 'Remove' },
  ];

  return (
    <div className={classes.checkout}>
      <div className={classes.header}>
        {headerBlocks.map((headerBlock) => (
          <div key={headerBlock.id} className={classes.headerBlock}>
            <span>{headerBlock.title}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={classes.total}>TOTAL: ${total}</div>
      <div className={classes.testWarning}>
        *Please use the following test Credit Card for payments*
        <br />
        4242 4242 4242 4242 - Expiry: 01/22 - CVV: 123
      </div>
      <div className={classes.stripe}>
        <StripeButton price={total} />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  checkout: {
    width: '55%',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto 0',
  },

  header: {
    width: '100%',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid darkgrey',
  },

  headerBlock: {
    width: '23%',
    textTransform: 'capitalize',

    '&:last-child': {
      width: '8%',
    },
  },

  total: {
    marginTop: '30px',
    marginLeft: 'auto',
    fontSize: '36px',
  },

  testWarning: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '24px',
    color: 'red',
  },
  stripe: {
    marginLeft: 'auto',
    marginTop: '50px',
  },
}));

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
