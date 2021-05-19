import axios from 'axios';
import { put } from 'redux-saga/effects';

function* newMovie(action) {
  console.log(action.payload);
  try {
    
    axios.post('/api/movie', action.payload);
    yield put ({type: 'FETCH_MOVIES'})
  } catch (error) {
    console.log('Sorry unable to add movie', error);
    
  }
}

export default newMovie;