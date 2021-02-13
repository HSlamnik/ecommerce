import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from 'firebase/FirebaseUtils';

import CollectionsOverview from 'components/Collections/CollectionsOverview';
import Collection from 'components/Collections/Collection';
import { updateCollections } from 'redux/Shop/ShopActions';

const Shop = ({ match, updateCollections }) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });

    return () => {
      unsubscribeFromSnapshot();
    };
  });

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
