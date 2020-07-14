import React from 'react';
import './track.css';

export class Track extends React.Component {
 constructor(props) {
  super(props);
 }

 renderAction(isRemoval) {
    return isRemoval === true ? '-': '+';
 }
 
 render() {
  return (
   <div className="Track">
    <div className="Track-information">
     <h3>{this.props.track}</h3>
     <p>
      {this.props.artist} | {this.props.album}
     </p>
     <button className="Track-action">{this.renderAction}</button>
    </div>
   </div>
  );
 }
}
