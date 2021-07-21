import { combineReducers } from 'redux';
import movie from './movie';
import genres from './genre';

export default combineReducers({
  genres,
  movie,
});
