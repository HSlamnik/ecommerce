import { makeStyles } from '@material-ui/core/styles';

const CheckoutItem = ({ cartItem: { imageUrl, price, name, quantity } }) => {
  const classes = useStyles();

  return (
    <div className={classes.checkoutItem}>
      <div className={classes.imageContainer}>
        <img alt="item" src={imageUrl} className={classes.img} />
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.quantity}>{quantity}</span>
      <span className={classes.price}>{price}</span>
      <div className={classes.removeButton}>&#10005;</div>
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
    paddingLeft: '20px',
  },

  removeButton: {
    paddingLeft: '12px',
    cursor: 'pointer',
  },
}));

export default CheckoutItem;
