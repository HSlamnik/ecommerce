import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeStyles } from '@material-ui/core/styles';

import CollectionPreview from 'components/Collections/CollectionPreview';

import { selectCollectionsForPreview } from 'redux/Shop/ShopSelectors';

const CollectionsOverview = ({ collections }) => {
  const classes = useStyles();
  return (
    <div className={classes.ovewview}>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    ovewview: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
});

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
