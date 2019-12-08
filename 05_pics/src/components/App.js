import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit (term) {
    console.log ('App->onSearchSubmit', term);
  }

  render () {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        App
      </div>
    );
  }
}

export default App;
