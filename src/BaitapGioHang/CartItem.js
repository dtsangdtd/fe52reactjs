import React from 'react';

export default function CartItem(props) {
  return (
    <tr>
      <td>{props.cart.maSanPham}</td>
      <td>{props.cart.tenSanPham}</td>
      <td>
        <img src={props.cart.hinhAnh} width={50} />
      </td>
      <td>
        <button
          onClick={() => {
            props.handleIncrement(props.cart, false);
          }}
        >
          -
        </button>
        {props.cart.soLuong}
        <button
          onClick={() => {
            props.handleIncrement(props.cart, true);
          }}
        >
          +
        </button>
      </td>
      <td>{props.cart.giaban}</td>
      <td>{props.cart.giaban * props.cart.soLuong} </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => {
            props.handleDelete(props.cart);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
