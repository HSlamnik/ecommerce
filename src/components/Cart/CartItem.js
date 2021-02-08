import { makeStyles } from '@material-ui/core/styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const classes = useStyles();

  return (
    <div className={classes.cartItem}>
      <img className={classes.img} src={imageUrl} alt="item" />
      <div className={classes.itemDetails}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  cartItem: {
    width: '100%',
    display: 'flex',
    height: '80px',
    marginBottom: '15px',
  },
  
  img: {
    width: '30%',
  },

  itemDetails: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '10px 20px',
  },

  name: {
    fontSize: '16px',
  },

  price: {},
}));

export default CartItem;
