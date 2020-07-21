import React from 'react';
import './App.css';

import SearchBar from '../search-bar/searchBar';
import SearchResults from '../search-results/searchResults';
import Playlist from '../playlist/playlist';

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   searchResults: [
    { name: 'Everybody is a Star', artist: 'Sly & The Family Stone', album: 'Stone-Greatest Hits', id: 1,},
    { name: '100', artist: 'The Game', album: '', id: 2 }
   ],
   playlistName: 'Sex-a-thon',
   playlistTracks: [
     {name: 'Track1', artist: 'album1', id: 3},
     {name: 'Track2', artist: 'album2', id: 4},
     {name: 'Track3', artist: 'album3', id: 5}
    ],
  };
  this.addTrack = this.addTrack.bind(this);
 }

 addTrack(track){
   if(this.state.playlistTracks.find
    (savedTrack=>savedTrack.id === track.id)){
      return;
    }else{
     this.state.playlistTracks.push(track);
     return this.setState({playlistTracks: this.state.playlistTracks})
    }
 }
 render() {
  return (
   <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
    <SearchBar/>
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
    </div>
   </div>
  </div>
  );
 }
}

export default App;
