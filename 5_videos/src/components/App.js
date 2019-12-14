import React, {Component} from 'react';

import youtubeAPI from '../apis/youtube';

import VideoList from './VideoList';
import SearchBar from './SearchBar';
class App extends Component {
  state = {videos: []};

  onTermSubmit = async term => {
    console.log ('App->onTermSubmit->term:', term);
    const response = await youtubeAPI.get ('/search', {
      params: {
        q: term,
      },
    });
    console.log ('response');
    console.log (response);
    this.setState ({videos: response.data.items});
  };

  render () {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
