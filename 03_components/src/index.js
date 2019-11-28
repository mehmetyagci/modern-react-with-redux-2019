import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">

      <CommentDetail
        author={faker.name.firstName ()}
        timeAgo="Today at 4:45PM"
        content={faker.random.words (5)}
        avatar={faker.image.avatar ()}
      />
      <CommentDetail
        author={faker.name.firstName ()}
        timeAgo="Today at 2:15AM"
        content={faker.random.words (5)}
        avatar={faker.image.avatar ()}
      />
      <CommentDetail
        author={faker.name.firstName ()}
        timeAgo="Today at 5:00PM"
        content={faker.random.words (5)}
        avatar={faker.image.avatar ()}
      />

    </div>
  );
};

ReactDOM.render (<App />, document.querySelector ('#root'));
