import { makeStyles } from '@material-ui/core/styles';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  const classes = useStyles();

  return (
    <div key={id} className={classes.collectionItem}>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={classes.collectionFooter}>
        <div className={classes.name}>{name}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    collectionItem: {
      width: '22%',
      display: 'flex',
      flexDirection: 'column',
      height: '350px',
      alignItems: 'center',
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
  };
});

export default CollectionItem;
