import _ from 'lodash';

import jsonPlaceHolder from '../apis/jsonPlaceHolder';

// Action Creatros in Action Creators!
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log ('About to fetch posts');
  await dispatch (fetchPosts ());
  console.log (getState ().posts);
  console.log ('fetched posts!');

  const userIds = _.uniq (_.map (getState ().posts, 'userId'));
  console.log ('userIds:', userIds);
  userIds.forEach (id => dispatch (fetchUser (id)));

  // await Promise.all (userIds.map (id => dispatch (fetchUser (id))));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get ('/posts');

  dispatch ({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get (`/users/${id}`);

  dispatch ({type: 'FETCH_USER', payload: response.data});
};

//#region memoize

// export const fetchUser = id => dispatch => {
//   _fetchUser (id, dispatch);
// };

// // private method for memoize
// const _fetchUser = _.memoize (async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get (`/users/${id}`);

//   dispatch ({type: 'FETCH_USER', payload: response.data});
// });

//#endregion memoize

// export const fetchUser = (id) => async dispatch => {
//   const response = await jsonPlaceHolder.get (`/users/${id}`);

//   dispatch ({type: 'FETCH_USER', payload: response.data});
// };

// export const fetchUser = function (id) {
//   return _.memoize (async function (dispatch) {
//     const response = await jsonPlaceHolder.get (`/users/${id}`);

//     dispatch ({type: 'FETCH_USER', payload: response.data});
//   });
// };

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
