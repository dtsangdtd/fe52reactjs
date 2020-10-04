import React, { Component } from 'react';

export default class ClassEvents extends Component {
  // phuong thuc cua class
  handleFocus = () => {
    console.log('da forcus roi');
  };
  handleFocusParams = (message) => {
    console.log(message);
  };
  render() {
    return (
      <div>
        <h2>Class Event</h2>
        <input type='text' placeholder='focus' onFocus={this.handleFocus} />
        <input
          type='text'
          placeholder='focus params'
          onFocus={() => this.handleFocusParams('hello')}
        />
      </div>
    );
  }
}
