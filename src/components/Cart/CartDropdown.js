import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/Button/Button';

const CartDropdown = () => {
  const classes = useStyles();
  return (
    <div className={classes.cartDropdown}>
      <div className={classes.cartItems} />
      <Button style={{ marginTop: 'auto' }}>GO TO CHECKOUT</Button>
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
}));

export default CartDropdown;
