import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {
  renderList () {
    return this.props.songs.map (song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong (song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render () {
    console.log (this.props);
    console.log (this.props.songs);
    return <div className="ui divided list">{this.renderList ()}</div>;
  }
}

const mapStateToProps = state => {
  console.log (state);

  //   return state;
  return {songs: state.songs};
};

export default connect (mapStateToProps, {selectSong: selectSong}) (SongList);

// ES6 Syntax
// export default connect (mapStateToProps, {selectSong}) (SongList);
