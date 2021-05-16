import { combineReducers } from 'redux';
import movies from './movies.reducer';
import genres from './genres.reducer';
import details from './details.reducer';

const rootReducer = combineReducers({
  movies,
  genres,
  details
});

export default rootReducer;