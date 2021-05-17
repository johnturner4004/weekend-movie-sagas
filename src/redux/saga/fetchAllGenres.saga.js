import axios from "axios";
import {
  put
} from 'redux-saga/effects';

function* fetchAllGenres() {
  //get all movie genres from the DB
  try {
    const genres = yield axios.get('/api/genre');
    console.log('get all:', genres.data);
    yield put({
      type: 'SET_GENRES',
      payload: genres.data
    });
  } catch {
    console.log('get all genres error');
  }
}

export default fetchAllGenres;