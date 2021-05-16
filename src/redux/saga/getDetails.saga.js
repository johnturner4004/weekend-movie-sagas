import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getDetails( action ) {
  //post id to be used to get details from DB
  console.log(`********************************`, action,`********************************`);
  try {
    
    const response = yield axios.post('/api/details', action.payload)
    yield put({type: 'SET_DETAILS', payload: response.data});
  } catch (error) {
    console.log('Unable to get details', error);
    alert(`unable to get movie details`);
  }
}

export default getDetails;