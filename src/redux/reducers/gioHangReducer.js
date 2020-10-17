const initialState = {
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
  danhSachSanPham: [
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
  ],
};
// default params
const gioHangreducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'DETAIL_PRODUCT': {
      state.sanPhamChiTiet = actions.payload;
      return { ...state };
    }
    case 'ADD_PRODUCT': {
      let danhSachGioHang = [...state.danhSachGioHang];
      const index = state.danhSachGioHang.findIndex((item) => {
        return item.maSanPham === actions.payload.maSanPham;
      });
      if (index !== -1) {
        // tim thay ==> update soluong
        danhSachGioHang[index].soLuong++;
      } else {
        // add vao gio hang
        actions.payload.soLuong = 1;
        danhSachGioHang = [...danhSachGioHang, actions.payload];
      }
      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }
    case 'DELETE_PRODUCT': {
      let danhSachGioHang = [...state.danhSachGioHang];
      danhSachGioHang = danhSachGioHang.filter((item) => {
        return item.maSanPham !== actions.payload.maSanPham;
      });
      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }
    default:
      break;
  }
  return state;
};
export default gioHangreducer;
