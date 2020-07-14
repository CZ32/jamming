import React from 'react';
import ReactDOM from 'react-dom';
import './searchBar.css'

export class SearchBar extends React.Component {
 render() {
  return (
   <div className="SearchBar">
    <input placeholder="Enter a song, album, or artist" />
    <button className="SearchButton">SEARCH</button>
   </div>
  );
 }
}
