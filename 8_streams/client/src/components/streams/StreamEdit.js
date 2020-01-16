import React from 'react';
import {connect} from 'react-redux';

const StreamEdit = props => {
  console.log ('StreamEdit:',props);
  const id = props.match.params.id;
  return (
    <div>
      StreamEdit
      <br />
      id: {id}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log ('StreamEdit->ownProps:', ownProps);
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect (mapStateToProps) (StreamEdit);
