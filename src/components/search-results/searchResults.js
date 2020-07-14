import React from 'react';
import TrackList from '../track-list/trackList';
import './searchResults.css';

export class SearchResults extends React.Component {
 render() {
  return (
   <div>
    <h2>Results</h2>
    <TrackList tracks={this.props.SearchResults}/>
   </div>
  );
 }
}
