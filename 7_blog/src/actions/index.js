import _ from 'lodash';

import jsonPlaceHolder from '../apis/jsonPlaceHolder';

// Action Creatros in Action Creators!
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log ('About to fetch posts and users');
  await dispatch (fetchPosts ());
  console.log (getState ().posts);
  console.log ('fetched posts!');

  _.chain (getState ().posts)
    .map ('userId')
    .uniq ()
    .forEach (id => dispatch (fetchUser (id)))
    .value ();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get ('/posts');

  dispatch ({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get (`/users/${id}`);

  dispatch ({type: 'FETCH_USER', payload: response.data});
};
