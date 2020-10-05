import React, { Component } from 'react';

export default class DemoCourse extends Component {
  danhSachKhoaHoc = ['ReactJS', 'NodeJS', 'VueJS'];
  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };
  render() {
    return (
      <div>
        <h2>List and Keys</h2>
        <h3>Danh Sach Khoa Hoc</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
