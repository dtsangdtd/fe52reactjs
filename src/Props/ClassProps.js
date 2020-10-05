import React, { Component } from 'react';

export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h2>Class Props</h2>
        <h3>Class Props</h3>
        <p>type : {this.props.typeProps} </p>
        <img src={this.props.linkHinh} alt='hinh anh'></img>
      </div>
    );
  }
}
