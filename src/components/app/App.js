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
    {
     name,
     artist,
     album,
     id,
    },
   ],
  };
 }
 render() {
  return (
   <div>
    <h1>
     Ja<span className="highlight">mmm</span>ing
    </h1>
    <SearchBar />
    <div className="App">
      <SearchResults searchResults={this.state.SearchResults}/>
      <Playlist />
    <div className="App-playlist"></div>
    </div>
   </div>
  );
 }
}

export default App;
