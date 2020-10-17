/**
 * các bước thực hiện :
 * 1. dàn layout ( html css ) - done
 * 2. xác định data thay đổi và lưu vào state - done
 * 3. lấy data trong state đi binding ra jsx - done
 * 4. render mãng dử liệu - done
 * 5. xây dựng chức năng xem chi tiết - done
 * 6. xây dựng chức năng thêm giỏ hàng - done
 * 7. xây dựng chức năng xóa sp khoải giỏ hàng - done
 * 8. xây dựng chức năng tăng giảm số lượng
 * 9. xây dựng chức năng hiển thị tông số sản phẩm
 */

import React, { Component } from 'react';
import Modal from './Modal';
import SanPham from './SanPham';
import { connect } from 'react-redux';

class BaiTapGioHang extends Component {
  renderDanhSachSanPham = () => {
    return this.props.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className='col-sm-4' key={index}>
          <SanPham sanPham={sanPham} />
        </div>
      );
    });
  };

  renderTotal = () => {
    let { danhSachGioHang } = this.props;
    let total = danhSachGioHang.reduce((tong, cartHienTai) => {
      return (tong += cartHienTai.soLuong);
    }, 0);
    return total;
  };

  render() {
    return (
      <div>
        <div>
          <section className='container'>
            <h3 className='title text-center'>Bài tập giỏ hàng</h3>
            <div className='container text-center my-2'>
              <button
                className='btn btn-danger '
                data-toggle='modal'
                data-target='#modelId'
              >
                Giỏ hàng : {this.renderTotal()}
              </button>
            </div>
            <div className='container'>
              <div className='row'>{this.renderDanhSachSanPham()}</div>
            </div>
            <Modal />
            <div className='row'>
              <div className='col-sm-5'>
                <img
                  className='img-fluid'
                  src={this.props.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              <div className='col-sm-7'>
                <h3>Thông số kỹ thuật</h3>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.props.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.props.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.props.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.props.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.props.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.props.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // key : value
    // key là props của component : value là state được lưu trên store
    danhSachSanPham: state.gioHangReducer.danhSachSanPham,
    sanPhamChiTiet: state.gioHangReducer.sanPhamChiTiet,
    danhSachGioHang: state.gioHangReducer.danhSachGioHang,
  };
};

export default connect(mapStateToProps)(BaiTapGioHang);
