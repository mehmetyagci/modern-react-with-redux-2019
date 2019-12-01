import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor (props) {
    super (props);

    // THIS IS THE ONLY TIME we do direct assignment
    this.state = {lat: null, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition (
      position => {
        console.log (position);
        this.setState ({lat: position.coords.latitude}); // we called setstate!!!!
      },
      // err => console.log (err)
      err => {
        console.log (err);
        this.setState ({errorMessage: err.message});
      }
    );
  }

  //React says we have to define render!!
  render () {
    const {lat, errorMessage} = this.state;

    if (errorMessage && !lat) {
      return <div>Error:{errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <div>Latitude: {lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render (<App />, document.querySelector ('#root'));
