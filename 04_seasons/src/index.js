import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor (props) {
    super (props);

    // THIS IS THE ONLY TIME we do direct assignment
    this.state = {lat: null};

    window.navigator.geolocation.getCurrentPosition (
      position => {
        console.log (position);
        this.setState ({lat: position.coords.latitude}); // we called setstate!!!!
      },
      err => console.log (err)
    );
  }

  //React says we have to define render!!
  render () {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render (<App />, document.querySelector ('#root'));
