import React from 'react';
import './searchResults.css';

import TrackList from '../track-list/trackList';


class SearchResults extends React.Component {
 render() {
  return (
   <div>
    <h2>Results</h2>
    <TrackList tracks={this.props.searchResults}/>
   </div>
  );
 }
}

export default SearchResults;