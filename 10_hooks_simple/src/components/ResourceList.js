import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
  state = {resources: []};

  async componentDidMount () {
    const response = await axios.get (
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState ({resources: response.data});
  }

  async componentDidUpdate (prevProps) {
    console.log ('prevProps:', prevProps);
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get (
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState ({resources: response.data});
    }
  }

  render () {
    return (
      <div>
        <div>
          <h1>ResourceList</h1>
        </div>
        <div>
          <h2>{this.props.resource}</h2>
        </div>
        <div>
          <h3>{this.state.resources.length}</h3>
        </div>
      </div>
    );
  }
}

export default ResourceList;
