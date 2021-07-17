import { combineReducers } from 'redux';
import movie from './movie';
import genres from './genre';
import filter from './filter';

export default combineReducers({
  filter,
  genres,
  movie,
});
