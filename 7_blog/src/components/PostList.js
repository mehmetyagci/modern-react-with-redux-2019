import React from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions';

class PostList extends React.Component {
  componentDidMount () {
      
  }

  render () {
    return <div>PostList</div>;
  }
}

export default connect (null, {fetchPosts: fetchPosts}) (PostList);
