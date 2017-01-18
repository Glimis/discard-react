import React, { Component } from 'react';

export default class Plane  extends Component {
  render() {
    return (
      <div>
         <h3>{this.props.title}</h3>
           {this.props.children}
      </div>
    );
  }
};
