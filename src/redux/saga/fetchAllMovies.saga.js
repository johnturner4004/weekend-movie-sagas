import axios from 'axios';
import {
  put
} from 'redux-saga/effects';

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get('/api/movie');
    console.log('get all:', movies.data);
    yield put({
      type: 'SET_MOVIES',
      payload: movies.data
    });

  } catch {
    console.log('get all error');
  }

}

export default fetchAllMovies