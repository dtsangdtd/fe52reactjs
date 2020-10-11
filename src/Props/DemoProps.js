import React, { Component } from 'react';
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps';

export default class DemoProps extends Component {
  type = 'Husky';
  image =
    'https://i.pinimg.com/originals/34/94/c4/3494c41f01e75abf1ebd2f26735abaed.jpg';

  render() {
    return (
      <div>
        <h2>Demo Props</h2>
        {/* props dung de truyen du lieu giua components  */}
        {/* Cach truyen du lieu */}
        <FunctionProps loaiCho={this.type} linkHinh={this.image} />
        <ClassProps typeProps={this.type} linkHinh={this.image} />
      </div>
    );
  }
}
