// import { FETCH_CASTS, FETCH_CASTS_FAILURE, FETCH_CASTS_SUCCESS } from "../constants/itemConstant";

// const defaultStateList = {
//     isFetching: false,
//     items:[],
//     error:{}
//   };
  

// const castList = (state = defaultStateList, action) => {
//     switch (action.type){
//       case FETCH_CASTS:
//         return Object.assign({}, state, {
//           isFetching:true
//         });
//       case FETCH_CASTS_SUCCESS:
//         return Object.assign({}, state, {
//           isFetching:false,
//           items:action.data
//         });
//       case FETCH_CASTS_FAILURE:
//         return Object.assign({}, state, {
//           isFetching:false,
//           error:action.data
//         });
//       default:
//         return state;
//     }
//   };