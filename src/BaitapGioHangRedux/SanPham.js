import React, { Component } from 'react';
import { connect } from 'react-redux';
class SanPham extends Component {
  render() {
    return (
      <div className='card'>
        <img className='card-img-top' src={this.props.sanPham.hinhAnh} />
        <div className='card-body'>
          <h4 className='card-title'>{this.props.sanPham.tenSanPham}</h4>
          <button
            className='btn btn-success'
            onClick={() => {
              this.props.handleDetail(this.props.sanPham);
            }}
          >
            Chi tiết
          </button>
          <button
            className='btn btn-danger'
            onClick={() => {
              // this.props.handleAddSanPham(this.props.sanPham);
              // USE REDUX
              this.props.handleCart(this.props.sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // key : value
    // key la props component
    // value la phuong thuc gui action len store
    handleDetail: (sanPham) => {
      const action = {
        type: 'DETAIL_PRODUCT',
        payload: sanPham,
      };
      dispatch(action);
    },
    handleCart: (product) => {
      const action = {
        type: 'ADD_PRODUCT',
        payload: product,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPham);
