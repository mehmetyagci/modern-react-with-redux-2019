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
    if (errorMessage.length > 0) {
      return <div>Error:{errorMessage}</div>;
    }

    return (
      <div>
        Latitude: {lat}
      </div>
    );
  }
}

ReactDOM.render (<App />, document.querySelector ('#root'));
