import React from 'react';
import './App.css';

import SearchBar from '../search-bar/searchBar';
import SearchResults from '../search-results/searchResults';
import Playlist from '../playlist/playlist';
import Spotify from '../../util/Spotify'

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   searchResults: [],
   playlistName: 'My Playlist',
   playlistTracks: [],
  };
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
 }

 //Adds track to playlist
 addTrack(track){
   if(this.state.playlistTracks.find
    (savedTrack=>savedTrack.id === track.id)){
      return;
    }else{
     this.state.playlistTracks.push(track);
     return this.setState({playlistTracks: this.state.playlistTracks})
    }
 }

 //Removes track from playlist
 removeTrack(track){
   let tracks = this.state.playlistTracks;
   if(tracks.filter(removeTrack => removeTrack.id === track.id)){
     tracks.splice(tracks.indexOf(track.id));
     return this.setState({playlistTracks: tracks});
   }else{
     return;
   }
 }

 //Updates playlist name.
 updatePlaylistName(name){
   this.setState({...this.state, playlistName: name})
 }

 //Saves track url to an array 
 savePlaylist(){
   const trackURIs = this.state.playlistTracks.map(track => track.uri);
   Spotify.savePlaylist(this.state.playlistName, trackURIs).then(()=>{
     this.setState({
       playlistName: 'New Playlist',
       playlistTracks: []
     })
   })
 }

 //Searched spotify by term provided in search bar. 
 search(term){
  Spotify.search(term).then(searchResults => {
    this.setState({...this.state, searchResults })
  })
 }

 render() {
  return (
   <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist playlistName={this.state.playlistName} 
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
                />
    </div>
   </div>
  </div>
  );
 }
}

export default App;
