import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // constructor (props) {
  //   super (props);

  //   // THIS IS THE ONLY TIME we do direct assignment
  //   this.state = {lat: null, errorMessage: ''};
  // }

  state = {lat: null, errorMessage: ''};

  componentDidMount () {
    console.log (
      'componentDidMount -> My component was rendered to the screen'
    );

    // window.navigator.geolocation.getCurrentPosition (
    //   position => {
    //     console.log (position);
    //     this.setState ({lat: position.coords.latitude}); // we called setstate!!!!
    //   },
    //   // err => console.log (err)
    //   err => {
    //     console.log (err);
    //     this.setState ({errorMessage: err.message});
    //   }
    // );

    window.navigator.geolocation.getCurrentPosition (
      position => this.setState ({lat: position.coords.latitude}),
      err => this.setState ({errorMessage: err.message})
    );
  }

  componentDidUpdate () {
    console.log (
      'componentDidUpdate -> My component was just updated - it rendered!'
    );
  }

  componentWillUnmount () {
    console.log ('componentWillUnmount');
  }

  //React says we have to define render!!
  render () {
    console.log ('render -> My component was just rendered!');

    const {lat, errorMessage} = this.state;

    if (errorMessage && !lat) {
      return <div>Error:{errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <div><SeasonDisplay lat={this.state.lat} /></div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render (<App />, document.querySelector ('#root'));
