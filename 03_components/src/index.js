import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName ()}
          timeAgo="Today at 4:45PM"
          content={faker.random.words (5)}
          avatar={faker.image.avatar ()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName ()}
          timeAgo="Today at 2:15AM"
          content={faker.random.words (5)}
          avatar={faker.image.avatar ()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName ()}
          timeAgo="Today at 5:00PM"
          content={faker.random.words (5)}
          avatar={faker.image.avatar ()}
        />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render (<App />, document.querySelector ('#root'));
