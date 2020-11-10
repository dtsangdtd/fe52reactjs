import React, { Component } from 'react';

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: '',
        tennv: '',
        email: '',
      },
      errors: {
        manv: '',
        tennv: '',
        email: '',
      },
      formValid: false,
      manvValid: false,
      tennvValid: false,
      emailValid: false,
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      values: { ...this.state.values },
      [name]: value,
    });
  };
  handleErrors = (e) => {
    const { name, value } = e.target;
    // let mess = "";
    //   if(value === ""){
    //      mess = "Không được rỗng";
    //   } else {
    //       mess = "";
    //   }
    // Dùng toán tử 3 ngôi cho gọn code
    let mess = value === '' ? 'không được rỗng' : '';
    let { manvValid, tennvValid, emailValid } = this.state;
    switch (name) {
      case 'manv':
        manvValid = mess !== '' ? false : true;
        if (value && value.length < 4) {
          manvValid = false;
          mess = 'độ dài ký tự phải lớn hơn 3';
        }
        break;
      case 'tennv':
        tennvValid = mess !== '' ? false : true;
        break;
      case 'email':
        emailValid = mess !== '' ? false : true;
        if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          emailValid = false;
          mess = 'không đúng định dạng';
        }
        break;

      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleFormValid = () => {
    const { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid,
    });
  };
  render() {
    return (
      <div className='container'>
        <h3 className='title'>*FormValidation</h3>
        <form>
          <div className='form-group'>
            <label>Mã nhân viên</label>
            <input
              type='text'
              className='form-control'
              name='manv'
              onChange={this.handleOnChange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.manv !== '' ? (
              <div className='alert alert-danger'>
                {'Mã nhân viên '}
                {this.state.errors.manv}{' '}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='form-group'>
            <label>Tên nhân viên</label>
            <input
              onChange={this.handleOnChange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
              type='text'
              className='form-control'
              name='tennv'
            />
            {this.state.errors.tennv !== '' ? (
              <div className='alert alert-danger'>
                {'Tên nhân viên '}
                {this.state.errors.tennv}{' '}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              onChange={this.handleOnChange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
              type='email'
              className='form-control'
              name='email'
            />
            {this.state.errors.email !== '' ? (
              <div className='alert alert-danger'>
                {'Email '}
                {this.state.errors.email}{' '}
              </div>
            ) : (
              ''
            )}
          </div>
          <button
            type='submit'
            className='btn btn-success'
            disabled={this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
