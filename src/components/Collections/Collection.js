import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import CollectionItem from 'components/Collections/CollectionItem';
import { selectCollection } from 'redux/Shop/ShopSelectors';

const Collection = ({ collection }) => {
  const classes = useStyles();

  return (
    <div className={classes.collection}>
      <div className={classes.title}>{collection.title}</div>
      <div className={classes.items}>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    collection: {
      display: 'flex',
      flexDirection: 'column',
    },

    title: {
      fontSize: '38px',
      margin: '0 auto 30px',
    },

    items: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridGap: '10px',

      '& > div': {
        marginBottom: '30px',
      },
    },

  };
});

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(Collection);
