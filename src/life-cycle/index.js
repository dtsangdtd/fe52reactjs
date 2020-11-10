import React, { Component } from 'react';
import Child from './child';
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log('constuctor - chay mot lan duy nhat');
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount - chay mot lan duy nhat');
  }
  componentDidMount() {
    console.log('componentDidMount - chay mot lan duy nhat');
    // goi api
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate - chay khi state thay doi ');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate - chay khi state thay doi ');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (nextState.number > 3) {
      return false;
    }
    return true;
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    return (
      <div>
        <h3>Life Cycle</h3>
        <i className='fas fa-h1    '>Number : {this.state.number}</i>
        <button
          className='btn btn-success'
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          tăng số
        </button>

        <Child />
      </div>
    );
  }
}
