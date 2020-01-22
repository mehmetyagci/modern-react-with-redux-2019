import React from 'react';

class ResourceList extends React.Component {
  render () {
    return (
      <div>
        <div>
          <h1>ResourceList</h1>
        </div>
        <div>
          <h2>{this.props.resource}</h2>
        </div>
      </div>
    );
  }
}

export default ResourceList;
