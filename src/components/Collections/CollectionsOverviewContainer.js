import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from 'redux/Shop/ShopSelectors';

import withSpinner from 'components/withSpinner/withSpinner';
import CollectionsOverview from 'components/Collections/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;
