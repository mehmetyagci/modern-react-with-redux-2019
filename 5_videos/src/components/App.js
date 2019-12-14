import React, {Component} from 'react';

import SearchBar from './SearchBar';
import youtubeAPI from '../apis/youtube';

class App extends Component {
  onTermSubmit = async term => {
    console.log ('App->onTermSubmit->term:', term);
    const response = await youtubeAPI.get ('/search', {
      params: {
        q: term,
      },
    });
    console.log ('response');
    console.log (response);
  };

  render () {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
