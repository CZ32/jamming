import React from 'react';
import './trackList.css';
import Track from '../track/track';

export class TrackList extends React.Component {
 render() {
  return <div className="TrackList">
        {
        this.props.tracks.map((track) =>{
           return <Track track={track} key={track.id}/>
        })
        }
  </div>;
 }
}
