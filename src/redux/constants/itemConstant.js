export const SET_MOVIE = 'SET_MOVIE';
export const GET_GENRES = 'GET_GENRE';
export const FILTER_BOOK = 'FILTER_BOOK';
export const FETCH_CASTS = 'FETCH_CASTS';
export const FETCH_CASTS_SUCCESS = 'FETCH_CASTS_SUCCESS';
export const FETCH_CASTS_FAILURE = 'FETCH_CASTS_FAILURE';

// function fetchCasts() {
//     return {
//       type: FETCH_CASTS
//     };
//   }
  
//   function fetchCastsSuccess(data) {
//     return {
//       type: FETCH_CASTS_SUCCESS,
//       data
//     };
//   }
  
//   function fetchCastsFail(error) {
//     return {
//       type: FETCH_CASTS_FAILURE,
//       error
//     };
//   }

//   export const URL_DETAIL = 'https://api.themoviedb.org/3/movie/';
//   export const URL_CAST = '/casts';
//   export const API_KEY = '?api_key=4d4ed145d3584846f5922b6a467e1f85';

//   export function fetchCastList(id){
//     const url_casts = URL_DETAIL + id + URL_CAST + API_KEY;
//     return function(dispatch){
//       dispatch(fetchCasts())
//       return fetch(url_casts)
//         .then(response => response.json())
//         .then(json => json.cast)
//         .then(data => dispatch(fetchCastsSuccess(data)))
//         .catch(error => dispatch(fetchCastsFail(error)))
//     }
//   }

