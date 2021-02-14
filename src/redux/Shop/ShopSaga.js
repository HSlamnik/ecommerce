import { takeEvery, call, put } from 'redux-saga/effects';
import shopActionTypes from 'redux/Shop/ShopTypes';

import { firestore, convertCollectionsSnapshotToMap } from 'firebase/FirebaseUtils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from 'redux/Shop/ShopActions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
