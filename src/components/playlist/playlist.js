import React from 'react';
import './playlist.css';
import TrackList from '../track-list/trackList';


class Playlist extends React.Component {
 render() {
  return (
   <div className="Playlist">
    <input defaultValue={'New Playlist'} />
    <TrackList tracks={this.props.playlistTracks}/>
    <button className="Playlist-save">SAVE TO SPOTIFY</button>
   </div>
  );
 }
}

export default Playlist; 