import React from 'react';
// cach nhan du lieu tu props
export default function FunctionProps(props) {
  return (
    <div>
      <h3>Function Props</h3>
      <p>type : {props.loaiCho}</p>
      <img src={props.linkHinh} alt='hinh anh'></img>
    </div>
  );
}
