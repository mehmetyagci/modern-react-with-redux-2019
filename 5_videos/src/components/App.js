import React, {Component} from 'react';

import youtubeAPI from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {videos: [], selectedVideo: null};

  componentDidMount () {
    this.onTermSubmit ('buildings');
  }

  onTermSubmit = async term => {
    console.log ('App->onTermSubmit->term:', term);
    const response = await youtubeAPI.get ('/search', {
      params: {
        q: term,
      },
    });
    console.log ('response');
    console.log (response);
    this.setState ({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    console.log ('From the App!', video);
    this.setState ({selectedVideo: video});
  };

  render () {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
