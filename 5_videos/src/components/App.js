import React, {Component} from 'react';

import youtubeAPI from '../apis/youtube';

import VideoList from './VideoList';
import SearchBar from './SearchBar';
class App extends Component {
  state = {videos: [], selectedVideo: null};

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

  onVideoSelect = video => {
    console.log ('From the App!', video);
  };

  render () {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
