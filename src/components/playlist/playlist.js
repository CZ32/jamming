import React from 'react';
import './playlist.css';
import TrackList from '../track-list/trackList';


class Playlist extends React.Component {


handleNameChange(e){
    this.props.onNameChange(e.target.value)

}
 render() {
  return (
   <div className="Playlist">
    <input defaultValue={'New Playlist'} onChange={(e) => this.handleNameChange(e)}/>
    <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
    <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
   </div>
  );
 }
}

export default Playlist; 