import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = {images: []};

  // onSearchSubmit (term) {
  //   console.log ('App->onSearchSubmit', term);
  //   axios
  //     .get ('https://api.unsplash.com/search/photos', {
  //       params: {query: term},
  //       headers: {
  //         Authorization: 'Client-ID dba28937347d88249d994981b554ecc4d4b2b770ade79a0419adcb2823f744e4',
  //       },
  //     })
  //     .then (response => {
  //       console.log ('axios->results');
  //       console.log (response);
  //       console.log (response.data.results);
  //     });
  // }

  onSearchSubmit = async term => {
    console.log ('App->onSearchSubmit');
    console.log (term);

    const response = await unsplash.get ('/search/photos', {
      params: {query: term},
    });

    console.log ('async->axios->results');
    console.log (response);
    console.log (response.data.results);

    console.log ('this');
    console.log (this);
    this.setState ({images: response.data.results});
  };

  render () {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
