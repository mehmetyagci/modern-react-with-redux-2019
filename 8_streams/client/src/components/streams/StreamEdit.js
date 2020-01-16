import React from 'react';
import {connect} from 'react-redux';

import _ from 'lodash';

import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount () {
    this.props.fetchStream (this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log (formValues);
  };

  render () {
    console.log ('StreamEdit:', this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const id = this.props.match.params.id;
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          // initialValues={{title: 'EDIT ME', description: 'CHANGE ME TOO'}}
          // initialValues={this.props.stream}
          // initialValues={{
          //   title: this.props.stream.title,
          //   description: this.props.stream.description,
          // }}
          initialValues={_.pick (this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log ('StreamEdit->ownProps:', ownProps);
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect (mapStateToProps, {
  fetchStream,
  editStream,
}) (StreamEdit);
