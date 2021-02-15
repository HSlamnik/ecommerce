import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Button from 'components/Button/Button';
import { addItem } from 'redux/Cart/CartActions';

const CollectionItem = ({ item, addItem }) => {
  const classes = useStyles();
  const { name, price, imageUrl } = item;

  return (
    <div className={classes.collectionItem}>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={classes.collectionFooter}>
        <div className={classes.name}>{name}</div>
        <div className={classes.price}>${price}</div>
      </div>
      <Button className={classes.customButton} inverted onClick={() => addItem(item)}>
        Add to Cart
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    collectionItem: {
      width: '22vw',
      display: 'flex',
      flexDirection: 'column',
      height: '350px',
      alignItems: 'center',
      position: 'relative',

      '&:hover': {
        '& $image': {
          opacity: '0.8',
        },

        '& $customButton': {
          opacity: '0.85',
          display: 'flex',
        },
      },

      '@media (max-width: 800px)': {
        width: '40vw',
        '&:hover': {
          '& $image': {
            opacity: 'unset',
          },

          '& $customButton': {
            opacity: 'unset',
          },
        },
      },
    },
    image: {
      width: '100%',
      height: '95%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginBottom: '5px',
    },
    collectionFooter: {
      width: '100%',
      height: '5%',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '18px',
    },
    name: {
      width: '90%',
      marginBottom: '15px',
    },
    price: {
      width: '10%',
    },

    customButton: {
      minWidth: '165px',
      width: '80%',
      height: '50px',
      letterSpacing: '0.5',
      lineHeight: '50px',
      padding: '0 35px 0 35px',
      fontSize: '15px',
      backgroundColor: 'black',
      color: 'white',
      textTransform: 'uppercase',
      fontFamily: 'Open Sans Condensed',
      fontWeight: 'bolder',
      border: 'none',
      cursor: 'pointer',
      justifyContent: 'center',
      opacity: '0.7',
      position: 'absolute',
      top: '255px',
      display: 'none',

      '&:hover': {
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid black',
      },

      '@media (max-width: 800px)': {
        display: 'block',
        opacity: '0.9',
        minWidth: 'unset',
        padding: '0 10px',
      },
    },
  };
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
