import React, { Component } from 'react';
import Model from './Model';
import SanPham from './SanPham';
/**
 * các bước thực hiện
 * 1/dàn layout
 * 2/xát đinh data thây đổi và lưu vào state
 * 3/lấy data trong state đi binding ra jsx
 * 4/render mảng dữ liệu done
 * 5/xây dựng chức năng xem chi tiết
 * 6/xây dựng chức năng thêm giỏ hàng
 * 7/xóa sản phẩm khổi giỏ hàng
 * 8/tăng giảm số lượng sản phẩm
 * 9/xây dựng chức năng hiển thị tổng số sản phẩm
 */
export default class BaitapGioHang extends Component {
  danhSachSanPham = [
    {
      giaban: 392984,
      maSanPham: '1',
      tenSanPham: `vinsmart`,
      hinhAnh: './img/vsphone.jpg',
      manHinh: `AMOLED ", FHD+ 1080 `,
      heDieuHanh: `Android 9.0 (Pie)`,
      cameraTruoc: `20 MP`,
      cameraSau: `Chính 48 MP &amp; Phụ 8 MP, 5 MP`,
      ram: `4 GB`,
      rom: `120 GB`,
    },
    {
      giaban: 900000,
      maSanPham: '2',
      tenSanPham: `meizuphone`,
      hinhAnh: './img/meizuphone.jpg',
      manHinh: `AMOLED ", FHD+ `,
      heDieuHanh: `Android 9.0 (Pie)`,
      cameraTruoc: `10 MP`,
      cameraSau: `Chính 3 MP &amp; Phụ 9 MP, 2 MP`,
      ram: `18 GB`,
      rom: `64 GB`,
    },
    {
      giaban: 1222000,
      maSanPham: '3',
      tenSanPham: `apple phone`,
      hinhAnh: './img/applephone.jpg',
      manHinh: `AMOLED ", FHD+ 2232 x 1080 pixels`,
      heDieuHanh: `IOS`,
      cameraTruoc: `21 MP`,
      cameraSau: `Chính 100 MP &amp; Phụ 2 MP, 5 MP`,
      ram: `9 GB`,
      rom: `64GB`,
    },
  ];
  state = {
    sanPhamChiTiet: {
      giaban: 150000,
      maSanPham: '1',
      tenSanPham: `apple phone`,
      hinhAnh: './img/meizuphone.jpg',
      manHinh: `AMOLED ", FHD+ 2232 x 1080 pixels`,
      heDieuHanh: `Android 9.0 (Pie)`,
      cameraTruoc: `20 MP`,
      cameraSau: `Chính 48 MP &amp; Phụ 8 MP, 5 MP`,
      ram: `4 GB`,
      rom: `1000 GB`,
    },
    danhSachGioHang: [],
  };
  handleAddSanPham = (sanPham) => {
    // console.log(sanPham);
    let danhSachGioHang = [...this.state.danhSachGioHang];
    /**tim xem co ton tai trong mang hay khong  */
    /**neu co ton tai tra ve index
     * ne khong ton tai tra ve -1
     */
    const index = danhSachGioHang.findIndex((cart) => {
      return cart.maSanPham === sanPham.maSanPham;
    });
    if (index !== -1) {
      danhSachGioHang[index].soLuong++;
    } else {
      sanPham.soLuong = 1;
      danhSachGioHang = [...danhSachGioHang, sanPham];
    }
    // danhSachGioHang.push(sanPham);
    // setState;
    this.setState(
      {
        danhSachGioHang,
      },
      () => {
        console.log(this.state.danhSachGioHang);
      }
    );
  };

  handleDetail = (sanPham) => {
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };
  handleDelete = (cart) => {
    let danhSachGioHang = this.state.danhSachGioHang;
    danhSachGioHang = danhSachGioHang.filter((item) => {
      return cart.maSanPham !== item.maSanPham;
    });
    this.setState({ danhSachGioHang });
  };
  handleIncrement = (cart, status) => {
    // 1lay mang gio hang
    // 2tim vi tri cua phan tu duoc nhan
    // 3 check xem tang hay giam
    // 4 cap nhat lai state
    let { danhSachGioHang } = this.state;
    const index = danhSachGioHang.findIndex((item) => {
      return item.maSanPham === cart.maSanPham;
    });
    if (index !== -1) {
      status
        ? danhSachGioHang[index].soLuong++
        : danhSachGioHang[index].soLuong <= 1
        ? alert('khong duoc giam')
        : danhSachGioHang[index].soLuong--;
      // if (status) {
      //   danhSachGioHang[index].soLuong++;
      // } else {
      //   danhSachGioHang[index].soLuong <= 1
      //     ? alert('khong duoc giam')
      //     : danhSachGioHang[index].soLuong--;
      // }
    }
    this.setState({
      danhSachGioHang,
    });
    console.log(cart, status);
  };
  renderTotal = () => {
    let { danhSachGioHang } = this.state;
    let total = danhSachGioHang.reduce((tong, cartHienTai) => {
      return (tong += cartHienTai.soLuong);
    }, 0);
    return total;
  };
  renderDanhSachSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div key={index} className='col-sm-4'>
          <SanPham
            handleDetail={this.handleDetail}
            /* (is props)  (gọi phương thức handleDetail)*/
            sanPham={sanPham}
            handleAddSanPham={this.handleAddSanPham}
          />
        </div>
      );
    });
  };
  render() {
    return (
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
          <div>
            <Model
              danhSachGioHang={this.state.danhSachGioHang}
              handleDelete={this.handleDelete}
              handleIncrement={this.handleIncrement}
            />
          </div>
          <div className='row'>
            <div className='col-sm-5'>
              <img
                className='img-fluid'
                src={this.state.sanPhamChiTiet.hinhAnh}
              />
            </div>
            <div className='col-sm-7'>
              <h3>Thông số kỹ thuật</h3>
              <table className='table'>
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.state.sanPhamChiTiet.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.sanPhamChiTiet.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
