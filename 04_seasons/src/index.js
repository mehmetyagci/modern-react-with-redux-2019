import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      lat: null,
    };
  }

  render () {
    window.navigator.geolocation.getCurrentPosition (
      position => console.log (position),
      err => console.log (err)
    );

    return (
      <div>
        <h1>Latitude:</h1>
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render (<App />, document.querySelector ('#root'));
