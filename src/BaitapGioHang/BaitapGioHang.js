import React, { Component } from 'react';
import SanPham from './SanPham';
/**
 * các bước thực hiện
 * 1/dàn layout
 * 2/xát đinh data thây đổi và lưu vào state
 * 3/lấy data trong state đi binding ra jsx
 * 4/render mảng dữ liệu
 * 5/xây dựng chức năng xem chi tiết
 * 6/xây dựng chức năng thêm giỏ hàng
 * 7/xóa sản phẩm khổi giỏ hàng
 * 8/tăng giảm số lượng sản phẩm
 * 9/xây dựng chức năng hiển thị tổng số sản phẩm
 */
export default class BaitapGioHang extends Component {
  danhSachSanPham = [
    {
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
  };
  renderDanhSachSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div key={index} className='col-sm-4'>
          <SanPham />
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
              Giỏ hàng (10)
            </button>
          </div>
          <div className='container'>
            <div className='row'>{this.renderDanhSachSanPham()}</div>
          </div>
          <div
            className='modal fade'
            id='modelId'
            tabIndex={-1}
            aria-labelledby='modelTitleId'
            aria-hidden='true'
            style={{ display: 'none' }}
          >
            <div
              className='modal-dialog'
              role='document'
              style={{ maxWidth: 1000 }}
            >
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>Giỏ hàng</h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>×</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>tên sản phẩm</th>
                        <th>hình ảnh</th>
                        <th>số lượng</th>
                        <th>đơn giá</th>
                        <th>thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Meizu 16Xs</td>
                        <td>
                          <img src='./img/meizuphone.jpg' width={50} />
                        </td>
                        <td>
                          <button>-</button>5<button>+</button>
                        </td>
                        <td>7600000</td>
                        <td>38000000</td>
                        <td>
                          <button className='btn btn-danger'>Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Iphone XS Max</td>
                        <td>
                          <img src='./img/applephone.jpg' width={50} />
                        </td>
                        <td>
                          <button>-</button>5<button>+</button>
                        </td>
                        <td>27000000</td>
                        <td>135000000</td>
                        <td>
                          <button className='btn btn-danger'>Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-dismiss='modal'
                  >
                    Close
                  </button>
                  <button type='button' className='btn btn-primary'>
                    Save
                  </button>
                </div>
              </div>
            </div>
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
