import { GET_GENRES } from '../constants/itemConstant';

export default genres => ({
  type: GET_GENRES,
  payload: genres,
});
