import React from 'react';
import './searchBar.css'

class SearchBar extends React.Component {
constructor(props){
    super(props)
    this.search = this.search.bind(this)
    this.handleTermChane = this.handleTermChane.bind(this)
}
search(){
    this.props.onSearch(this.state.searchTerm)

}

handleTermChane(e){
    this.setState({ searchTerm: e.target.value })
}

 render() {
  return (
   <div className="SearchBar">
    <input placeholder="Enter a song, album, or artist" onChange={(e) => this.handleTermChane(e)} />
    <button className="SearchButton">SEARCH</button>
   </div>
  );
 }
}

export default SearchBar;
