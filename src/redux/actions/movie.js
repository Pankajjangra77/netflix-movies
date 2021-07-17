import { SET_MOVIE } from '../constants/itemConstant';

export default movie => ({
  type: SET_MOVIE,
  payload: movie,
});
