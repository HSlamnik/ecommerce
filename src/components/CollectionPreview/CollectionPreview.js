import { makeStyles } from '@material-ui/core/styles';

import CollectionItem from 'components/CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  const classes = useStyles();

  return (
    <div className={classes.collectionPreview}>
      <h1 className={classes.title}>{title.toUpperCase()}</h1>
      <div className={classes.preview}>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    collectionPreview: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '30px',
    },
    title: {
      fontSize: '28px',
      marginBottom: '25px',
    },
    preview: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };
});

export default CollectionPreview;
