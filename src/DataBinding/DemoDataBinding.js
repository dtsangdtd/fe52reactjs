import React, { Component } from 'react';

export default class DemoDataBinding extends Component {
  ten = 'Duong Thanh Sang';
  lop = 52;
  renderName = () => {
    return <p>ten: {this.ten}</p>;
  };
  render() {
    // bien phuong thuc render
    const hinhAnh = 'https://wallpapercave.com/wp/xUJitYk.jpg';
    return (
      <div>
        <h2>DataBinding</h2>
        {/* <p>Ten: {this.ten} </p> */}
        {this.renderName()}
        <p>Lop: {this.lop} </p>
        <img src={hinhAnh} alt='day la hinh window'></img>
      </div>
    );
  }
}
