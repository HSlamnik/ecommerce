import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from 'redux/Shop/ShopSelectors';
import withSpinner from 'components/withSpinner/withSpinner';
import Collection from 'components/Collections/Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionContainer = compose(connect(mapStateToProps), withSpinner)(Collection);

export default CollectionContainer;
