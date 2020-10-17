import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddProduct, actDetailProduct } from "./../redux/actions";

class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.sanPham.tenSanPham}</h4>
          <button
            className="btn btn-success"
            onClick={() => {
              const sanPhamDuocNhan = this.props.sanPham;
              this.props.handleDetail(sanPhamDuocNhan);
            }}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              const sanPhamDuocNhan = this.props.sanPham;
              this.props.handleAddCart(sanPhamDuocNhan);
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
    // key là props của component : value là phương thức gửi action lên store
    handleDetail: (sp) => {
      dispatch(actDetailProduct(sp));
    },
    handleAddCart: (product) => {
      dispatch(actAddProduct(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
