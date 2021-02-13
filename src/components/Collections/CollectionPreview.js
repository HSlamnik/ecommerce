import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import CollectionItem from 'components/Collections/CollectionItem';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  const classes = useStyles();
  return (
    <div className={classes.collectionPreview}>
      <h1 className={classes.title} onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </h1>
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
      cursor: 'pointer',
    },
    preview: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };
});

export default withRouter(CollectionPreview);
