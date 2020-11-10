import React, { Component, PureComponent } from 'react';

export default class Child extends PureComponent {
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('UNSAFE_componentWillReceiveProps');
  }
  render() {
    console.log('render component child');
    return <div>Child</div>;
  }
}
