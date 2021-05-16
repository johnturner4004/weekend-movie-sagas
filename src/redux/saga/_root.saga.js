import { takeEvery } from 'redux-saga/effects';
import fetchAllMovies from './fetchAllMovies.saga';
import getDetails from './getDetails.saga'

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_DETAILS', getDetails)
}

export default rootSaga;