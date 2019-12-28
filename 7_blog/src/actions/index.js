import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get ('/posts');

  dispatch ({type: 'FETCH_POSTS', payload: response});
};

// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const response = await jsonPlaceHolder.get ('/posts');

//     dispatch ({type: 'FETCH_POSTS', payload: response});
//   };
// };

// export const fetchPosts = () => {
//   return function (dispatch, getState) {
//     const promise = jsonPlaceHolder.get ('/posts');

//     return {
//       type: 'FETCH_POSTS',
//       payload: promise,
//     };
//   };
// };

// // TOTALY FINE!
// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST',
//   };
// };
