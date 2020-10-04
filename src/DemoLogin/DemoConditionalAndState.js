import React, { Component } from 'react';

export default class DemoConditionalAndState extends Component {
  /**isLogin la thuoc tinh cua class
   * true : da dang nhap =>hien ten nguoi dung
   * false : chua dang nhap => hien nut login
   *      */
  state = {
    isLogin: false,
  };
  // isLogin = false;
  handleClick = () => {
    // this.isLogin = true;
    this.setState({ isLogin: true });
  };
  // phuong thuc cua class
  renderLogin = () => {
    // cach 1 dung if else
    // if (this.isLogin) {
    //   return <p>Duong Thanh Sang</p>;
    // } else {
    //   return <button>Login</button>;
    // }
    // cach 2 dung toan tu 3 ngoi
    // dieu kien ?  xu ly dung :  xu ly sai
    return this.state.isLogin ? (
      <p>Duong Thanh Sang</p>
    ) : (
      <button onClick={this.handleClick}>Login</button>
    );
  };
  render() {
    // console.log('run render');
    return (
      <div>
        <h2>Conditional and State</h2>
        <div>{this.renderLogin()}</div>
      </div>
    );
  }
}
